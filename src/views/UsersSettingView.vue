<template>
    <div class="flex-setting">
        <div style="width: 40%; margin-top: 36px;">
            <users-create></users-create>
        </div>

        <users-list class="setting-list"></users-list>
    </div>
</template>

<script>
import UsersCreate from '../components/UsersCreate.vue'
import UsersList from '../components/UsersList.vue'

export default {
  components: { UsersList, UsersCreate },
    name: 'UsersSettingView',
}
</script>

<style scoped>
    .flex-setting {
        display: flex;
        gap: 16px;
        flex-direction: column;
    }

</style>