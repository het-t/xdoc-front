<template>
    <div
        id="menu-left"
        :class="getMenuState !== 'full' ? 'translate-menu-left' : ''"
    >
        <div 
            id="menu-left-wrapper" 
            :class="getMenuState !== 'full' ? 'translate-menu-left-wrapper' : ''"
        >
            <!-- space info -->
            <div 
                class="initials ptr hvr-bg"
            >
                <font-awesome-icon
                    :icon="['far', 'user']"
                />
                
                <span style="font-weight: 500; overflow: hidden; text-overflow: ellipsis; text-wrap: nowrap; color: var(--focus-black-color);">
                    Het Tarkhala's XDoc
                </span>

                <font-awesome-icon
                    :icon="['fas', 'angles-left']"
                    class="icon hvr-bg ptr"
                    id="close-menu"
                    @click.prevent.stop="store.commit('setMenuState', 'none')"
                />
            </div>

            <!-- buttons -->
            <div style="display: flex; flex-direction: column; padding: 0 3px; margin-top: 6px;">
                <!-- settings -->
                <div
                    class="button-wrapper hvr-bg ptr"
                >
                    <div
                        class="button-icon"
                    >
                        <font-awesome-icon
                            :icon="['fas', 'gear']"
                            class="icon"
                        />
                    </div>

                    <span>
                        Settings
                    </span>
                </div>

                <!-- new page -->
                <div
                    class="button-wrapper hvr-bg ptr"
                    @click.prevent.stop="addNewPage"
                >
                    <div
                        class="button-icon"
                    >
                        <font-awesome-icon
                            :icon="['fas', 'circle-plus']"
                            class="icon"
                        />
                    </div>

                    <span>
                        New page
                    </span>
                </div>
            </div>


            <!-- list of pages -->
            <div style="display: flex; flex-direction: column; gap: 12px; padding: 0 3px; margin-top: 24px;">
                <!-- recent -->
                <div class="page-type hvr-bg ptr">   
                    Recent
                </div>

                <!-- starred -->
                <div class="page-type hvr-bg ptr">
                    Starred
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import Page from '@/models/blocks/Page.js'

const store = useStore()

const getMenuState = computed(function () {
    return store.getters['getMenuState']
})

function addNewPage() {    
    const page = new Page({})
    console.log(page)
    store.commit('setOverlayComponentProps', page)
    store.commit('blocks/setBlockData', {data: page})
    store.commit('trees/setNewTree', {treeId: page.id})
    store.commit('setOverlayVisibility', true)
    store.commit('setOverlayComponent', 'page')
}
</script>

<style>
#close-menu {
    width: 32px !important;
    position: relative;
    right: 0;
    top: 0;
    z-index: 2;
    display: none;
    height: 18px;
}
#menu-left:hover #close-menu {
    display: block;
}
.page-type {
    font-size: 12px; 
    font-weight: 500; 
    padding: 1px 2px;
    margin-left: 12px;
    color: var(--tertary-color);
    width: fit-content;
}
.initials {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 45px;
    padding: 0 18px;
}
#menu-left {
    width: 242px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.024) -1px 0 0 0 inset;
    background-color: rgb(251, 251, 250);
    transition: all 200ms;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    top: 0;
    left: 0;
}
#menu-left-wrapper.translate-menu-left-wrapper {
    transition: all 300ms;
}
#menu-left .button-wrapper {
    color: var(--secondary-black-color);
    font-size: 12px;
    display: flex;
    gap: 9px;
    align-items: center;
    padding: 3px 12px;
}
#menu-left-wrapper.translate-menu-left-wrapper {
    position: relative;
    width: 0;
}
#menu-left.translate-menu-left {
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: none;
    width: 12px;
    overflow: hidden;
    opacity: 1;
}
#menu-left.translate-menu-left:hover,
#menu-left.translate-menu-left:hover #menu-left-wrapper.translate-menu-left-wrapper {
    width: 242px !important;
}
.button-wrapper .button-icon {
    display: flex;
    align-items: center;
}
.button-wrapper span {
    text-wrap: nowrap;
    font-weight: 500;
    font-size: 14px;
}
</style>