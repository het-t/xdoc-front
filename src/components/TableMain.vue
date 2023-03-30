<template>
    <div style="display: flex;">
        <table>
            <thead>
                <tr>
                    <slot name="thead"></slot>
                </tr>
            </thead>

            <tbody>
                <slot name="tbody"></slot>
            </tbody>
        </table>

        <table-side-menu v-bind="$attrs" @click-outside="$emit('sideMenuHide')" @sideMenuHide="$emit('sideMenuHide')" v-show="showSideMenu">
            <template v-for="(_, name) in $slots" #[name]="slotProps">
                <slot :name="name" v-bind="slotProps || {}"></slot>
            </template>
        </table-side-menu>
    </div>
</template>

<script>
import TableSideMenu from './TableSideMenu.vue'

export default {
    components: { TableSideMenu },
    props: {
        showSideMenu: Boolean
    },
    name: 'TableMain'
}
</script>

<style>
    table {
        min-width: 600px;
        width: 100%;
        border-top: solid 1px #e9e9e7;
        border-bottom: solid 1px #e9e9e7;
        border-collapse: collapse;
        text-align: left;

    }
    th, td {
        border: solid 1px #e9e9e7;
    }
    th {
        padding: 8px;
    }
    td {
        color: #37352f;
        padding: 6px;
    }
    tr > td:first-child,
    tr > th:first-child {
        border-left: none;
        width: 36px;
    }
    tr > td:last-child,
    tr > th:last-child {
        border-right: none;
    }
    .fa-icon {
        height: 22px;
        color: #19171199;
        cursor: pointer;
    }
    .fa-icon:hover, .fa-icon:focus {
        color: #37352f;
    }
    table .flex {
        display: flex;
        align-items: center;
        gap: 8px;
    }
</style>