<template>
    <div
        style="min-width: 219px; font-size: 14px; min-height: 42px; display: flex; align-items: center; height: 100%;"
    >
        <div
            style="display: flex; margin: 4px 0; align-items: center; gap: 10px;"
        >
            <div style="max-width: 163px;">
                <div
                    style="font-weight: 510; height: 17px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"
                >{{ user?.name }}</div>
                <div
                    style="font-size: 12px; font-weight: 400; height: 17px; overflow: hidden; text-overflow: ellipsis; color: rgb(120, 119, 116);"
                >{{ user?.email }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRecordValuesStore } from '@/stores/recordValues';
import { defineProps } from 'vue';

const props = defineProps({
    userId: {
        type: String,
        required: true
    }
});

const recordValueStore = useRecordValuesStore();

const user = recordValueStore.getRecordValue({
    id: props.userId,
    table: "xdoc_user",
    spaceId: "f2cf1fd1-8789-4ddd-9190-49f41966c446"
});

</script>