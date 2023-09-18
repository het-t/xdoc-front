<template>
  <div id="xdoc-app">
    
    <div style="display: flex; flex-grow: 1;">
      <menu-left />

      <div style="width: 100%; overflow: hidden;">
        <menu-top />
        
        <!-- set width of main element -->
        <main 
          class="xdoc-frame" 
          style="flex-grow: 0; flex-shrink: 1; display: flex; flex-direction: column; background: white; z-index: 1; height: calc(100% - 45px); max-height: 100%; position: relative; transition-property: width; transition-duration: 270ms; transition-time
          ease"
        >
          <RouterView/>
        </main>
      </div>

      <!-- <SidePeekRenderer /> -->
    </div>
      
    <!-- default overlay -->
    <div class="xdoc-overlay-container xdoc-default-overlay-container"
      style="position: fixed; inset: 0px; z-index: 999; pointer-events: none; overflow: hidden;"
    >
      <div style="position: relative; z-index: 0;"></div>

      <div v-for="(component, index) in getOverlayComponentsList" 
        :key="'xdoc-default-overlay-container-'+index"
        data-overlay="true"
      >
        <div style="inset: 0; background-color: rgba(0, 0, 0, 0.4); position: fixed;">
          <div :style="state.overlayComponentStyles[component.name]" style="border-radius: 5px;">
            <component :is="component.component" :data="component.data"></component>
          </div>
        </div>
      </div>
    </div>


    <!-- overlay -->
    <div class="xdoc-overlay-container"
      style="position: fixed; inset: 0px; z-index: 1001; pointer-events: none; overflow: hidden;"
    >
      <div style="position: relative; z-index: 0;"></div>


    </div>
  </div>
</template>


<script setup>
import { computed, defineAsyncComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import MenuLeft from './components/MenuLeft.vue';
import MenuTop from './components/MenuTop.vue';
// import SidePeekRenderer from './components/SidePeekRenderer.vue';

const state = reactive({
  overlayComponentStyles: {
    SettingsC: "display: flex; flex-direction: column; height: calc(100% - 144px); position: absolute; top: 72px; left: 72px; right: 72px; margin-left: auto; margin-right: auto; max-width: 970px; background: white;"
  }
})

const store = useStore()

const getOverlayComponentsList = computed(() => {
  return store.getters['getOverlayComponentsList'].map((component) => {
    return {
      name: component.name,
      component: defineAsyncComponent(() => import(`@/components/${component.name}.vue`)),
      data: component.data
    }
  })
})

// function handleClickOnOverlay() {
//   store.commit('setOverlayRequestData', {
//     visibility: false,
//     overlayRequesterBlockId: '',
//     overlayRequestReason: '',
//     overlayContentBlockId: ''
//   })
// }
</script>

<style>
@import './assets/index.css';

#xdoc-app {
  display: flex;
  position: relative;
  top: 0;
}

#overlay-default,
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
}

#overlay-default {
  background-color: var(--tertary-black-color);
}

#overlay-item {
  background-color: #fff;
  box-shadow: 0 0 12px var(--primary-box-shadow-color);
  border-radius: 3px;
  height: 80%;
  width: 65%;
  margin: auto;
}
</style>