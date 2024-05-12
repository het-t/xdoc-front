<template>
    <div
        style="display: flex; flex-direction: column; align-items: center; border-radius: 8px; width: 100%;"
    > 
        <div style="font-size: 48px; color: black; font-weight: bold; margin-top: 32px;">
            Sign in
        </div>

        <div style="width: 100%; padding: 32px 32px 0 32px; display: flex; flex-direction: column;">
            <input type="text" id="sign-in-username" placeholder="Username" class="sign-in-inputs"
                v-model="state.username"
            >
            <input type="password" id="sign-in-password" placeholder="Password" 
                class="sign-in-inputs"
                v-model="state.password"
                style="margin-top: 16px;"
            >
        </div>

        <div style="width: 100%; padding: 32px 32px 0 32px; margin-bottom: 32px;">
            <button type="submit" id="sign-in-btn"
                @click.stop.once="signIn"
                @keyup.enter.once="signIn"
            >Sign in</button>
        </div>
    </div>
</template>

<script setup>
import { signIn as signInRequest } from '@/services/api/signIn';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
    username: "",
    password: "",
})

const router = useRouter();

async function signIn() {
    try {
        await signInRequest({ email: state.username, password: state.password });
        router.push({ name: "main-page" });
    }
    catch(error) {
        state.username = "";
        state.password = "";
    }
}
</script>

<style scoped>
.sign-in-inputs,
#sign-in-btn {
    height: 48px;
    border-radius: 8px;
    border: solid 1px;
    font-size: 16px;
    padding: 0 8px;
    text-align: center;
    width: 100%;
    border-color: rgba(128, 128, 128, 0.7);

}
.sign-in-inputs:focus {
    border-color: rgba(252, 135, 39, 1);
}
#sign-in-btn {
    cursor: pointer;
}
#sign-in-btn {
    background: rgba(252, 135, 39, 0.9);
    color: rgb(255, 255, 255);
    border: none !important;
}
#sign-in-btn:hover,
#sign-in-btn:focus {
    background:rgba(252, 135, 39, 1);
}
</style>