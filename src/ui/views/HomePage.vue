<template>
    <div style="width: 100%; height: 100%; position: relative; top: 0; overflow-y: auto; scroll-behavior: smooth;">
        <div style="align-items: center; height: 56px; width: 100%; display: flex; flex-direction: row; position: fixed; top: 0; background: white;">
            <div style="flex-grow: 0; flex-shrink: 0; margin-top: 8px;">
                <div style="cursor: pointer; font-size: 24px; color: #000; font-weight: 500; margin-left: 16px; margin-top: -5px;"
                >XDoc.</div>
            </div>

            <div style="flex-grow: 1; margin-left: 16px; color: #000; margin-top: 8px;">
                <nav style="display: flex; align-items: center;">
                    <base-button style="padding: 3px 12px;">
                        <div style="display: flex; font-weight: 500; font-size: 15px; color: rgb(5, 5, 5); cursor: pointer;">
                            <div
                            >Product</div>

                            <div style="margin-left: 4px;"
                            ><svg role="graphics-symbol" viewBox="0 0 30 30" class="chevronDown" style="width: 8px; height: 100%; display: block; margin-top: 1px;"
                                ><polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon></svg>
                            </div>
                        </div>
                    </base-button>

                    <base-button style="padding: 3px 12px;">
                        <div style="display: flex; font-weight: 500; font-size: 15px; color: rgb(5, 5, 5); cursor: pointer;">
                            <div
                            >Support</div>

                            <div style="margin-left: 4px;"
                            ><svg role="graphics-symbol" viewBox="0 0 30 30" class="chevronDown" style="width: 8px; height: 100%; display: block; margin-top: 1px;"
                                ><polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon></svg>
                            </div>
                        </div>
                    </base-button>

                    <base-button style="padding: 3px 12px;">
                        <div style="display: flex; font-weight: 500; font-size: 15px; color: rgb(5, 5, 5); cursor: pointer;">
                            <div
                            >Pricing</div>
                        </div>
                    </base-button>
                </nav>
            </div>

            <div style="flex-grow: 0; margin-right: 16px; margin-top: 8px; font-size: 15px;">
                <base-button style="margin-right: 6px; white-space: nowrap; border-radius: 0; border-radius: 3px; padding: 4px 12px; color: rgb(5, 5, 5); font-weight: 500;"
                    @click.stop="handleLogin"
                >
                    Log in
                </base-button>

                <base-button style="white-space: nowrap; border-radius: 0; border-radius: 3px; padding: 4px 12px; font-weight: 500;"
                    :default-style="{ backgroundColor: 'rgb(5, 5, 5)', color: 'white'}"
                    :hover-style="{ backgroundColor: 'rgba(55, 53, 47, 0.08)', color: 'rgb(5, 5, 5)'}"
                    @click.stop="handleSignUp"
                >
                    Request a demo
                </base-button>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; margin-top: 108px;">
            <div style="font-size: 61px; color: #000; font-weight: 700;">
                Plan, prepare, track, relax
            </div>
    
            <div style="width: 50%;">
                <img src="https://illustrations.popsy.co/amber/remote-work.svg" alt=""
                    style="height: 100%; width: 100%;"
                >
            </div>
        </div>
        <div>{{ isAuthenticated }}</div>
    </div>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
import BaseButton from '../components/BaseButton.vue';
import router from '../router';
const { loginWithRedirect, user, isAuthenticated } = useAuth0();

async function handleLogin() {
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

        router.push({name: "main-page"});

        console.log(email, email_verified, family_name, given_name, nickname, picture, sub)
    }
    else await loginWithRedirect();

    console.log("=> login => ", user.value)
}

async function handleSignUp() {
    await loginWithRedirect({
        authorizationParams: {
            screen_hint: "signup"
        }
    });

    await handleLogin();
}
</script>