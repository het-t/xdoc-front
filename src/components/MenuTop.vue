<template>
    <header
        style="max-width: 100vw; z-index: 100; background: white; user-select: none;"
    >
        <div class="notion-topbar"
            style="width: 100%; max-width: 100vw; height: 45px; opacity: 1; transition: opacity 700ms ease 0s, color 700ms ease 0s; position: relative;"
        >
            <div style="display: flex; justify-content: space-between; align-items: center; overflow: hidden; height: 45px; padding-left: 12px; padding-right: 10px;">
                <div
                    style="flex-shrink: 0; width: 48px; height: 48px; margin: -12px -6px -12px -12px; padding: 12px;"
                    v-show="getMenuState !== 'full'"
                >
                    <div
                        style="position: relative;"
                    >
                        <div 
                            style="position: absolute; top: 0; left: 0; will-change: opacity; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;" :style="`opacity: ${state.opacity};`"
                        >
                            <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 3px;">
                                <font-awesome-icon
                                    :icon="['fas', 'bars']"
                                    class="icon icon-2 ptr hvr-bg"
                                    id="bars-menu"
                                    style="width: 32px !important;"
                                    @click.prevent.stop="store.commit('setMenuState', 'full')"
                                />
                            </div>
                        </div>

                        <div 
                            @mouseover="state.opacity = 0"
                            @mouseleave="state.opacity = 1"
                            style="position: absolute; top: 0; left: 0; will-change: opacity; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;"
                            :style="`opacity: ${1-state.opacity}`"
                        >
                            <div
                                style="position: relative; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 3px;" 
                            >
                                <font-awesome-icon
                                    :icon="['fas', 'angles-right']"
                                    class="icon icon-2 ptr hvr-bg"
                                    id="open-menu"
                                    style="width: 32px !important;"
                                    @click.prevent.stop="store.commit('setMenuState', 'full')"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                
                <div style="display: flex; align-items: center; margin-right: 8px; height: 45px;">
                    Budget / FY-24 
                </div>

                <div style="flex-grow: 1; flex-shrink: 1; height: 45px;"></div>

                <div style="display: flex; align-items: center; justify-content: space-between; padding-left: 12px; flex-grow: 0; flex-shrink: 0; height: 45px;">
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
            </div>
        </div>
    
    </header>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore()

const state = reactive({
    opacity: 1
})

const getMenuState = computed(function () {
    return store.getters['getMenuState']
})
</script>

<style>
/* #menu-top {
    height: 45px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    color: var(--primary-black-color);
    padding: 0 12px;
} */
/* #left {
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
} */
/* #open-menu {
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
} */
</style>