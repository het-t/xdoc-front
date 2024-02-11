import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useGeneralStore = defineStore("generalStore", () => {
    const dialog: Ref<{}> = ref({
        width: 276,
        top: 300,
        left: 500
    })
    
    const propertyValueOverlay: Ref<{}> = ref({
        visible: false,
        pageId: "",
        propertyId: ""
    });

    const type: Ref<string> = ref("");

    return {
        propertyValueOverlay,
        type,
        dialog
    }
})