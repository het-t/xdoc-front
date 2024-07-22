import { computed, onBeforeMount, onMounted, onUnmounted } from 'vue';
import { syncRecordValueFromApi } from "@/helpers/globals/SyncRecordValueFromApi";
import { useSpaceSettingsStore } from '@/stores/spaceSettings';
import { getVisibleUsers } from '@/services/api/getVisibleUsers';

export const useVisibleUsers = function({
    mounted = true, 
    unmounted = true,
    beforeMount = false
}) {
    const spaceSettingsStore = useSpaceSettingsStore();

    async function populateVisibleUsers() {        
        try {
            const spaceId = "f2cf1fd1-8789-4ddd-9190-49f41966c446";
    
            const visibleUsers = (
                await getVisibleUsers({
                    spaceId
                })
            ).data.users;
    
            spaceSettingsStore.setVisibleUsers(visibleUsers);
        
            spaceSettingsStore.visibleUsers.forEach(({userId}) => {
                syncRecordValueFromApi(
                    "xdoc_user",
                    userId,
                    spaceId
                )
            });
        } catch(err) {
            console.log(err);
        }
    }

    if(beforeMount) onBeforeMount(populateVisibleUsers);
    if(mounted) onMounted(populateVisibleUsers);
    if(unmounted) onUnmounted(populateVisibleUsers);

    return {
        visibleUsers: computed(() => 
            spaceSettingsStore.visibleUsers
        )
    }
}