import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { QEle } from "./interfaces/Q";
import { queryCollection as queryCollectionRequest } from '@/services/api/queryCollection';
import { IOperation } from "./interfaces/Operation";
import { TransactionApi } from "@/services/api/TransactionsApi";
import { Transaction } from "./interfaces/Transaction";
import { SyncrecordValuesApi } from "@/services/api/SyncRecordValuesApi";
import { SyncRecordValuesRequest } from "./interfaces/SyncRecordValuesRequest";
import { useRecordValuesStore } from "@/stores/recordValues";
import { Text } from "@/entities/Text";
import { CollectionView } from "@/entities/CollectionView";
import { CollectionViewPage } from "@/entities/CollectionViewPage";
import { Discussion } from "@/entities/Discussion";
import { Comment } from "@/entities/Comment";
import { AxiosResponse } from "axios";
import { search } from "@/services/api/search";
import { SearchProps } from "./interfaces/SearchProps";

const DELAY_DEFAULT: number = 5 * 1000;
const BATCH_SIZE_DEFAULT: number = 10;
const MAX_WORKERS: number = 3;

export const useTransactionsQueue = defineStore('q', () => {
    const DELAY: Ref<number> = ref(DELAY_DEFAULT);
    const BATCH_SIZE: Ref<number> = ref(BATCH_SIZE_DEFAULT);
    const CURRENT_SET_TIMEOUTS: Ref<number> = ref(0);
    const CURRENT_WORKERS: Ref<number> = ref(0);
    const REQUEST_TIME_OUT_MS: Ref<number> = ref(0);
    
    const Q: QEle[] = [];

    function setDelay(tms: number): void {
        DELAY.value = tms;
    }
    
    function setBatchSize(size: number): void {
        BATCH_SIZE.value = size;
    }
    
    function enqueue(o: IOperation): void {
        const qEle = new QEle({
            pointer: o.pointer,
            path: o.path,
            command: o.command,
            args: o.args,
        });

        Q.push(qEle);
        dequeueAfterTimeout();
    }

    async function performTransactionsRequests(batch: object, debug: object = {}): Promise<void> {
        await TransactionApi.execute(batch as Transaction[]);
    }
    
    async function perfromSyncRecordValuesRequests(batch: Array<QEle>): Promise<void> {
        try{
            const recordValuesResponse: Record<"recordMap", Record<string, any>> = (await SyncrecordValuesApi.execute(new SyncRecordValuesRequest(batch))).data;
            setRecordValuesFromRecordMap(recordValuesResponse.recordMap);
        }
        catch(error: any) {
            batch.forEach(({pointer}) => {
                setRecordValue(
                    pointer.id,
                    pointer.table,
                    {
                        defer: 0
                    },
                    pointer.spaceId
                )
            })
        }
    }

    function setRecordValuesFromRecordMap(recordMap: Record<string, any>) {
        for(const table in recordMap) {
            const tableRecordValues = recordMap[table];

            for(const pointerId in tableRecordValues) {
                const record = tableRecordValues[pointerId];
                
                switch(table) {
                    case "block": {  
                        let recordValue = record.value.value;
                        
                        switch(recordValue.type) {
                            case "text": {
                                recordValue = new Text(recordValue);
                                break;
                            }
                            case "collection_view" : {
                                recordValue = new CollectionView(recordValue);
                                break;
                            }
                            case "collection_view_page" : {
                                recordValue = new CollectionViewPage(recordValue);
                                break;
                            }
                            default : {
                                break;
                            }
                        }
                        recordValue.defer = 1;

                        setRecordValue(pointerId, table, recordValue, recordValue.space_id);
                        break;
                    }

                    case "collection": {
                        const { value: { value }, spaceId } = record;
                        value.defer = 1;

                        setRecordValue(pointerId, table, value, spaceId);
                        break;
                    }

                    case "collection_view": {
                        let recordValue = record.value.value;
                        recordValue = new CollectionView(recordValue);
                        recordValue.defer = 1;

                        setRecordValue(pointerId, table, recordValue, recordValue.space_id);
                        break;
                    }

                    case "collection_view_page": {
                        let recordValue = record.value.value;
                        recordValue = new CollectionViewPage(recordValue);
                        recordValue.defer = 1;

                        setRecordValue(pointerId, table, recordValue, recordValue.space_id);
                        break;
                    }

                    case "discussion": {
                        let recordValue = record.value.value;
                        recordValue = new Discussion(recordValue);
                        recordValue.defer = 1;
                        
                        setRecordValue(pointerId, table, recordValue, recordValue.space_id);
                        break;
                    }

                    case "comment": {
                        let recordValue = record.value.value;
                        recordValue = new Comment(recordValue);
                        recordValue.defer = 1;

                        setRecordValue(pointerId, table, recordValue, recordValue.space_id);
                        break;
                    }
                }
            }
        }
    }

    function setRecordValue(pointerId: string, table: string, recordValue: any, spaceId: string) {
        const recordValueStore = useRecordValuesStore();

        // console.log(pointerId, table, recordValue, spaceId)
        if (spaceId) {
            recordValueStore.setRecordValue(pointerId, table, recordValue, spaceId)
        }
        else {
            recordValueStore.setRecordValue(pointerId, table, recordValue)
        }
    }

    function dequeueAfterTimeout() {
        if (CURRENT_SET_TIMEOUTS.value < MAX_WORKERS) {
            CURRENT_SET_TIMEOUTS.value++;
            setTimeout(() => {
                dequeue()
                .then(() => CURRENT_SET_TIMEOUTS.value--)
            }, DELAY.value);
        }
    }

    async function dequeue() {
        if (CURRENT_WORKERS.value >= MAX_WORKERS || Q.length === 0) {
            return;
        }
        CURRENT_WORKERS.value++;

        const syncRecordsBatch = [];
        const transactionsBatch = [];

        let i = 0, j = 0, k = 0;
        while(i < Q.length) {
            if (!Q[i].args && !Q[i].command && !Q[i].path && j < BATCH_SIZE.value) {
                syncRecordsBatch.push(Q[i]);
                Q.splice(i, 1);
                j += 1;
            } 
            else if (k <= BATCH_SIZE.value) {
                transactionsBatch.push(Q[i]);
                Q.splice(i, 1);
                k += 1;
            }
            i += 1;
        }


        try {
            if (REQUEST_TIME_OUT_MS.value) {
                console.log("timeout")
            }
            else {
                if (syncRecordsBatch.length) {
                    await perfromSyncRecordValuesRequests(syncRecordsBatch)
                }

                if (transactionsBatch.length) {
                    await performTransactionsRequests(transactionsBatch);
                }
            }
        } 
        catch (error: any) {
            console.log(error);
        }
        finally {
            CURRENT_WORKERS.value--;
            Q.length >= BATCH_SIZE.value ? await dequeue() : dequeueAfterTimeout();
        }
    }

    async function performQueryCollection(collectionViewId: string) {
        const queryCollectionResults: AxiosResponse = await queryCollectionRequest(
            {
                id: collectionViewId,
                spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
            },
            {
                reducers: {
                    collection_group_results: {
                        type: "results",
                        limit: 50
                    }
                },
                searchQuery: "",
                sort: [],
                userId: "",
                userTimeZone: ""
            },
            {
                id: collectionViewId,
                type: "collection_view",
                spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
            }
        );

        if(queryCollectionResults.data?.error) {
            console.log(queryCollectionResults.data.error);
        }

        setRecordValuesFromRecordMap(queryCollectionResults.data.recordMap);

        return queryCollectionResults.data;
    }

    async function performSearch(args: SearchProps) {
        const searchResults: AxiosResponse = await search(args);

        const {
            recordMap,
            total,
            results
        } = searchResults.data;

        setRecordValuesFromRecordMap(recordMap);

        return {
            total,
            results
        }
    }

    function setDelayDefault(): void {
        setDelay(DELAY_DEFAULT);
    }
    
    function setBatchSizeDefault(): void {
        setBatchSize(BATCH_SIZE_DEFAULT);
    }

    return {
        setDelay,
        setDelayDefault,
        setBatchSize,
        setBatchSizeDefault,
        enqueue,
        performQueryCollection,
        performSearch
    }
})