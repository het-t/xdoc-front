<template>
    <button
        @click.stop="login"
    >Login</button>

    <button
        @click.stop="signup"
    >Sign up</button>
    
    <div style="padding-left: 32px;">
        {{ isAuthenticated }}
    </div>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect, user, isAuthenticated } = useAuth0();

async function login() {
    if(user) {
        const {
            email,
            email_verified,
            family_name,
            given_name,
            nickname,
            picture,
            sub
        } = user.value;

        console.log(email, email_verified, family_name, given_name, nickname, picture, sub)
    }
    else await loginWithRedirect();

    console.log("=> login => ", user.value)
}

async function signup() {
    await loginWithRedirect({
        authorizationParams: {
            screen_hint: "signup"
        }
    });

    console.log(user.value);
}
</script>