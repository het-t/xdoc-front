<template>
    <div class="header flex pt8 pb8 pr12 pl12">
        <div class="flex">logo</div>
        <div class="flex">
            <div class="links flex">
                <router-link to="/u/records/list">
                    <font-awesome-icon class="icon" icon="fa-solid fa-file-arrow-down"></font-awesome-icon>
                </router-link>
                
                <router-link to="/u/records/create">
                    <font-awesome-icon class="icon" icon="fa-solid fa-file-medical"></font-awesome-icon>
                </router-link>

                <router-link to="/u/setting">
                    <font-awesome-icon class="icon" icon="fa-solid fa-gear"></font-awesome-icon> 
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderC'
}
</script>

<style scoped>
    .flex {
        display: flex;
        align-items: center;
        gap: 16px;
    }
    .icon {
        height: 24px;
        padding: 4px;
        border: solid 1px whitesmoke;
        color: #31334a;
    }
    .links {
        gap: 16px;
    }
    .icon:hover {
        border: solid 1px blue;
        border-radius: 4px;
    }
    .header {
        width: 100%;
        height: 45px;
        position: static;
        top: 0;
        left: 0;
        gap: 12px;
        justify-content: space-between;   
        /* border-bottom: solid 1px #c2c2c2;      */
        box-shadow: rgb(233 233 231) 0px -1px 0px inset;
    }
    
    /* use query to hide icons when screen size is big */
    /* header should come down the screen when size is small */
</style>