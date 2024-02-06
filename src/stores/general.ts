import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useGeneralStore = defineStore("generalStore", () => {
    const collectionPropertyValueOverlay: Ref<{}> = ref({
        visible: false,
        dialogWidth: 276,
        dialogPosTop: 300,
        dialogPosLeft: 500,
        pageId: "",
        propertyId: ""
    });

    return {
        collectionPropertyValueOverlay
    }
})