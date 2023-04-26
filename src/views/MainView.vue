<template>
    <div style="height: 100vh;" class="flex">
        <div :class="menu === false ? 'hide-menu' : ''" id="menu">
            <div>
                <div @click.prevent="menu = false" 
                    class="menu-display-actions"
                    style="text-align: right; margin-top: 4px;"
                >
                    <font-awesome-icon :icon="['fas', 'angles-left']" style="padding: 5px;"></font-awesome-icon>
                </div>

                <div id="dp-container" class="mt16">
                    <img id="dp" src="../../public/logo.svg" alt="">
                    <p id="username">Dr. John Doe</p>
                </div>
            </div>
        
            <MenuPagesRenderPartial :pages="pages"
                style="overflow-y: scroll; min-height: 460px;"
            ></MenuPagesRenderPartial>

            <div
                class="menu-new-page"
                @click.prevent="pageCreate"
            >
                <font-awesome-icon :icon="['fas', 'plus']" 
                    style="height: 16px; width: 16px; margin: 0 8px;">
                </font-awesome-icon>

                <span
                    style="
                        margin-bottom: 1px;
                        color: #37352FA6;
                        font-weight: 500;
                        font-size: 14px;
                    "
                >New page</span>
            </div>
        </div>

        <div class="menu-display-actions" style="margin-top: 4px; width: 100%; position: absolute;">
            <font-awesome-icon @click.prevent="menu = true" v-if="menu == false" :icon="['fas', 'bars']" style="padding: 5px; position: relative; left: 8px; width: 18px; height: 18px;"></font-awesome-icon>
        </div>

        <div class="w">
            <div class="pt16" style="overflow-x: auto;">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import {Pages} from '../api/index.js'
import MenuPagesRenderPartial from '../components/MenuPagesRenderPartial.vue'

export default {
    name: 'MainView',
    data() {
        return {
            menu: false,
            pages: []
        }
    },
    computed: {
        route() {
            return this.$route.meta
        }
    },
    methods: {
        pageCreate() {
            Pages.create()
            .then((res) => {
                console.log(res.data)
            })
        }
    },
    mounted() {
        Pages.get()
        .then((res) => {
            this.pages = res.data
        })
    },
    components: {
        MenuPagesRenderPartial
    }
}
</script>


<style>
#menu {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 200px;
    height: 100vh;
    background-color: rgb(250, 250, 250) !important;
    box-shadow: rgb(0 0 0 / 2%) -1px 0px 0px 0px inset;
    overflow: hidden;
    transform: translateX(0%) cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition: transform 1s;
}
#menu *:focus {
    outline: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.08);
}
#menu.hide-menu {
    transform: translateX(-100%);
    height: calc(100vh - 200px);
    position: absolute;
    top: 100px;
    vertical-align: center;
    border: solid 1px #e0e0e0;
}
.menu-new-page {
    box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 200px;
    padding: 12px 8px;
    background: rgb(251, 251, 250);
}
.menu-new-page:hover {
    background-color: rgba(0, 0, 0, 0.08);
}
.menu-display-actions svg{
    border-radius: 3px;
    cursor: pointer;
}
.menu-display-actions:hover svg{
    background-color: rgba(0, 0, 0, 0.08);
}
</style>

<style scoped>
    .breadcrumb {
        width: 100%; 
        margin-top: 16px;
        margin-bottom: 16px;
        /* height: 100px;  */
        display: flex; 
        flex-direction: column;
        justify-items: center;
        padding-left: 32px;
        padding-right: 32px;
    }
    .breadcrumb svg {
        padding: 3px;
        border: solid 1px #a0a0a0;
        border-radius: 100%;
        color: #a0a0a0;
        cursor: pointer;
    }
    .breadcrumb svg:hover {
        color: #707070;
        border-color: #707070;
    }
    .breadcrumb-paths {
        text-decoration: none;
        display: flex;
    }
    .separator {
        margin: 0 8px;
        color: #1917114d;
    }

    .breadcrumb-paths a {
        background-color: #fff;
        color: #1917114d;
        text-transform: capitalize;
    }
    .breadcrumb-hero {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .menu-icon {
        width: 15px;
        height: 15px;
        margin-right: 8px;
    }
    .w {
        margin-top: 25px; /* caution */
        width: 50%;
        margin-right: auto;
        margin-left: auto;
        padding-top: 16px;
        margin-bottom: 16px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .flex-vertical a {
        padding: 3px 8px;
        margin: 0 8px;
        border-radius: 3px;
    }

    .flex-vertical {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 3px;
        overflow-y: auto;
        border-top: solid 2px whitesmoke;
    }
    #hero {
        width: 200px;
        text-align: center;
    }
    #logo {
        font-size: 54px;
        font-weight: 500;
        color: #37352f;
    }
    .flex {
        gap: 16px;
    }

    #dp-container {
        text-align: center;
    }
    #dp {
        height: 100px;
        border-radius: 100%;
    }
    #username {
        padding: 4px;
        background-color: rgba(0, 0, 0, 0.04);
    }
</style>




            <!-- <div class="flex-vertical">

                <h3 class="pl8 pr16 mt16 mb8 menu-label">Records</h3>

                <router-link :to="{name: 'records-upcomings'}">
                    <font-awesome-icon icon="fa-solid fa-download" class="menu-icon"/>
                    Upcomings
                </router-link>

                <router-link :to="{name: 'records-create'}">
                    <font-awesome-icon icon="fa-solid fa-plus" class="menu-icon"/>
                    Create New
                </router-link>


                <h3 class="pl8 pr16 mt16 mb8 menu-label">Tools</h3>

                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-chart-pie" class="menu-icon"/>
                    Charts
                </a>

                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-envelope" class="menu-icon"/>
                    Messager
                </a>


                <h3 class="pl8 pr16 mt16 mb8 menu-label">Settings</h3>

                <router-link :to="{name: 'field-list', query: {blockId: 1}}">
                    <font-awesome-icon icon="fa-solid fa-tag" class="menu-icon"/>
                    Fields
                </router-link>

                <router-link :to="{name: 'user-list'}">
                    <font-awesome-icon icon="fa-solid fa-user" class="menu-icon"/>
                    Users
                </router-link>

                <a href="#">
                    <font-awesome-icon icon="fa-regular fa-id-badge" class="menu-icon"/>
                    Profile
                </a>


                <h3 class="pl8 pr16 mt16 mb8 menu-label">Support</h3>

                <a href="#" class="mt8 mb8">
                    <font-awesome-icon icon="fa-regular fa-comments" class="menu-icon"/>
                    Contact Us
                </a>

            </div> -->





            <!-- <div class="w">
                <div class="breadcrumb">
                    <div class="breadcrumb-hero">
                        <h1 style="font-weight: 600;">{{ route.heroTitle }}</h1>
                        <font-awesome-icon v-if="route?.action == true" @click.prevent="routeChange(route?.actionRouteName)" :icon="['fas', 'plus']"></font-awesome-icon>
                    </div>
    
                    <div v-if="route?.bc != undefined" class="breadcrumb-paths">
                        <p v-for="(link, index) of route.bc" :key="index">
                            <router-link :to="link.path">{{ link.title }}</router-link>
                            <span class="separator">/</span>
                        </p>
                    </div>
                </div>

            </div> -->