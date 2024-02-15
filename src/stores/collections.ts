import { defineStore } from "pinia"

interface state {
    menu: {
        component: string[],
        editPropertyId: string | null
    };
    types: Array<string>
}

export const useCollectionsStore = defineStore('collections', {
    state: (): state => ({
        menu: {
            component: [],
            editPropertyId: null
        },
        types: ['Text', 'Number', 'Date', 'Select', 'Multiselect', 'Checkbox', 'Person', 'Url']
    }),
    getters: {
        getCurrentComponent(state): string {
            return state.menu.component[state.menu.component.length - 1];
        },
        getCollectionPropertyEditId(state): string | null {
            return state.menu.editPropertyId;
        }
    },
    actions: {
        setCurrentComponent(component: string) {
            this.menu.component.push(component);
        },
        removeCurrentComponent() {
            this.menu.component.pop();
        },
        removeAllComponent() {
            this.menu.component = [];
        },
        setPropertyEdit(id: string) {
            this.menu.editPropertyId = id;
        }
    }
})