<template>
    <div class="xdoc-teamspace-settings"
        style="height: 100vh; width: 100vw; position: fixed; top: 0; left: 0; display: flex; align-items: center; justify-content: center; pointer-events: auto; opacity: 1; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;" 
    >
        <div style="position: absolute; inset: 0; background: rgba(15, 15, 15, 0.6);"
            @click.stop="handleClose"
        ></div>

        <div role="dialog" tabindex="0" style="position: relative; z-index: 1; box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 5px 10px, rgba(15, 15, 15, 0.2) 0px 15px 40px; border-radius: 5px; overflow: auto; margin-bottom: 0px; width: 630px; height: 640px; max-width: calc(-100px + 100vw); max-height: calc(-100px + 100vh); background: white; backdrop-filter: none; transition-property: transform; transition-duration: 200ms; transition-timing-function: ease;">
            <div class="xdoc-teamspace-setting-modal" style="height: 100%;">
                <div style="height: 100%; user-select: none;">
                    <div style="display: flex; padding-top: 20px; flex-direction: column; height: 100%; width: 100%;">
                        <div style="display: flex; margin: 0 36px; flex-shrink: 0; align-items: center;">
                            <div style="font-weight: 600; font-size: 16px;"
                            >{{ teamName }}</div>
                            <div style="flex-grow: 1"></div>
                            <base-button style="padding: 0 16px; border-radius: 13px; font-weight: 600; font-size: 13px; height: 26px;"
                                :hover-style="{ backgroundColor: 'rgba(55, 53, 47, 0.16)' }"
                                :default-style="{ backgroundColor: 'rgba(55, 53, 47, 0.06)' }"
                            >Joined</base-button>
                        </div>

                        <div class="hide-scrollbar" style="overflow: auto visible; display: flex; flex-grow: 0; flex-shrink: 0; padding-left: 8px; padding-right: 8px; position: relative; z-index: 1; margin: 0 36px 20px; box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px inset; font-size: 14px">
                            <div style="padding-top: 6px; padding-bottom: 6px; color: rgb(55, 53, 47); margin-left: -8px; position: relative;">
                                <base-button style="height: 28px; padding-left: 8px; padding-right: 8px; margin-right: 8px; margin-left: 8px;"
                                    @click.stop="state.componentInView = 'general'"                                   
                                >General</base-button>

                                <div v-if="state.componentInView === 'general'" style="border-bottom: solid 2px rgb(55, 53, 47); position: absolute; bottom: 0; left: 8px; right: 8px;"></div>
                            </div>

                            <div style="padding-top: 6px; padding-bottom: 6px; color: rgb(55, 53, 47); margin-left: -8px; position: relative;">
                                <base-button style="height: 28px; padding-left: 8px; padding-right: 8px; margin-right: 8px; margin-left: 8px;"
                                    @click.stop="state.componentInView = 'members'"                                   
                                >Members</base-button>

                                <div v-if="state.componentInView === 'members'" style="border-bottom: solid 2px rgb(55, 53, 47); position: absolute; bottom: 0; left: 8px; right: 8px;"></div>
                            </div>

                            <div style="padding-top: 6px; padding-bottom: 6px; color: rgb(55, 53, 47); margin-left: -8px; position: relative;">
                                <base-button style="height: 28px; padding-left: 8px; padding-right: 8px; margin-right: 8px; margin-left: 8px;"
                                    @click.stop="state.componentInView = 'security'"                                   
                                >Security</base-button>

                                <div v-if="state.componentInView === 'security'" style="border-bottom: solid 2px rgb(55, 53, 47); position: absolute; bottom: 0; left: 8px; right: 8px;"></div>
                            </div>
                        </div>

                        <div class="xdoc-scroller vertical"
                            style="overflow: hidden auto; flex-grow: 1; margin-top: 0; margin-bottom: 0; z-index: 1;"
                        >
                            <div style="margin: 0 36px;">
                                <dialog-teamspace-setting-general 
                                    v-if="state.componentInView === 'general'"
                                    :team-id="props.teamId"
                                />
    
                                <dialog-teamspace-setting-members 
                                    v-else-if="state.componentInView === 'members'"
                                    :access-type="state.teamspaceAccessType"
                                    :team-id="props.teamId"
                                />
    
                                <dialog-teamspace-setting-security 
                                    v-else
                                    :team-id="props.teamId"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <dialog-teamspace-types 
        @typeSelect="state.teamspaceAccessType = $event"
        v-if="component.name === 'dialog_teamspace_types'"
    />

    <dialog-teamspace-setting-memberships 
        v-if="component.name === 'dialog_teamspace_memberships'"
        :team-id="props.teamId"
        :user-id="component.props.userId"
    />
</template>

<script setup>
import { useGeneralStore } from '@/stores/general';
import BaseButton from '../components/BaseButton.vue';
import DialogTeamspaceSettingGeneral from '../components/DialogTeamspaceSettingGeneral.vue';
import DialogTeamspaceSettingSecurity from '../components/DialogTeamspaceSettingSecurity.vue';
import DialogTeamspaceSettingMembers from '../components/DialogTeamspaceSettingMembers.vue';
import DialogTeamspaceSettingMemberships from '../components/DialogTeamspaceSettingMemberships.vue';
import DialogTeamspaceTypes from '../components/DialogTeamspaceTypes.vue';
import { reactive, defineProps, computed } from 'vue';
import { useRecordValuesStore } from '@/stores/recordValues';

const props = defineProps({
    teamId: {
        type: String,
        required: true
    }
});

const teamName = useRecordValuesStore().getRecordValue({
    id: props.teamId,
    table: "team",
    spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
}).name;

const generalStore = useGeneralStore();

const component = computed(() => generalStore.getCurrentComponentAndProps());

const state = reactive({
    componentInView: "members",
    teamspaceAccessType: {}
});

function handleClose() {
    generalStore.hideCurrentComponent();
}
</script>