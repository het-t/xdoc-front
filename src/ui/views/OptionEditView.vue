<template>
    <dialog-view>
        <div style="display: flex; flex-direction: column; min-width: 180px; max-width: calc(-24px + 100vw); height: 100%; max-height: 70vh;">
            <div class="xdoc-scroller vertical" style="z-index: 1; flex-grow: 1; min-height: 0px; transform: translateZ(0px); overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;">
                <div style="padding-top: 6px; padding-bottom: 6px; margin-top: 8px;">
                    <div style="padding-top: 6px; padding-bottom: 6px">
                        <base-menu-item
                            @click.stop="handleOptionDelete"
                        >
                            <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px; padding-top: 4px; padding-bottom: 4px;">
                                <div style="display: flex; align-items: center; justify-content: center; margin-left: 10px; margin-right: 4px;">
                                    <svg role="graphics-symbol" viewBox="0 0 16 16" class="trash" style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.85); flex-shrink: 0;"><path d="M4.8623 15.4287H11.1445C12.1904 15.4287 12.8672 14.793 12.915 13.7402L13.3799 3.88965H14.1318C14.4736 3.88965 14.7402 3.62988 14.7402 3.28809C14.7402 2.95312 14.4736 2.69336 14.1318 2.69336H11.0898V1.66797C11.0898 0.62207 10.4268 0 9.29199 0H6.69434C5.56641 0 4.89648 0.62207 4.89648 1.66797V2.69336H1.86133C1.5332 2.69336 1.25977 2.95312 1.25977 3.28809C1.25977 3.62988 1.5332 3.88965 1.86133 3.88965H2.62012L3.08496 13.7471C3.13281 14.7998 3.80273 15.4287 4.8623 15.4287ZM6.1543 1.72949C6.1543 1.37402 6.40039 1.14844 6.7832 1.14844H9.20312C9.58594 1.14844 9.83203 1.37402 9.83203 1.72949V2.69336H6.1543V1.72949ZM4.99219 14.2188C4.61621 14.2188 4.34277 13.9453 4.32227 13.542L3.86426 3.88965H12.1152L11.6709 13.542C11.6572 13.9453 11.3838 14.2188 10.9941 14.2188H4.99219ZM5.9834 13.1182C6.27051 13.1182 6.45508 12.9336 6.44824 12.667L6.24316 5.50293C6.23633 5.22949 6.04492 5.05176 5.77148 5.05176C5.48438 5.05176 5.2998 5.23633 5.30664 5.50293L5.51172 12.667C5.51855 12.9404 5.70996 13.1182 5.9834 13.1182ZM8 13.1182C8.28711 13.1182 8.47852 12.9336 8.47852 12.667V5.50293C8.47852 5.23633 8.28711 5.05176 8 5.05176C7.71289 5.05176 7.52148 5.23633 7.52148 5.50293V12.667C7.52148 12.9336 7.71289 13.1182 8 13.1182ZM10.0166 13.1182C10.29 13.1182 10.4746 12.9404 10.4814 12.667L10.6934 5.50293C10.7002 5.23633 10.5088 5.05176 10.2285 5.05176C9.95508 5.05176 9.76367 5.22949 9.75684 5.50293L9.54492 12.667C9.53809 12.9336 9.72949 13.1182 10.0166 13.1182Z"></path></svg>
                                </div>
            
                                <div style="margin-left: 6px; margin-right: 12px; min-width: 0; flex: 1 1 auto;">Delete</div>
                            </div>
                        </base-menu-item>
                    </div>
            
                    <div style="padding-top: 6px; padding-bottom: 6px; box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px">
                        <div style="display: flex; padding-left: 14px; padding-right: 14px; margin-top: 6px; margin-bottom: 8px; color: rgba(55. 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); font-size: 12px; font-weight: 500; line-height: 120%; user-select: none;">
                            <div style="align-self: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Colors</div>
            
                            <div style="margin-left: auto;">
                            <!-- processing image -->
                            </div>
                        </div>
            
                        <base-menu-item
                            @click.stop="handleStyleSelect(color.name)"  
                            v-for="color of colors"             
                            :key="color.name"                         
                        >
                            <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px; padding-top: 4px; padding-bottom: 4px;">
                                <div style="display: flex; align-items: center; justify-content: center; margin-left: 10px; margin-right: 4px;">
                                    <div style="height: 18px; width: 18px; border-radius: 4px; box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset;"
                                        :style="{ background: color['background'] }"
                                    ></div>
                                </div>
            
                                <div style="margin-right: 12px; margin-left: 6px; min-width: 0px; flex: 1 1 auto;">
                                    <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ captializeFirstCharacter(color["name"]) }}</div>
                                </div>
                            </div>
                        </base-menu-item>
                    </div>
                </div>
            </div>
        </div>
    </dialog-view>
</template>

<script setup>
import DialogView from '../components/DialogView.vue';
import BaseMenuItem from '../components/BaseMenuItem.vue';
import { captializeFirstCharacter } from '@/helpers/globals/captitalizeFirstCharacter';
import colors from "@/assets/colors.json";
import { defineProps } from 'vue';
import { useGeneralStore } from '@/stores/general';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { makeTransaction } from '@/services/transactions/factories/makeTransaction';
import { makeOperation } from '@/services/transactions/factories/makeOperation';

const props = defineProps({
    spaceId: {
        type: String,
        required: true
    },
    collectionId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    },
    optionId: {
        type: String,
        required: true
    }
})

const generalStore = useGeneralStore();

function handleOptionDelete() {
    useTransactionsQueue().enqueue(
        makeTransaction(
            makeOperation(
                "keyedObjectListRemove",
                {
                    remove: {
                        id: props.optionId
                    }
                },
                ['schema', props.propertyId, 'options'],
                {
                    id: props.collectionId,
                    table: "collection",
                    spaceId: props.spaceId
                }
            )
        )
    );

    generalStore.setCurrentComponentInDefaultOverlay(null, {});
}

function handleStyleSelect(color) {
    useTransactionsQueue().enqueue(
        makeTransaction({
            spaceId: "",
            debug: {
                userAction: "OptionEditView->handleStyleSelect"
            },
            operations: [
                makeOperation(
                    "keyedOjectListUpdate",
                    {
                        id: props.optionId,
                        color
                    },
                    ['schema', props.propertyId, 'options'],
                    {
                        table: "collection",
                        id: props.collectionId,
                        spaceId: props.spaceId
                    }
                )
            ]
        })
    );
}
</script>