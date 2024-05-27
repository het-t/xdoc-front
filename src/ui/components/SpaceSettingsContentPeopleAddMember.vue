<template>

</template>

<script setup>
import uuid from '@/helpers/globals/uuid';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { makeTransaction } from '@/services/transactions/factories/makeTransaction';
import { makeOperation } from '@/services/transactions/factories/makeOperation';
import { transformToStandardUUIDFormat } from '../helpers/router/transformToStandardUUIDFormat';

function spaceSettingsPeopleAdd(e, membershipType = "owner") {
    const inviteId = transformToStandardUUIDFormat(uuid());
    const spaceId = "f2cf1fd1-8789-4ddd-9190-49f41966c446";
    const inviteeUserId = transformToStandardUUIDFormat(uuid());
    const inviterUserId = transformToStandardUUIDFormat(uuid());

    const operations = [
        makeOperation(  
            "set",      
            {
                id: transformToStandardUUIDFormat(uuid()),
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
            "setPermissionItem",
            {
                type: "user_permission",
                role: "editor",
                user_id: inviteeUserId,
                invite_id: inviteId
            },
            ["permissions"],
            {
                table: "xdoc_space",
                id: spaceId
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
</script>