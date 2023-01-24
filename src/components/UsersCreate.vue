<template>
    <div>
        <div class="mt8 setting-grid">
            <label for="username">username</label>
            <input v-model="username" type="text" id="username"/>
        </div>

        <div class="mt8 setting-grid">
            <label for="password">password</label>
            <input v-model="password" type="password" id="password"/>
        </div>

        <div class="mt8 setting-grid">
            <label for="cnf-password">confirm password</label>
            <input v-model="cnfPassword" type="password" id="cnf-password"/>
        </div>

        <button :disabled="disabled == true" @click.prevent="createUser" class="button green mt16">save</button>
        <button :disabled="disabled == true" class="button neutral mt16 ml8">cancel</button>
    </div>
</template>

<script>
import { users } from '@/api';

    export default {
        name: 'UsersCreate',
        data() {
            return {
                disabled: false,
                username: '',
                password: '',
                cnfPassword: ''
            }
        },
        methods: {
            createUser() {
                users.create({
                    username: this.username,
                    password: this.password
                })
                .then(() => {
                    this.username = ''
                    this.password = ''
                })
            }
        }
    }
</script>

<style scoped>
  button {
    min-width: 56px;
  }
</style>