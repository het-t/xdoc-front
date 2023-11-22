import { defineStore } from "pinia";

interface state {
    menuLeftMode: "full" | null
}

export const useMenuLeftStore = defineStore('menuLeft', {
    state: (): state => ({
        menuLeftMode: "full"
    }),
    actions: {
        setMenuLeftMode(mode: "full" | null) {
            this.menuLeftMode = mode;
        }
    }
})