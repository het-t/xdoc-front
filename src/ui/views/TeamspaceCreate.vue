<template>
    <dialog-teamspace-create 
        :type="selectedType"
    />

    <dialog-teamspace-types 
        @typeSelect="selectedType = $event"
        v-if="components?.[components.length-1].name === 'dialog_teamspace_types'"
    />
</template>

<script setup>
import { ref } from "vue";
import DialogTeamspaceCreate from "../components/DialogTeamspaceCreate.vue";
import DialogTeamspaceTypes from "../components/DialogTeamspaceTypes.vue";
import { useGeneralStore } from "@/stores/general";

const components = useGeneralStore().components;

const selectedType = ref({
    type: "Open", 
    description: "Everyone can see and join this teamspace"
});
</script>