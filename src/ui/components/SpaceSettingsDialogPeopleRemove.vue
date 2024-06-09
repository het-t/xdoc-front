<template>
    <dialog-view width="275px">
        <base-collection-side-menu-item
            @click.stop="spaceMemberRemove"
            style="margin: 6px 4px; padding-right: 6px; color: rgb(235, 87, 87);"
        >
            <template #graphic>
                <svg role="graphics-symbol" viewBox="0 0 14 15" class="handWave" style="width: 17px; height: 17px; display: block; fill: inherit; flex-shrink: 0;"><path d="M12.223 12.396c.888-.893 1.406-1.886 1.551-2.98.15-1.098-.08-2.288-.69-3.568l-1.552-3.275a2.264 2.264 0 00-.417-.594 1.28 1.28 0 00-.95-.404c-.36 0-.677.135-.95.404a1.211 1.211 0 00-.335.628c-.05.247-.023.502.082.766l.383.91c.013.031.011.056-.007.074-.023.019-.048.016-.075-.006L5.537.625C5.232.32 4.897.167 4.532.167c-.36-.005-.688.144-.984.444a1.115 1.115 0 00-.219.308 1.13 1.13 0 00-.096.349c-.291-.2-.59-.288-.895-.26-.3.023-.574.157-.82.403a1.278 1.278 0 00-.397.827c-.023.306.057.6.24.882a.876.876 0 00-.602.287c-.278.274-.415.584-.41.93.004.346.148.66.43.943l.458.458a.877.877 0 00-.348.09 1.115 1.115 0 00-.308.218 1.32 1.32 0 00-.37.615 1.29 1.29 0 00.021.684 1.6 1.6 0 00.397.635l4.231 4.232c.78.775 1.6 1.294 2.461 1.559.866.264 1.72.28 2.564.047.843-.232 1.622-.706 2.338-1.421zm-.841-.793c-.579.58-1.197.957-1.853 1.135-.651.178-1.317.15-1.996-.082-.674-.228-1.335-.663-1.982-1.305L1.497 7.297a.452.452 0 01-.143-.308.38.38 0 01.13-.3.403.403 0 01.3-.137c.119 0 .223.045.315.136l2.495 2.489a.45.45 0 00.355.15.476.476 0 00.342-.15.478.478 0 00.164-.349.461.461 0 00-.15-.362l-3.733-3.74a.446.446 0 01-.143-.3.38.38 0 01.13-.301.425.425 0 01.307-.137.45.45 0 01.315.137l3.48 3.486c.104.1.225.148.361.144a.476.476 0 00.342-.15c.1-.1.153-.22.157-.356a.47.47 0 00-.143-.362L2.283 2.799a.477.477 0 01-.143-.315.41.41 0 01.136-.307.39.39 0 01.301-.123c.119.004.223.05.315.136l4.04 4.034a.434.434 0 00.348.15.5.5 0 00.349-.15c.1-.1.153-.22.157-.356a.46.46 0 00-.137-.355L4.218 2.08a.425.425 0 01-.137-.308c0-.113.041-.216.123-.307a.41.41 0 01.308-.123c.114 0 .218.045.314.136L9.64 6.292c.136.141.282.212.437.212a.577.577 0 00.403-.178.71.71 0 00.192-.342c.032-.136.011-.298-.062-.485L9.748 3.25a.52.52 0 01-.014-.37.42.42 0 01.22-.232.362.362 0 01.32 0c.1.05.185.149.253.294l1.586 3.377c.52 1.121.702 2.108.547 2.96-.155.853-.58 1.627-1.278 2.325z"></path></svg>
            </template>
            
            <template #item
            >Remove from workspace</template>
        </base-collection-side-menu-item>
    </dialog-view>    
</template>

<script setup>
import { defineProps } from "vue";
import DialogView from "./DialogView.vue";
import BaseCollectionSideMenuItem from "./BaseCollectionSideMenuItem.vue";
import { removeUsersFromSpace } from "@/services/api/removeUsersFromSpace";
import { useVisibleUsers } from "../composables/useVisibleUsers";
import { useGeneralStore } from "@/stores/general";

const props = defineProps({
    userId: {
        type: String,
        required: true
    },
    spaceId: {
        type: String,
        required: true
    }
})

async function spaceMemberRemove() {
    try {
        await removeUsersFromSpace({
            userIds: [props.userId],
            spaceId: props.spaceId,
            revokePagePermissions: true,
            revokeUserTokens: true
        });

        useGeneralStore().hideCurrentComponent();
    }
    catch(err) {
        console.log(err);
    }
}

useVisibleUsers({ mounted: false, unmounted: true});
</script>