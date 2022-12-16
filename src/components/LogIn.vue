<template>
<div class="login">
    <div class="login-main">
        <form>
            <input ref="focus" v-model="email" class="mb8" placeholder="E-Mail" id="email" type="text" name="email"><br>
            <input v-model="pwd" class="mb8" placeholder="Password" id="pwd" type="password" name="password"><br>

            <button class="green button" @click.prevent="login(), clear()">login</button>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'LogIn',
        data() {
            return {
                email: '',
                pwd: ''
            }
        },
        methods: {
            login() {
                axios.post('/api/login', {
                    email: this.email,
                    password: this.pwd
                }, {
                    withCredentials: true,
                })
                .then((results) => {
                    if (results?.data?.login == 1) {
                        this.$router.push('u/')
                    }
                    else {
                        this.$router.push('login')
                    }
                })
            },
            clear() {
                this.email = ''
                this.pwd = ''
            }
        },
        mounted() {
            this.$refs['focus'].focus()
        }
    }

</script>

<style scoped>

input {
    width: 100%;
}
.login {
    height: 100vh;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-main {
    width: 300px;
    text-align: center;
    height: fit-content;
}
/* #banner {
    color: rgba(128, 128, 128, 0.3);
    font-size:64px;
    margin-bottom: 32px;
    margin-top: 0;
} */
button {
    width: 100%;
}
input:focus {
    outline: none !important;
    /* border: solid 1px #9e9e9e; */
    box-shadow: 0 0 3px #9e9e9e;
}
</style>