<template>
    <space-settings-content-header>People</space-settings-content-header>

    <div style="display: flex; overflow: auto visible; width: 100%; position: relative; box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px inset; font-size: 14px; padding-left: 0; padding-right: 0; z-index: 1; margin-top: -6px;"
        class="hide-scrollbar"
    >
        <div style="padding-top: 6px; padding-bottom: 6px; white-space: nowrap; min-width: 0; flex-shrink: 0; color: rgb(55, 53, 47); position: relative;">
            <base-button style="height: 28px; color: rgba(55, 53, 47, 1);">
                <div style="display: flex; font-size: 14px; font-weight: 500; line-height: 18px; padding-right: 8px; padding-left: 8px;">
                    <div>Members</div>
                </div>
            </base-button>
        </div>

        <div style="padding-top: 6px; padding-bottom: 6px; white-space: nowrap; min-width: 0; flex-shrink: 0; color: rgb(55, 53, 47); position: relative;">
            <base-button style="height: 28px; color: rgba(55, 53, 47, 0.5)">
                <div style="display: flex; font-size: 14px; font-weight: 500; line-height: 18px; padding-right: 8px; padding-left: 8px;">
                    <div>Guest</div>
                </div>
            </base-button>
        </div>
        
        <div style="flex-grow: 1; display: flex; align-items: center; justify-content: flex-end; color: rgba(55, 53, 47, 0.65)">
            <div style="display: flex; height: 34px; padding-bottom: 0px; justify-content: flex-end; align-items: center; gap: 10px;">
                <div style="padding-bottom: 2px;">
                    <div>
                        <div style="display: inline-flex; position: relative; flex: 0 1 0%; border-radius: 4px; overflow: hidden; height: 28px;">
                            <base-button style="padding-right: 8px; padding-left: 8px; color: white; font-weight: 600;"
                                @click.stop="showAddMemberDialog"
                                :hover-style="{ background : 'rgb(0, 119, 212)' }"
                                :default-style="{ background: 'rgb(35, 121, 226)' }"
                            >
                                Add members
                            </base-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <space-settings-table></space-settings-table>
</template>

<script setup>
import { useGeneralStore } from '@/stores/general';
import BaseButton from './BaseButton.vue';
import SpaceSettingsContentHeader from "./SpaceSettingsContentHeading.vue";
import SpaceSettingsTable from "./SpaceSettingsTable.vue";

function showAddMemberDialog() {
    useGeneralStore().setCurrentComponentInDefaultOverlay("space_settings_add_member", {});
}
</script>