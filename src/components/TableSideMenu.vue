<template>
    <div class="table-side-menu">

        <div class="title">
            <div @click.prevent="$emit('sideMenuHide')" class="back">
                <font-awesome-icon :icon="['fas', 'plus']" style="transform: rotate(45deg);" class="icon"></font-awesome-icon>
            </div>
            <span style="font-weight: 600;">
                <slot name="side-menu-title"></slot>
            </span>
        </div>

        <div style="padding: 6px 12px; display: flex; gap: 8px;">
            <div class="rename-icon">
                <font-awesome-icon icon="fa-solid fa-pencil"></font-awesome-icon>
            </div>
            <input v-model="$attrs.sideMenuForEntity.id" style="height: 28px;" type="text">
        </div>

        <div class="separator"></div>

        <div class="options">
            <slot name="side-menu-options"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    name: 'TableSideMenu',
}
</script>

<style>
    .separator {
        border-bottom: solid 1px #e9e9e7;
        margin-top: 12px;
    }
    .table-side-menu .rename-icon {
        cursor: pointer;
        padding: 2px 4px 7px 4px;
        border: solid 1px #37352f29;
        border-radius: 3px;
        height: 28px;
        text-align: center;
        font-size: 14px;
    }
    .table-side-menu .rename-icon svg {
        width: 20px;
        color: #55534e;
    }
    .table-side-menu .rename-icon:hover,
    .table-side-menu .title .back:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
    .table-side-menu .title {
        display: flex;
        align-items: center;
        padding: 16px 14px 6px 14px;
        font-size: 14px;
        color: #37352F;
    }
    .table-side-menu .title .back {
        cursor: pointer;
        width: 26px;
        height: 26px;
        text-align: center;
        border-radius: 3px;
        margin-right: 10px;
    }
    .table-side-menu .back .icon {
        color: #37352f73;
        text-align: center;
        padding: 7px;
    }
    .table-side-menu .options {
        color: #37352F;
        display: flex; 
        flex-direction: column; 
        padding: 6px 4px;
    }
    .table-side-menu .options .option {
        border-radius: 3px;
        display: flex;
        gap: 10px;
        padding: 2px 8px 0 8px;
    }
    .table-side-menu .options .option:hover {
        background-color: rgba(55, 53, 47, 0.08);
        cursor: pointer;
    }
    .table-side-menu .options .icon {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        padding: 3px 5px 7px 5px;
    }
    .table-side-menu .options .icon svg {
        color: #37352fd9;
        width: 18px;
    }
    .table-side-menu .option.red:hover,
    .table-side-menu .option.red:hover .icon svg {
        color: rgb(237, 87, 87) !important;
    }
    .table-side-menu {
        position: absolute;
        right: 0;
        width: 290px;
        background-color: #fff;
        transition-property: display;
        transition-duration: 4s;
        transition-delay: 2s;
        min-height: 70%;
        border: solid 1px #e9e9e7;
    }
    .table-side-menu input {
        width: 100%;
    }
</style>