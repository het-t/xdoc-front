<template>
    <nav
        id="menu-left"
        :class="getMenuMode !== 'full' ? 'translate-menu-left' : ''"
        style="z-index: 111;"
    >
        <div style="height: 100%; font-weight: 500; color: rgb(95, 94, 91);">    
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
            
                        <div style="display: flex; flex-direction: column; padding-bottom: 8px;">
                            <!-- settings -->
                            <div
                                class="button-wrapper hvr-bg ptr"
                                @click.prevent.stop="setCurrentComponentInDefaultOverlay('space_settings', {})"
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
                                    Settings and members
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
            
                        <div class="xdoc-scroller vertical"
                            style="padding-top: 6px; padding-right: 8px; padding-left: 8px; padding-bottom: 20px; overflow: hidden auto;"
                        >
                            <div style="margin: 0px; display: flex; flex-direction: column; gap: 4px;">
                                <menu-page-navigation-space-view
                                    header="favorites"
                                    :pageIds="favoritesPagesIds"
                                    :on-action-btn-click="() => {}"
                                />
                                
                                <menu-page-navigation-space-view
                                    v-if="teamIds !== undefined"
                                    header="teamspaces"
                                    :pageIds="teamIds"
                                    table="team"
                                    :on-action-btn-click="(id: string) => { setCurrentComponentInDefaultOverlay('dialog_teamspace_setting', { id }) }"
                                >
                                    <template #navigation-options>
                                        <div style="display: flex; align-items: center;">
                                            <base-button 
                                                @click.stop="setCurrentComponentInDefaultOverlay('dialog_teamspace_create')"
                                                style="height: 20px; width: 20px; display: flex; align-items: center; margin-left: 4px;"
                                            >
                                                <svg role="graphics-symbol" viewBox="0 0 14 14" class="plusThick" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"></path></svg>                                            
                                            </base-button>
                                        </div>
                                    </template>
                                </menu-page-navigation-space-view>

                                <menu-page-navigation-space-view
                                    header="private"
                                    :pageIds="privatePagesIds"
                                    :on-action-btn-click="() => {}"
                                >
                                    <template #navigation-options>
                                        <div style="display: flex; align-items: center;">
                                            <base-button 
                                                @click.stop="createNewPage"
                                                style="height: 20px; width: 20px; display: flex; align-items: center; margin-left: 4px;"
                                            >
                                                <svg role="graphics-symbol" viewBox="0 0 14 14" class="plusThick" style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"></path></svg>
                                            </base-button>
                                        </div>
                                    </template>
                                </menu-page-navigation-space-view>
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

<script lang="ts" setup>
import { ref, computed, defineProps, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMenuLeftStore } from "../../stores/menuLeft";
import MenuPageNavigationSpaceView from "./MenuPageNavigationSpaceView.vue";
import BaseButton from "./BaseButton.vue";
import { useRecordValuesStore } from "@/stores/recordValues";
import { getSpaces } from "@/services/api/getSpaces";
import { transformToStandardUUIDFormat } from "../helpers/router/transformToStandardUUIDFormat";
import uuid from "@/helpers/globals/uuid";
import { useGeneralStore } from "@/stores/general";
import { makeOperation } from "@/services/transactions/factories/makeOperation";
import { makeTransaction } from "@/services/transactions/factories/makeTransaction";
import { useTransactionsQueue } from "@/stores/transactionsQueue";
import { getTeams } from "@/services/api/getTeams";
import { useTeamsStore } from "@/stores/teams";
import { syncRecordValueFromApi } from "@/helpers/globals/SyncRecordValueFromApi";

const route = useRoute();
const router = useRouter();

const menuLeftStore = useMenuLeftStore();
const recordValuesStore = useRecordValuesStore();
const teamsStore = useTeamsStore();

const props = defineProps({
    spaceId: {
        type: String,
        required: true
    },
    spaceViewId: {
        type: String,
        required: true
    }
})

