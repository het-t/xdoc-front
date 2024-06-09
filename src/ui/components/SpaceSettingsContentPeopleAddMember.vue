<template>
    <div style="position: fixed; inset: 0; height: 100vh; width: 100vw; display: flex; align-items: flex-start; justify-content: center;">
        <div 
            @click.stop="hideDialog"
            style="position: absolute; width: 100vw; height: 100vh; position: fixed; inset: 0; background: rgba(15, 15, 15, 0.6);"
        ></div>
        
        <div role="dialog"
            style="position: relative; top: 90px; z-index: 1; border-radius: 6px; overflow: hidden; background: white; margin-bottom: 0;"
        >
            <div class="xdoc-invite"
                style="display: flex; flex-direction: column; width: 480px; max-width: calc(100vw - 24px); height: 60vh; max-height: 70vh;"
            >
                <div class="xdoc-scroller vertical"
                    style="z-index: 1; overflow: hidden auto; flex-shrink: 0; max-height: 240px; box-shadow: rgba(55, 53, 47, 0.16) 0px -1px inset; margin-right: 0; margin-bottom: 0;"
                >
                    <div style="display: flex; flex-direction: column; align-items: stretch; flex: 1 1 0%; min-width: 0;">
                        <div class="xdoc-scroller vertical horizontal"
                            style="z-index: 1; display: flex; flex-wrap: nowrap; background: rgba(242, 241, 238, 0.6); cursor: text; overflow: auto; padding: 4px 9px; font-size: 14px; margin-right: 0; margin-bottom: 0;"
                        >
                            <div style="display: flex; flex-grow: 1; flex-wrap: wrap; min-width: 0; padding-top: 7px; padding-bottom: 4px;">
                                <div style="display: flex; flex: 1 1 100%; border: none; align-items: center; padding: 0; width: auto; background: transparent; font-size: inherit; line-height: 20px; min-width: 60px; margin: 0 0 0 2px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                                    <input type="text"
                                        v-model="inviteesEmails"
                                        placeholder="Type or paste emails separated by comma"
                                        style="color: inherit; border: inherit; line-height: inherit; resize: none; padding: 0; background: none; font-size: inherit; width: 100%; display: block;"
                                    >
                                </div>
                            </div>

                            <div style="flex-shrink: 0;">
                                <div style="margin-left: 8px; display: flex; align-items: center;">
                                    <base-button style="height: 32px; min-width: 70px; white-space: nowrap; border-radius: 0; border-radius: 3px; padding-left: 12px; padding-right: 12px; color: white; font-weight: 500;"
                                        @click.stop="spaceSettingsPeopleAdd"
                                        :hover-style="{background: 'rgb(0, 119, 212)'}"
                                        :default-style="{background: 'rgb(35, 131, 226)'}"
                                    >
                                        Invite
                                    </base-button>                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="xdoc-scroller vertical"
                    style="z-index: 1; overflow: hidden auto; flex-grow: 1; margin-right: 0; margin-bottom: 0;"
                >

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import uuid from '@/helpers/globals/uuid';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { makeTransaction } from '@/services/transactions/factories/makeTransaction';
import { makeOperation } from '@/services/transactions/factories/makeOperation';
import { transformToStandardUUIDFormat } from '../helpers/router/transformToStandardUUIDFormat';
import BaseButton from './BaseButton.vue';
import { ref } from 'vue';
import { findUserByEmail } from '@/services/api/findUserByEmail';
import { useGeneralStore } from '@/stores/general';
import { createUserByEmail } from '@/services/api/createUserByEmail';
import { useVisibleUsers } from '../composables/useVisibleUsers';

const inviteesEmails = ref("");

function hideDialog() {
    useGeneralStore().hideCurrentComponent();
}

const spaceId = "f2cf1fd1-8789-4ddd-9190-49f41966c446";
const inviterUserId = transformToStandardUUIDFormat(uuid());

function enqueueSpaceUserAddTransaction(spaceId, inviteeUserId, inviterUserId) {
    const membershipType = "owner";
    const inviteId = transformToStandardUUIDFormat(uuid());
    const spaceUserId = inviteeUserId + "|" + spaceId;

    const operations = [
        makeOperation(  
            "update",      
            {
                id: inviteId,
                flow_id: "0bb4ed52-a596-430f-a0e1-aa24677580d2",
                space_id: spaceId,
                target_id: spaceId,
                target_table: "xdoc_space",
                inviter_id: inviterUserId,
                inviter_table: "xdoc_user",
                invitee_id: inviteeUserId,
                invitee_table_or_group: "xdoc_user",
                message: "",
                created_time: Date.now(),
                attributes: {
                    permissions: {
                        type: "user_permission",
                        role: membershipType,
                        user_id: inviteeUserId,
                        invite_id: inviteId
                    },
                    origin_type: "space_share_modal"
                }
            },
            [],
            {
                table: "invite",
                id: inviteId,
                spaceId
            }
        ),
        makeOperation(
            "update",
            {
                id: spaceUserId,
                user_id: inviteeUserId,
                space_id: spaceId,
                invite_id: inviteId,
                membership_type: membershipType
            },
            [],
            {
                table: "space_user",
                id: spaceUserId,
                spaceId
            }
        )
    ];

    useTransactionsQueue().enqueue(
        makeTransaction({
            spaceId,
            debug: {
                userAction: "SpaceSettingsContentPeople=>spaceSettingsPeopleAdd"
            },
            operations
        })
    );
}

async function spaceSettingsPeopleAdd() {
    const emails = inviteesEmails.value.replaceAll(" ", "").split(",");
    
    for(const email of emails) {
        const { value } = (await findUserByEmail(email)).data;

        let inviteeId;
        if (value) {
            inviteeId = value.value.id;
        }

        if(!inviteeId) {
            inviteeId = (await createUserByEmail(email)).data.id;
        }

        enqueueSpaceUserAddTransaction(spaceId, inviteeId, inviterUserId);

        inviteesEmails.value = "";
    }
}

useVisibleUsers({ mounted: false, unmounted: true});
</script>