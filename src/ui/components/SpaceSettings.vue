<template>
    <div class="xdoc-space-settings"
        style="height: 100vh; width: 100vw; position: fixed; top: 0; left: 0; display: flex; align-items: center; justify-content: center; pointer-events: auto; opacity: 1; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;" 
    >
        <div style="position: absolute; inset: 0; background: rgba(15, 15, 15, 0.6);"
            @click.stop="closeSpaceSettings"
        ></div>

        <div style="overflow: hidden; box-shadow: rgba(15, 15, 15, 0.05) 0 0 0 1px, rgba(15, 15, 15, 0.1) 0 5px 10px, rgba(15, 15, 15, 0.2) 0 15px 40px; background: white; position: relative; z-index: 1; border-radius: 12px; width: 1150px; height: calc(100vh - 100px); max-height: 715px; max-width: calc(100vw - 100px);">
            <div style="height: 100%; display: flex; flex-direction: row;">
                <!-- menu -->
                <div style="width: 240px; overflow: hidden auto; flex-shrink: 0;">
                    <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding-top: 10px; padding-left: 4px; padding-right: 4px;">
                        <div style="padding-bottom: 12px; overflow-y: scroll; height: 100%;">
                            <div>
                                <template v-for="(item, i) in menuItems" :key="i">
                                    <div style="height: 24px; color: rgba(55, 53, 47, 0.65); font-weight: 600; line-height: 1; font-size: 12px; padding-left: 12px; padding-right: 11px; text-overflow: ellipsis; overflow: hidden; display: flex; align-items: center;"
                                        v-if="item.type === 'heading'"
                                    >{{ item.value }}</div>
                                    
                                    <space-settings-menu-button style="padding-left: 12px; padding-right: 12px; height: 27px; margin-top: 1px; margin-bottom: 1px;"
                                        @click.stop="state.contentComponent = item.id"
                                        :active="item.id === state.contentComponent"
                                        v-if="item.type === 'button'"
                                    >
                                        <template #graphic>
                                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="typesCreatedBy" style="width: 20px; height: 20px; display: block; fill: inherit; flex-shrink: 0;"><path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 10.4229C6.05176 10.4229 4.54785 11.1133 3.83008 11.9131C2.90039 10.9082 2.33301 9.55469 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 9.55469 13.1064 10.9082 12.1699 11.9131C11.4521 11.1133 9.94824 10.4229 8 10.4229ZM8 9.30176C9.32617 9.30859 10.3516 8.18066 10.3516 6.71094C10.3516 5.33008 9.31934 4.18164 8 4.18164C6.6875 4.18164 5.6416 5.33008 5.64844 6.71094C5.65527 8.18066 6.68066 9.28809 8 9.30176Z"></path></svg>
                                        </template>
    
                                        <template #text>{{ item.value }}</template>
                                    </space-settings-menu-button>
    
                                    <div style="height: 18px;"
                                        v-if="item.type === 'separator'"
                                    ></div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- content -->
                <div style="flex-grow: 1; position: relative; z-index: 1; height: 100%;">
                    <div style="display: flex; flex-direction: column; width: 100%; height: 100%;">
                        <div class="xdoc-scroller vertical horizontal" 
                            style="overflow: auto; padding: 36px 60px; margin: 0; z-index: 1;"
                        >
                            <component
                                :is="components[state['contentComponent']]"
                            />
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { useGeneralStore } from '@/stores/general';
import SpaceSettingsContentMyAccount from "@/ui/components/SpaceSettingsContentMyAccount.vue";
import SpaceSettingsMenuButton from "@/ui/components/SpaceSettingsMenuButton.vue";
import SpaceSettingsContentPeople from "@/ui/components/SpaceSettingsContentPeople.vue";

const components = {
    SpaceSettingsContentMyAccount,
    SpaceSettingsContentPeople
}

const state = reactive({
    contentComponent: "SpaceSettingsContentMyAccount"
});

function closeSpaceSettings() {
    const generalStore = useGeneralStore();
    generalStore.hideCurrentComponent();
}

const menuItems = [
    { type: "heading", value: "Account" },
    { type: "button", value: "My account", id: "SpaceSettingsContentMyAccount" },
    { type: "separator" },

    { type: "heading", value: "Workspace" },
    { type: "button", value: "Members", id: "members" },
    { type: "button", value: "People", id: "SpaceSettingsContentPeople" },
    { type: "separator" },
];
</script>