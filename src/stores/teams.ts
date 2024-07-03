import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useTeamsStore = defineStore("teamsStore", () => {
    const visibleTeamIds: Ref<Record<string, string[]>> = ref({});

    function setVisibleTeamIds(spaceId: string, teams: Array<string>) {
        if(!visibleTeamIds.value?.[spaceId]?.length) visibleTeamIds.value[spaceId] = [];
        visibleTeamIds.value[spaceId]= [...teams];
    }

    return {
        getVisibleTeamIds: (spaceId: string) => visibleTeamIds.value[spaceId],
        setVisibleTeamIds
    }
})