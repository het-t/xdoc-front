<template>
    <dialog-view>
        <div role="menu" tabindex="0">
            <div style="padding-top: 6px; padding-bottom: 6px; display: flex; flex-direction: column;">
                <base-menu-item style="padding: 6px 0;"
                    @click.stop="handleSelectMembership('owner')"
                >
                    <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <div style="margin-left: 12px; margin-right: 12px; min-width: 0px; flex: 1 1 auto;">     
                                <div style="display: flex;"
                                >Teamspace owner</div>

                                <div style="color: rgba(55, 53, 47, 0.6); font-size: 12px; margin-top: 3px;"
                                >Can edit teamspace setting and full access to teamspace pages</div>
                            </div>
                        </div>
                    </div>
                </base-menu-item>

                <base-menu-item style="padding: 6px 0;"
                    @click.stop="handleSelectMembership('member')"
                >
                    <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <div style="margin-left: 12px; margin-right: 12px; min-width: 0px; flex: 1 1 auto;">     
                                <div style="display: flex;"
                                >Teamspace member</div>

                                <div style="color: rgba(55, 53, 47, 0.6); font-size: 12px; margin-top: 3px;"
                                >Cannot edit teamspace setting and can access teamspace pages</div>
                            </div>
                        </div>
                    </div>
                </base-menu-item>

                <base-menu-item style="color: rgb(235, 87, 87) !important;"
                    @click.stop="handleSelectMembership('remove')"
                >
                    <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <div style="margin-left: 12px; margin-right: 12px; min-width: 0px; flex: 1 1 auto;"
                            >Remove</div>
                        </div>
                    </div>
                </base-menu-item>
            </div>
        </div>
    </dialog-view>
</template>

<script setup>
import DialogView from './DialogView.vue';
import BaseMenuItem from './BaseMenuItem.vue';
import { useGeneralStore } from '@/stores/general';
import { defineProps } from 'vue';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { makeOperation } from '@/services/transactions/factories/makeOperation';
import { makeTransaction } from '@/services/transactions/factories/makeTransaction';
import { useRecordValuesStore } from '@/stores/recordValues';
import { updateTeamMembers } from '@/services/api/updateTeamMembers';

const props = defineProps({
    teamId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

async function handleSelectMembership(memberType) {
    const transactionsStore = useTransactionsQueue();
    
    const spaceId = "f2cf1fd1-8789-4ddd-9190-49f41966c446";
    const teamPointer = {
        id: props.teamId,
        spaceId,
        table: "team"
    };

    const team = useRecordValuesStore().getRecordValue(teamPointer);

    if(memberType == "remove") {
        const res = await updateTeamMembers({
            spaceId,
            teamId: props.teamId,
            existingMembersOrGuestsToRemove: [
                team.memberships.find(({ user_id }) => user_id === props.userId)
            ]
        });

        console.log(res.data)
    }
    else {
        const membership = team.memberships.find(({user_id}) => user_id === props.userId);
        membership.type = memberType;
        
        transactionsStore.enqueue(
            makeTransaction({
                spaceId,
                debug: {
                    userAction: "DialogTeamspaceSettingMemberships"
                },
                operations: [
                    makeOperation(
                        "set",
                        team.memberships,
                        ["memberships"],
                        {
                            id: props.teamId,
                            table: "team",
                            spaceId
                        }
                    )
                ]
            })
        );
    }


    useGeneralStore().hideCurrentComponent();
}
</script>