import { defineStore } from "pinia"

interface state {
    menu: {
        component: Array<{name: string, props: object}>,
    };
    types: Array<{type: string, label: string}>
}

export const useCollectionsStore = defineStore('collections', {
    state: (): state => ({
        menu: {
            component: [],
        },
        types: [
            {
                type: "text",
                label: "Text"
            },
            {
                type: "number",
                label: "Number"
            },
            {
                type: "date",
                label: "Date"
            },
            {
                type: "select",
                label: "Select"
            },
            {
                type: "multi_select",
                label: "Multiselect"
            },
            {
                type: "checkbox",
                label: "Checkbox"
            },
            {
                type: "person",
                label: "Person"
            },
            {
                type: "url",
                label: "Url"
            },
            {
                type: "relation",
                label: "Relation"
            }
        ]
    }),
    getters: {
        getCurrentComponent(state): object {
            return state.menu.component[state.menu.component.length - 1];
        }
    },
    actions: {
        setCurrentComponent(name: string, props: object = {}) {
            this.menu.component.push({ name, props });
        },
        removeCurrentComponent() {
            this.menu.component.pop();
        },
        removeAllComponent() {
            this.menu.component = [];
        }
    }
})