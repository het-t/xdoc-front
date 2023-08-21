<template>
    <div
        id="menu-top"
    >
    
        <!-- right part -->
        <div
            id="right"
            style="justify-self: flex-end;"
        >
            <div
                @click.prevent.stop="store.commit('setMenuState', 'full')"
            >
                <font-awesome-icon
                    class="icon icon-2 ptr hvr-bg"
                    style="width: 32px !important;"
                    :icon="['far', 'star']"
                />

                <font-awesome-icon
                    class="icon icon-2 ptr hvr-bg"
                    style="width: 32px !important;"
                    :icon="['fas', 'share']"
                />
            </div>

            <div class="icon ptr hvr-bg" style="width: 32px; height: 24px; display: flex; justify-content: center;">
                <font-awesome-icon 
                    class="icon-2"
                    :icon="['far', 'bell']" 
                    shake 
                />
            </div>

            <font-awesome-icon
                class="icon icon-2 ptr hvr-bg"
                style="width: 32px !important;"
                :icon="['fas', 'gear']"
            />
        </div>

        <!-- left part -->
        <div
            id="left"
            v-show="getMenuState !== 'full'"
        >
            <font-awesome-icon
                :icon="['fas', 'bars']"
                class="icon icon-2 ptr hvr-bg"
                id="bars-menu"
                style="width: 32px !important;"
                @click.prevent.stop="store.commit('setMenuState', 'full')"
            />

            <font-awesome-icon
                :icon="['fas', 'angles-right']"
                class="icon icon-2 ptr hvr-bg"
                id="open-menu"
                style="width: 32px !important;"
                @click.prevent.stop="store.commit('setMenuState', 'full')"
            />
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()

const getMenuState = computed(function () {
    return store.getters['getMenuState']
})
</script>

<style>
#menu-top {
    height: 45px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    color: var(--primary-black-color);
    padding: 0 12px;
}
#left {
    width: 266px;
    padding: 0 6px 1px 0;
    display: flex;
    align-items: center;
    gap: 6px;
}
#right {
    padding: 6px;
    display: flex;
    gap: 3px;
}
#open-menu {
    opacity: 0;;
}
#left:hover #open-menu {
    opacity: 1;
}
#left:hover #bars-menu {
    opacity: 0;
}
#bars-menu, #open-menu {
    transition: all 300ms;
}
#open-menu {
    position: relative;
    left: -42px;
    top: 0;
}
</style>