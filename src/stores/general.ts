import { defineStore } from "pinia";
import { Ref, ref } from "vue";

interface Component {
    name: string,
    props: object
}

export const useGeneralStore = defineStore("generalStore", () => {
    const dialog: Ref<{}> = ref({
        width: 276,
        top: 300,
        left: 500
    })

    const components: Ref<Component[]> = ref([]);
    const props = ref(Object());

    const propertyValueDialog = ref({
        pageId: null,
        propertyId: null
    });

    function setCurrentComponentInDefaultOverlay(
        name: string, 
        props: object
    ): void {
        components.value.push({
            name,
            props
        });
    }

    function getCurrentComponentAndProps() {
        return components.value[components.value.length - 1];
    }

    function hideCurrentComponent() {
        if(components.value.length) components.value.pop();
    }

    return {
        components,
        props,
        setCurrentComponentInDefaultOverlay,
        getCurrentComponentAndProps,
        hideCurrentComponent,
        dialog,
        propertyValueDialog
    }
})