const favoritesPagesIds = ref([]), privatePagesIds = ref([]);

const getMenuMode = computed(function () {
    return menuLeftStore.menuLeftMode;
});

const teamIds = computed(function() {
    return teamsStore.getVisibleTeamIds( "f2cf1fd1-8789-4ddd-9190-49f41966c446");
});

async function createNewPage() {

    const rawId = uuid();
    const id = transformToStandardUUIDFormat(rawId);

    const pointer = {
        id,
        table: "block",
        spaceId: props.spaceId
    };

    const operations = [
        makeOperation(
            "set",
            {
                id,
                type: 'page',
                space_id: props.spaceId
            },
            [],
            pointer
        ),
        
        makeOperation(
            "update",
            {
                permissions: [{
                    type: "user_permission",
                    role: "editor",
                    user_id: "user_id"  
                }]
            },
            [],
            pointer
        ),

        makeOperation(
            "update",
            {
                parent_id: props.spaceId,
                parent_table: "space",
                alive: true
            },
            [],
            pointer
        ),

        makeOperation(
            "listBefore",
            {
                id
            },
            ["private_pages"],
            {
                id: props.spaceViewId,
                table: "space_view",
                spaceId: props.spaceId
            }
        ),

        makeOperation(
            "update",
            {
                created_by_id: "user_id",
                created_by_table: "xdoc_user",
                created_time: Date.now(),
                last_edited_by_id: "user_id",
                last_edited_by_table: "xdoc_user",
                last_edited_time: Date.now()
            },
            [],
            pointer
        )
    ]

    useTransactionsQueue().enqueue(
        makeTransaction({
            debug: {
                userAction: "MenuLeft.createNewPage"
            },
            spaceId: props.spaceId,
            operations
        })
    );


    if (route.name === "render-page") {
        router.push({ query: { p: rawId, pm: 'c' } });
    }
    else {
        router.push(`/${rawId}`);
    }
}

//hides left menu
function setMenuLeftMode() {
    menuLeftStore.setMenuLeftMode(null);
}


function setCurrentComponentInDefaultOverlay(component:string, args = {}) {
    const generalStore = useGeneralStore();
    generalStore.setCurrentComponentInDefaultOverlay(component, args)
}

onBeforeMount(async () => {
    const setRecordValuesFromRecordMap = useTransactionsQueue().setRecordValuesFromRecordMap;
 
    try{
        const userSpaces = await getSpaces();
        const spaceViews = userSpaces.data.space_view;

        for(const id in spaceViews) {
            const { spaceId, value: { value } } = spaceViews[id];
        
            recordValuesStore.setRecordValue({
                id,
                table: "space_view",
                record: value,
                spaceId
            });

            const { data: { recordMap: teams, teamIds } } = await getTeams({spaceId});
            setRecordValuesFromRecordMap(teams);
            teamsStore.setVisibleTeamIds(spaceId, teamIds);

            for(const id in teams.team) {
                const teamPages = teams.team[id].value.value.team_pages;
                teamPages.forEach((id: string) => {
                    syncRecordValueFromApi("block", id, "f2cf1fd1-8789-4ddd-9190-49f41966c446");
                })
            }
        }
        
        const { bookmarked_pages, private_pages } = recordValuesStore.getRecordValue({
            id: props.spaceViewId,
            table: "space_view",
            spaceId: props.spaceId
        });

        const pages = [
            ...bookmarked_pages, 
            ...private_pages
        ];

        pages.forEach((id) => {
            syncRecordValueFromApi("block", id, "f2cf1fd1-8789-4ddd-9190-49f41966c446");
        })

        privatePagesIds.value = private_pages;
        favoritesPagesIds.value = bookmarked_pages;
    } catch(e) {
        console.log(e);
    }
})
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
    padding: 0 15px;
    user-select: none;
}
#menu-left {
    width: 220px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.024) -1px 0 0 0 inset;
    background-color: rgb(247, 247, 245);
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
</style>@/services/transactions/types/Transaction