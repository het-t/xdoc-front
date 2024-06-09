<template>
    <div style="margin-top: -1px;">
        <div style="position: relative; display: grid; overflow-x: auto;">
            <table style="margin-top: 0px; table-layout: fixed; border-collapse: collapse; min-width: 100%;">
                <thead>
                    <tr>
                        <space-settings-table-header
                            v-for="(column, index) in props.columns"
                            :key="column.name+index"
                            :style="`
                                width: ${column.width};
                                ${index === 0 && props.freez ? 'position: sticky; top: 0; left: 0; z-index: 4;' : ''}
                                ${index === 0 ? 'box-shadow: rgb(233, 233, 231) -1px 0px 0px inset, rgb(233, 233, 231) 0px 1px 0px inset, rgb(233, 233, 231) 0px -1px 0px inset;' : ''}
                            `"
                        >{{ column.name }}</space-settings-table-header>

                        <space-settings-table-header :empty="true" style="padding: 0 !important;"></space-settings-table-header>
                    </tr>
                </thead>

                <tbody>
                    <tr 
                        v-for="(item, itemIndex) in props.data"
                        :key="itemIndex"
                        style="height: 1px; border-bottom: solid 1px rgb(233, 233, 231);"
                    >
                        <td 
                            v-for="(column, columnIndex) in props.columns"
                            :key="itemIndex + columnIndex"
                            style="padding-left: 5px; padding-right: 5px;"
                            :style='(props.freez && columnIndex === 0) ? { boxShadow: "rgb(233, 233, 231) -1px 0px 0px inset", position: "sticky", top: "0px", left: "0px", zIndex: 2, background: "white", paddingRight: "15px", width: column.width }: { width: column.width }'
                        >
                            <space-settings-table-cell-user 
                                v-if="column.type === 'user'"
                                :userId="item.userId"
                            />

                            <space-settings-table-cell-select 
                                v-else-if="column.type === 'select'"
                            >{{ item.role }}</space-settings-table-cell-select>
                        </td>

                        <td v-if="props.showActionBtn"
                            style="padding-left: 5px; padding-right: 5px; width: 51px;"
                        >
                            <div style="min-width: 51px; font-size: 14px; color: rgb(55, 53, 47); min-height: 42px; display: flex; align-items: center; height: 100%;">
                                <div style="width: 100%; display: flex; justify-content: flex-end;">
                                    <base-button style="height: 24px; width: 24px;"
                                        @click.stop="showDialogRemoveUser($event, item)"
                                    >
                                        <svg role="graphics-symbol" viewBox="0 0 16 16" class="ellipsis" style="width: 20px; height: 20px; display: block; fill: rgb(145, 145, 142); flex-shrink: 0;"><path d="M2.887 9.014c.273 0 .52-.064.738-.192.219-.132.394-.307.526-.526.133-.219.199-.46.199-.725 0-.405-.142-.747-.424-1.025a1.41 1.41 0 00-1.04-.417c-.264 0-.505.066-.724.198a1.412 1.412 0 00-.718 1.244c0 .265.064.506.192.725.132.219.307.394.526.526.219.128.46.192.725.192zm5.113 0a1.412 1.412 0 001.244-.718c.132-.219.198-.46.198-.725 0-.405-.14-.747-.423-1.025A1.386 1.386 0 008 6.129c-.264 0-.506.066-.725.198a1.412 1.412 0 00-.718 1.244c0 .265.064.506.192.725.132.219.308.394.526.526.22.128.46.192.725.192zm5.106 0c.265 0 .506-.064.725-.192.219-.132.394-.307.526-.526.133-.219.199-.46.199-.725 0-.405-.142-.747-.424-1.025a1.394 1.394 0 00-1.026-.417 1.474 1.474 0 00-1.265.718c-.127.218-.19.46-.19.724 0 .265.063.506.19.725.133.219.308.394.527.526.223.128.47.192.738.192z"></path></svg>
                                    </base-button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import SpaceSettingsTableCellSelect from "./SpaceSettingsTableCellSelect.vue";
import SpaceSettingsTableCellUser from './SpaceSettingsTableCellUser.vue';
import SpaceSettingsTableHeader from './SpaceSettingsTableHeader.vue';
import BaseButton from "./BaseButton.vue";
import { defineProps } from 'vue';
import { useGeneralStore } from "@/stores/general";

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    columns: {
        type: Array,
        default: () => []
    },
    freez: {
        type: Boolean,
        default: false
    },
    showActionBtn: {
        type: Boolean,
        default: true
    },
    actionBtnComponent: {
        type: String,
        default: ""
    }
})

function showDialogRemoveUser(e, item) {
    const generalStore = useGeneralStore();

    const measures = e.target.getBoundingClientRect();

    generalStore.dialog.top = measures.top;
    generalStore.dialog.left = measures.left;

    generalStore.setCurrentComponentInDefaultOverlay(
        props.actionBtnComponent,    
        item
    );
}
</script>

<style scoped>
tr td:nth-child(2),
tr th:nth-child(2) {
    padding-left: 15px !important;
}
</style>