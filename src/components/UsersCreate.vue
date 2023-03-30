<template>
    <div>
        <form>
            <div class="mt8 setting-grid">
                <label for="user-create-username">username</label>
                <input v-model="username" type="text" id="user-create-username"/>
            </div>

            <div class="mt8 setting-grid">
                <label for="user-create-password">password</label>
                <input v-model="password" type="password" id="user-create-password"/>
            </div>

            <div class="mt8 setting-grid">
                <label for="user-create-cnf-password">confirm password</label>
                <input v-model="cnfPassword" type="password" id="user-create-cnf-password"/>
            </div>

            <div class="setting-grid mt16">
                <div></div>

                <div>
                    <button :disabled="disabled == true" @click.prevent="createUser" class="button green">save</button>
                    <button :disabled="disabled == true" class="button neutral ml8">cancel</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { users } from '@/api';
import swalError from '@/helpers/swalError.js'

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
                this.disabled = true

                if (this.password != this.cnfPassword) {
                    swalError('password are not matching')
                    this.password = ''
                    this.cnfPassword = ''
                    this.disabled = false
                    return 
                }

                const args = {
                    username: this.username,
                    password: this.password
                }
                
                users.create(args)
                .then(() => {
                    this.username = ''
                    this.password = ''
                    this.cnfPassword = ''

                    this.$store.dispatch('users/getList', {from: 0, to: 100})
                    this.$toast.success(`created '${args.username}' user`)
                })
                .catch(err => {
                    swalError(err)
                })
                .finally(() => this.disabled = false)
            }
        }
    }
</script>