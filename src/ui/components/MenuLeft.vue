<template>
    <nav
        id="menu-left"
        :class="getMenuMode !== 'full' ? 'translate-menu-left' : ''"
        style="z-index: 111;"
    >
        <div style="height: 100%;">    
            <div style="width: 0; position: absolute; top: 0; left: 0; bottom: 0; display: flex; flex-direction: column; overflow: visible; z-index: 9;">
                <div 
                    id="menu-left-wrapper" 
                    :class="getMenuMode !== 'full' ? 'translate-menu-left-wrapper' : ''"
                >
                    <div :style="getMenuMode !== 'full' ? 'display: block;' : 'display: none;'" style="position: absolute; height: 100%; inset: 0;">

                    </div>

                    <div :style="getMenuMode !== 'full' ? 'display: block;' : 'display: none;'" style="position: absolute; height: 100%; inset: 0; background-color: white;"></div>

                    <div style="display: flex; flex-direction: column; position: relative; height: 100%; overflow: hidden;">
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
                                @click.prevent.stop="setMenuLeftMode"
                            />
                        </div>
            
                        <!-- buttons -->
                        <div style="display: flex; flex-direction: column; padding: 0 3px; margin-top: 6px;">
                            <!-- settings -->
                            <div
                                class="button-wrapper hvr-bg ptr"
                                @click.prevent.stop="openSettings"
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
                                @click.prevent.stop="createNewPage"
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
                        <div style="display: flex; flex-direction: column; gap: 12px; padding: 0 3px; margin-top: 24px; overflow-y: auto; overflow-x: hidden;">
                            <!-- recent -->
                            <div class="page-type hvr-bg ptr">   
                                Recent
                            </div>
            
                            <!-- starred -->
                            <div class="page-type hvr-bg ptr">
                                Starred
                            </div>
                        </div>

                        <div style="margin-top: auto;">
                        <!-- all important messages to be passed to user can be shown here -->
                        </div>
                    </div>
                    
                    <div v-show="getMenuMode === 'full'" style="position: absolute; right: 0; top: 0; height: 100%; width: 8px; cursor: col-resize;"></div>
                    
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMenuLeftStore } from "../../stores/menuLeft";
import { useTransactionsQueue } from "@/stores/transactionsQueue";
import { blockCreate } from "../helpers/operations/blockCreate";
import { blockUpdate } from "../helpers/operations/blockUpdate";
import { listBefore } from "../helpers/operations/listBefore";

const route = useRoute();
const router = useRouter();

const qStore = useTransactionsQueue();
const menuLeftStore = useMenuLeftStore();

const getMenuMode = computed(function () {
    return menuLeftStore.menuLeftMode;
})

async function createNewPage() {  
    const spaceId = "default-space-id";

    const blockCreateOp = blockCreate(
        spaceId,
        "block"
    );

    qStore.enqueue(blockCreateOp);

    const blockId = blockCreateOp.pointer.id;

    qStore.enqueue(
        blockUpdate(
            spaceId,
            blockId,
            [],
            {
                created_by_id: "ca5f99c6 - 879b- 4562 - bd41 - 6651fc8d2099",
                created_by_table: "notion_user",
                created_time: Date.now(),
                last_edited_time: Date.now(),
                last_edited_by_id: "ca5f99c6-879b-4562-bd41-6651fc8d2099",
                last_edited_by_table: "notion_user"
            }
        )
    );

    qStore.enqueue(
        blockUpdate(
            spaceId,
            blockId,
            [],
            {
                parent_id: spaceId,
                parent_table: "space",
                alive: true
            }
        )
    );

    qStore.enqueue(
        listBefore(
            "block",
            spaceId,
            "list-of-page",
            ["private_pages"],
            blockId
        )
    )

    qStore.enqueue(
        blockUpdate(
            spaceId,
            blockId,
            [],
            {
                last_edited_time: Date.now()
            }
        )
    )

    if (route.name === "render-page") {
        router.push({ query: { p: blockId, pm: 'c' } });
    }
    else {
        router.push(`/${blockId}`);
    }
}

//hides left menu
function setMenuLeftMode() {
    menuLeftStore.setMenuLeftMode(null);
}

function openSettings() {
    console.log('add logic to open settings')
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
#menu-left.translate-menu-left #close-menu {
    display: none;
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
    user-select: none;
}
#menu-left {
    width: 220px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.024) -1px 0 0 0 inset;
    background-color: rgb(251, 251, 250);
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
}
#menu-left.translate-menu-left {
    width: 0;
}
#menu-left-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    visibility: visible;
    width: 220px;
    opacity: 1;
    transition-property: width, opacity, transform;
    transition-duration: 270ms;
    transition-timing-function: ease;
}
#menu-left-wrapper.translate-menu-left-wrapper {
    transform: translateY(60px) translateX(-200px);
}
#menu-left-wrapper.translate-menu-left-wrapper:hover {
    transform: translateY(60px);
}
#menu-left.translate-menu-left {
    width: 0;
}
.translate-menu-left-wrapper:hover > div:first-child {
    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
}
.translate-menu-left-wrapper:hover > div:nth-child(2) {
    box-shadow: rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset;
}

.translate-menu-left-wrapper:hover > div {
    border-radius: 3px;
}
#menu-left-wrapper.translate-menu-left-wrapper > div {
    max-height: calc(100vh - 120px);
}
#menu-left .button-wrapper {
    color: var(--secondary-black-color);
    font-size: 12px;
    display: flex;
    gap: 9px;
    align-items: center;
    padding: 3px 12px;
    user-select: none;
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