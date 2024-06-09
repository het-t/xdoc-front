import { defineStore } from "pinia";
import { ref, Ref } from "vue";

interface IUserPermission {
    userId: string,
    role: "member" | "owner"
}

export const useSpaceSettingsStore = defineStore("spaceSettings", () => {
    const visibleUsers: Ref<IUserPermission[]> = ref([]);

    function setVisibleUsers(users: IUserPermission[]) {
        visibleUsers.value = users;
    }

    return {
        visibleUsers, setVisibleUsers,

    }
})