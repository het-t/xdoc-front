import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { queryCollection as queryCollectionRequest } from '@/services/api/queryCollection';
import { TransactionApi } from "@/services/api/TransactionsApi";
import { SyncrecordValuesApi } from "@/services/api/SyncRecordValuesApi";
import { useRecordValuesStore } from "@/stores/recordValues";
import { AxiosResponse } from "axios";
import { search } from "@/services/api/search";
import { SearchProps } from "./interfaces/SearchProps";
import { Transaction } from "@/services/transactions/types/Transaction";
import { SyncRecordValue } from "@/services/transactions/types/SyncRecordValue";

type SyncRecordResponse = AxiosResponse<{
    recordMap: Record<string, object>;
}>;
type TransactionResponse = AxiosResponse<{
    recordMap?: Record<string, object>;
    error?: string
}>;

const DELAY_DEFAULT: number = 3 * 1000;
const BATCH_SIZE_DEFAULT: number = 10;
const MAX_WORKERS: number = 3;

export const useTransactionsQueue = defineStore('q', () => {
    const DELAY: Ref<number> = ref(DELAY_DEFAULT);
    const BATCH_SIZE: Ref<number> = ref(BATCH_SIZE_DEFAULT);
    const CURRENT_SET_TIMEOUTS: Ref<number> = ref(0);
    const REQUEST_TIME_OUT_MS: Ref<number> = ref(0);
    const recordsStatuses: Ref<Record<string, {
        status: -1 | 0 | 1,
        message?: string
    }>> = ref({});
    const transactionsQueue: Array<Transaction | SyncRecordValue> = [];

    function setDelay(tms: number): void {
        DELAY.value = tms;
    }
        
    function enqueue(transaction: Transaction | SyncRecordValue): void {
        transactionsQueue.push(transaction);
        dequeueAfterTimeout();
    }

    function setRecordValuesFromRecordMap(recordMap: Record<string, any>) {
        for(const table in recordMap) {
            const tableRecordValues = recordMap[table];

            for(const pointerId in tableRecordValues) {
                const record = tableRecordValues[pointerId];
                const { value, spaceId } = record;
                setRecordValue(pointerId, table, value.value, spaceId);
            }
        }
    }

    function setRecordValue(pointerId: string, table: string, recordValue: any, spaceId: string) {
        const recordValueStore = useRecordValuesStore();
        
        if (spaceId) {
            recordValueStore.setRecordValue({
                id: pointerId, 
                table, 
                record: recordValue, 
                spaceId
            });
        }
        else {
            recordValueStore.setRecordValue({
                id: pointerId, 
                table, 
                record: recordValue
            });
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
        const syncRecordIds: string[] = [];

        try {
            if (REQUEST_TIME_OUT_MS.value) {
                console.log("timeout")
            }
            else {
                const batch = transactionsQueue.splice(
                    0, 
                    Math.min(BATCH_SIZE.value, transactionsQueue.length)
                );

                const transactions: Transaction[] = [];
                const syncRecordValues: SyncRecordValue[] = [];

                batch.forEach((t) => {
                    if((t as SyncRecordValue).pointer !== undefined) {
                        syncRecordValues.push(t as SyncRecordValue);
                        const recordId = (t as SyncRecordValue).pointer.id;
                        syncRecordIds.push(recordId);
                        recordsStatuses.value[recordId] = { status: 0 };
                    }
                    else {
                        transactions.push(t as Transaction);
                    }
                })

                if (transactions.length) {
                    const res: TransactionResponse = await TransactionApi.execute(transactions);
                }
                if (syncRecordValues.length) {
                    const recordValuesResponse: SyncRecordResponse = await SyncrecordValuesApi.execute(syncRecordValues);
                    setRecordValuesFromRecordMap(recordValuesResponse.data.recordMap);
                    
                    syncRecordIds.forEach(id => {
                        recordsStatuses.value[id] = { status: 1 }
                    });
                }

            }
        } 
        catch (error: any) {
            syncRecordIds.forEach(id => {
                recordsStatuses.value[id] = {
                    status: -1,
                    message: error
                }
            });
        }
        finally {            
            transactionsQueue.length >= BATCH_SIZE.value 
            ? await dequeue() 
            : dequeueAfterTimeout();
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

    return {
        setDelay,
        setDelayDefault,
        enqueue,
        performQueryCollection,
        performSearch,
        setRecordValuesFromRecordMap,
        recordsStatus: (id: string) => recordsStatuses.value[id]
    }
})