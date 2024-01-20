import { useTransactionsQueue } from "@/stores/transactionsQueue"

export const syncRecordValueFromApi = function(table: string, id: string, spaceId: string) {
    const transactionStore = useTransactionsQueue();

    transactionStore.enqueue({
        pointer: {
            table,
            id,
            spaceId
        }
    })
}