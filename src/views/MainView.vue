<template>
    <div style="height: 100vh;" class="flex">
        <div id="menu">
            <div id="hero">

            </div>

            <div class="flex-vertical">
                <!-- Records Menu -->
                <h3 class="pl8 pr16 mt16 mb8 menu-label">Records</h3>

                <router-link :to="{name: 'records-upcomings'}">
                    <font-awesome-icon icon="fa-solid fa-download" class="menu-icon"/>
                    Upcomings
                </router-link>

                <router-link :to="{name: 'records-create'}">
                    <font-awesome-icon icon="fa-solid fa-plus" class="menu-icon"/>
                    Create New
                </router-link>


                <!-- setting menu -->
                <h3 class="pl8 pr16 mt16 mb8 menu-label">Settings</h3>

                <router-link :to="{name: 'fields-setting'}">
                    <font-awesome-icon icon="fa-solid fa-tag" class="menu-icon"/>
                    Fields
                </router-link>

                <router-link :to="{name: 'users-setting'}">
                    <font-awesome-icon icon="fa-solid fa-user" class="menu-icon"/>
                    Users
                </router-link>

                <a href="#">
                    <font-awesome-icon icon="fa-regular fa-id-badge" class="menu-icon"/>
                    Profile
                </a>



                <!-- Tools Menu-->
                <h3 class="pl8 pr16 mt16 mb8 menu-label">Tools</h3>

                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-chart-pie" class="menu-icon"/>
                    Charts
                </a>

                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-envelope" class="menu-icon"/>
                    Messager
                </a>



                <!-- Support menu -->
                <!-- <h3 class="pl8 pr16 mt16 mb8 menu-label">Support</h3> -->

                <a href="#" class="mt16">
                    <font-awesome-icon icon="fa-regular fa-comments" class="menu-icon"/>
                    Contact Us
                </a>

            </div>
        </div>
        <router-view class="w"></router-view>
    </div>
</template>

<script>
export default {
    name: 'MainView'
}
</script>

<style scoped>
    .menu-icon {
        width: 15px;
        height: 15px;
        margin-right: 8px;
    }
    .w {
        width: calc(100vw - 200px);
        padding-right: 100px !important;
        padding-left: 100px !important;
        margin-left: 250px;
        padding-top: 16px;
        margin-bottom: 16px;
    }
    .menu-label {
        color: #bbb;
    }
    .flex-vertical {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    .flex-vertical a {
        padding: 3px 8px;
        margin: 0 8px;
        border-radius: 3px;
    }
    .flex-vertical a:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
    #menu {
        width: 200px;
        height: 100vh;
        overflow-y: scroll;
        scroll-behavior: scroll;
        scroll-behavior: smooth;
        background-color: rgb(251, 251, 250) !important;
        position: fixed;
        padding-bottom: 32px;
        box-shadow: rgb(0 0 0 / 2%) -1px 0px 0px 0px inset;
    }
    #hero {
        height: 250px;
    }
    .flex {
        gap: 16px;
    }
</style>