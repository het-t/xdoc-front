import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useGeneralStore = defineStore("generalStore", () => {
    const dialog: Ref<{}> = ref({
        width: 276,
        top: 300,
        left: 500
    })

    const component = ref("");
    const props = ref(Object());

    function setCurrentComponentInDefaultOverlay(
        _component: string, 
        _props: object
    ): void {
        component.value = _component;
        props.value = _props; 
    }

    function getCurrentComponentAndProps() {
        return {
            component,
            props
        }
    }

    return {
        component,
        props,
        setCurrentComponentInDefaultOverlay,
        getCurrentComponentAndProps,
        dialog
    }
})