<template>
    <dialog-view pos="store">
        <div>
            <base-button v-for="(spaceTypeInfo, i) in types"
                :key="i"
                @click.stop="handleTypeSelect(spaceTypeInfo)"
                style="min-height: 45px; width: 100%; padding: 4px 0;"
            >
                <div style="display: flex; line-height: 120%; width: 100%; user-select: none; padding-top: 4px; padding-bottom: 4px;">
                    <div style="margin-left: 10px; margin-right: 6px;">
                        <div>{{ spaceTypeInfo.type }}</div>

                        <div style="margin-top: 2px; font-size: 12px; color: rgb(120, 119, 116);"
                        >{{ spaceTypeInfo.description }}</div>
                    </div>
                </div>
            </base-button>
        </div>
    </dialog-view>
</template>

<script setup>
import DialogView from './DialogView.vue';
import BaseButton from './BaseButton.vue';
import { useGeneralStore } from '@/stores/general';
import { defineEmits } from 'vue';

const emits = defineEmits(["typeSelect"]);

const types = [
    { type: "Default", description: "Everyone at workspace must me member" },
    { type: "Open", description: "Anyone can see and join this teamspace" },
    { type: "Closed", description: "Anyone can see teamspace but not join" }
];

function handleTypeSelect(type) {
    emits("typeSelect", type);
    useGeneralStore().hideCurrentComponent();
}
</script>