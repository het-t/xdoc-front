<template>
    <div style="width: 100%; margin-bottom: 10px;">
        <div style="font-weight: 500; font-size: 14px; margin-bottom: 10px;"
        >Permissions</div>

        <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 4px;">
            <base-button
                style="min-height: 45px; width: 100%; padding: 4px 0;"
            >
                <div ref="typeBtn" style="display: flex; line-height: 120%; width: 100%; user-select: none; padding-top: 4px; padding-bottom: 4px;"
                    @click.stop="handleTeamspaceTypesDisplay"
                >
                    <div style="margin-left: 10px; margin-right: 6px;">
                        <div>{{ props.accessType.type }}</div>
    
                        <div style="margin-top: 2px; font-size: 12px; color: rgb(120, 119, 116);"
                        >{{ props.accessType.description }}</div>
                    </div>
                </div>
            </base-button>

            <div style="display: flex; align-items: center; width: 100%; justify-content: center; width: 100%; height: 1px;">
                <div class="separator"
                    style="border-bottom: solid 1px rgba(55, 53, 47, 0.09); margin-left: 15px; margin-right: 15px; width: 100%;"
                ></div>
            </div>

            <div style="margin-left: 4px; margin-right: 7px; padding-top: 4px; padding-bottom: 4px;">
                <div style="display: flex; align-items: center; justify-content: space-between; min-height: 36px;">
                    <div style="display: flex; gap: 10px; align-items: center; min-width: 200px; margin-left: 6px;">
                        <div>Teamspace owners</div>
                    </div>

                    <span>
                        <base-button style="padding: 0 8px; height: 28px;"
                        >{{ getMemberTypeAccessLevel("explicit_team_owner_permission") }}</base-button>
                    </span>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; min-height: 36px;">
                    <div style="display: flex; gap: 10px; align-items: center; min-width: 200px; margin-left: 6px;">
                        <div>Teamspace members</div>
                    </div>

                    <span>
                        <base-button style="padding: 0 8px; height: 28px;"
                        >{{ getMemberTypeAccessLevel("explicit_team_permission") }}</base-button>
                    </span>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; min-height: 36px;">
                    <div style="display: flex; gap: 10px; align-items: center; min-width: 200px; margin-left: 6px;">
                        <div>Everyone else in Het Tarkhala's Xdoc</div>
                    </div>

                    <span>
                        <base-button style="padding: 0 8px; height: 28px;"
                        >{{ getMemberTypeAccessLevel("space_permission") }}</base-button>
                    </span>
                </div>
            </div>
        </div>

        <div style="width: 100%; height: 20px;"></div>

        <div style="font-weight: 500; font-size: 14px; margin-bottom: 10px;"
        >Members</div>

        <div style="display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10; background: white; padding-bottom: 10px;">
            <div>
                <base-button style="height: 32px; white-space: nowrap; border-radius: 4px; padding: 0 12px; color: white; font-weight: 500;"
                    @click.stop="handleClickNew"
                    :hover-style="{background: 'rgb(0, 119, 212)'}"
                    :default-style="{background: 'rgb(35, 131, 226)'}"
                >Add members</base-button>

                <base-button style="margin: 0 5px; font-size: 12px; height: 32px; padding: 0 6px 0 8px; white-space: nowrap; border-radius: 4px; line-height: 1.2; min-width: 0px; color: rgb(35, 131, 226);"
                    :hover-style="{background: 'rgba(35, 131, 226, 0.07)'}"
                >Copy link</base-button>

                <div style="flex-grow: 1;"></div>
            </div>
        </div>

        <div style="display: block; overflow: hidden; margin-top: 6px; border-bottom: solid 1px rgba(55, 53, 47, 0.09);">
            <div style="font-size: 12px; width: 100%; color: rgba(55, 53, 47, 0.65); text-overflow: ellipsis;">
                <div style="display: flex; align-items: center; justify-content: space-between; height: 28px;">
                    <base-button :hover-style="{}">Name</base-button>
                    <base-button :hover-style="{}">Role</base-button>
                </div>
            </div>
        </div>

        <div style="flex-grow: 1; flex-shrink: 1; display: flex; flex-direction: column; width: 100%; margin-bottom: 12px;"
            v-if="existance"
        >
            <div v-for="member in memberships" :key="member.id"
                style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;"
            >
                <space-settings-table-cell-user 
                    :user-id="member.user_id"
                />

                <base-button style="padding: 0 8px; height: 28px;"
                    @click.stop="setCurrentComponent({ 
                        component: 'dialog_teamspace_memberships', 
                        props: { teamId: props.teamId, userId: member.user_id},
                        setAutoPositions: true, e: $event 
                    })"
                >
                    <span style="font-size: 12.5px; color: rgb(55, 53, 47); font-weight: 400;"
                    >{{ member.type === "owner" 
                        ? "Teamspace owner" 
                        : "Teamspace member" 
                    }}</span>
                </base-button>
            </div>    
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, toRef } from 'vue';
import SpaceSettingsTableCellUser from './SpaceSettingsTableCellUser.vue';
import BaseButton from './BaseButton.vue';
import { useRecordValuesStore } from '@/stores/recordValues';
import { useDataExistanceCheck } from '../composables/useDataExistanceCheck';
import { syncRecordValueFromApi } from '@/helpers/globals/SyncRecordValueFromApi';
import { setCurrentComponent } from "@/helpers/globals/setCurrentComponent";

const props = defineProps({
    accessType: {
        type: Object,
        required: true
    },
    teamId: {
        type: String,
        required: true
    }
});

const typeBtn = ref("");

function handleClickNew() {
    console.log(props.teamId);
}

function handleTeamspaceTypesDisplay() {
    const { top, width, left, height } = typeBtn.value.getBoundingClientRect();
    setCurrentComponent("dialog_teamspace_types", {
        top,
        left,
        height,
        width
    });
}

const recordValuesStore = useRecordValuesStore();

const { memberships, permissions } = recordValuesStore.getRecordValue({
    id: props.teamId,
    table: "team",
    spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
});

const { existance } = useDataExistanceCheck(toRef(() => memberships.map(({user_id}) => user_id)));

memberships.map(({ user_id: id }) => syncRecordValueFromApi(
    "xdoc_user", 
    id, 
    "f2cf1fd1-8789-4ddd-9190-49f41966c446"
));

function getMemberTypeAccessLevel(memberType) {
    switch(permissions.find(({ type }) => type === memberType)?.role) {
        case "editor": return "Full access";
        case "edit_only": return "Edit";
        case "comment_only": return "Comment";
        case "view_only": return "View";
        default: return "Unknown"
    }
}
</script>