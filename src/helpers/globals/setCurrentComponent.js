import { useGeneralStore } from "@/stores/general";

export const setCurrentComponent = ({component, props = {}, setAutoPositions = false, e}) => {
    const generalStore = useGeneralStore();
   
    if(setAutoPositions) {
        const measures = e.target.getBoundingClientRect();
        generalStore.dialog.top = measures.top;
        generalStore.dialog.left = measures.left;
    }
    
    generalStore.setCurrentComponentInDefaultOverlay(component, props);
}