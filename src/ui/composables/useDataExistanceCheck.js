import { ref, watch } from "vue";
import { useTransactionsQueue } from "@/stores/transactionsQueue";

export const useDataExistanceCheck = function (blockIds) {
    const q = useTransactionsQueue();
    const existance = ref(false); // Make existance a reactive ref

    if (blockIds.value.length === 0) {
        existance.value = true;
    } else {
        const checkExistence = () => {
            const statuses = blockIds.value.map(id => q.recordsStatus(id));
            const allExist = statuses.every(status => status?.status === 1);
            
            if (allExist) {
                existance.value = true;
            }
        };

        // Initial check
        checkExistence();

        // Watch for changes
        watch(
            () => blockIds.value.map(id => q.recordsStatus(id)),
            () => {
                checkExistence();
            },
            { deep: true }
        );
    }

    return {
        existance
    };
}