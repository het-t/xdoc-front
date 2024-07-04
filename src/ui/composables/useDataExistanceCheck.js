import { useTransactionsQueue } from "@/stores/transactionsQueue";
import { toRef, watch } from "vue";

export const useDataExistanceCheck = function(blockIds) {
    const q = useTransactionsQueue();
    let existance = false;

    if(blockIds.value.length === 0) existance = true;
    else {
        watch(
            () => [...blockIds.value].map(id => q.recordsStatus(id)),
            (newVal) => {
                let counter = 0;
                for(const recordStatus of newVal) {
                    if(recordStatus.status === 1) counter++;
                }
    
                if(counter === newVal.length) {
                    existance = true;
                    return;
                }
                
                watch(
                    () => [...blockIds.value].map(id => q.recordsStatus(id)),
                    (newVal) => {
                        let counter = 0;
                        for(const recordStatus of newVal) {
                            if(recordStatus.status === 1) counter++;
                        }
            
                        if(counter === newVal.length) existance = true;
                    },
                    { once: true }
                );
            },
            { once: true }
        );
    }

    return {
        existance: toRef(() => existance)
    }
}