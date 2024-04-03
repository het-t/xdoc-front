<template>
    <space-settings-content-header>My profile</space-settings-content-header>

    <div style="display: flex; flex-direction: column;">
        <div style="display: flex; flex-direction: row; align-items: center;">
            <base-button style="width: 60px; height: 60px; position: relative;"
                :hover-style="{}"
                @mouseover="state.showRemoveProfilePicBtn = true;"
                @mouseleave="state.showRemoveProfilePicBtn = false;"
            >
                <img style="border-radius: 100%; height: 60px; width: 60px;" 
                    @click.stop="handleProfilePicUpload"
                />
                
                <base-button style="height: 16px; width: 16px; border-radius: 50%; border: solid 1px rgba(15, 15, 15, 0.1); position: absolute; top: -2px; right: -2px;"
                    v-if="state.showRemoveProfilePicBtn"
                >                    
                    <svg role="graphics-symbol" viewBox="0 0 16 16" class="closeSmall" style="width: 10px; height: 10px; display: block; fill: rgb(145, 145, 142); flex-shrink: 0;"><path d="M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"></path></svg>
                </base-button>

                <input type="file" accept="image/*" ref="spaceSettingContentMyAccountProfilePic" style="display: none" />
            </base-button>

            <div style="margin-left: 20px; width: 250px;">
                <label style="display: block; margin-bottom: 4px; font-size: 12px; color: rgba(55, 53, 47, 0.65);">Name</label>
            
                <div class="xdoc-focusable-within" style="display: flex; align-items: center; width: 100%; font-size: 14px; line-height: 20px; position: relative; border-radius: 4px; box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset; background: rgba(242, 241, 238, 0.6); cursor: text; padding: 4px 10px;">
                    <input type="text" 
                        style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0;"
                        @input="handleProfileNameEdit"
                    >
                </div>
            </div>
        </div>
    </div>

    <div style="height: 48px;"></div>

    <space-settings-content-header>Account security</space-settings-content-header>

    <space-settings-content-item-2>
        <template #title>Email</template>

        <template #description>hettarkhala068@gmail.com</template>

        <template #button>
            <base-button style="border-radius: 4px; height: 32px; padding: 0 12px; border: solid 1px rgba(55, 53, 47, 0.16)">Change email</base-button>
        </template>
    </space-settings-content-item-2>
</template>

<script setup>
import spaceSettingsContentHeader from "@/ui/components/SpaceSettingsContentHeading.vue";
import BaseButton from "./BaseButton.vue";
import SpaceSettingsContentItem2 from "@/ui/components/SpaceSettingsContentItem2.vue";
import { reactive, ref } from "vue";
import { useTransactionsQueue } from "@/stores/transactionsQueue";
import { update } from "@/usecases/update";

const spaceSettingContentMyAccountProfilePic = ref('');

const state = reactive({
    showRemoveProfilePicBtn: false,
})

const transactionStore = useTransactionsQueue();

function handleProfileNameEdit(e) {
    transactionStore.setDelay(0);

    const op = { 
        args: {
            name: e.target.value
        },
        pointer: {
            table: "xdoc_user",
            id: "ca5f99c6-879b-4562-bd41-6651fc8d2099"
        },
        path: [],
        command: "update"
    }

    update(op.args, op.path, op.pointer);

    transactionStore.enqueue(op);

    transactionStore.setDelayDefault();
}

function handleProfilePicUpload() {
    spaceSettingContentMyAccountProfilePic.value.click();
}
</script>