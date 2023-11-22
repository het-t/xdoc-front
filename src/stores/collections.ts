import { defineStore } from "pinia"

interface state {
    menu: {
        component: string[],
        editProperty: {
            name: string | null,
            type: string | null
        }
    };
    types: Array<string>
}

export const useCollectionsStore = defineStore('collections', {
    state: (): state => ({
        menu: {
            component: [],
            editProperty: {
                name: null,
                type: null
            }
        },
        types: ['Text', 'Number', 'Date', 'Select', 'Multiselect', 'Checkbox', 'Person', 'Url']
    }),
    getters: {
        getCurrentComponent(state): string {
            return state.menu.component[state.menu.component.length - 1];
        },
        getCollectionPropertyEditData(state): { name: string | null, type: string | null } {
            return state.menu.editProperty;
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
        setPropertyEdit(name: string, type: string) {
            this.menu.editProperty.name = name;
            this.menu.editProperty.type = type;
        }
    }
})