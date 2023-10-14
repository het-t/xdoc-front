<template>
  <div id="xdoc-app">
    <div class="xdoc-app-inner xdoc-light-theme"
      style="color: rgb(55, 53, 47); fill: currentColor; line-height: 1.5; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; -webkit-font-smoothing
      auto; background-color: white;"
    >
      <div style="height: 100%;">
        <div class="xdoc-cursor-listener"
          style="width: 100vw; height: 100%; position: relative; display: flex; flex: 1 1 0%; background: white; cursor: text;"
        >
          <menu-left />
    
          <div style="display: flex; flex-direction: column; width: 100%; overflow: hidden;">
            <menu-top />
            
            <!-- set width of main element -->
            <main 
              class="xdoc-frame" 
              style="flex-grow: 0; flex-shrink: 1; display: flex; flex-direction: column; background: white; z-index: 1; height: calc(100% - 45px); max-height: 100%; position: relative; transition-property: width; transition-duration: 270ms; transition-timing-function: ease;"
              :style="`width: ${getMenuState === 'full' ? state.documentInnerWidth - 220 : state.documentInnerWidth}px`"
            >
              <RouterView name="default"/>
            </main>
          </div>
    
          <router-view name="sidePeek" />
        </div>
      </div>
        
      <!-- default overlay -->
      <div class="xdoc-overlay-container xdoc-default-overlay-container"
        style="position: fixed; inset: 0px; z-index: 999; pointer-events: none; overflow: hidden;"
      >
        <div style="position: relative; z-index: 0;"></div>
  
        <router-view name="overlayDefault" style="pointer-events: auto; position: relative; height: 100%; z-index: 0;"/>
      </div>
  
  
      <!-- overlay -->
      <div class="xdoc-overlay-container"
        style="position: fixed; inset: 0px; z-index: 1001; pointer-events: none; overflow: hidden;"
      >
        <div style="position: relative; z-index: 0;"></div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { reactive, computed, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import MenuLeft from './components/MenuLeft.vue';
import MenuTop from './components/MenuTop.vue';

const store = useStore()

const state = reactive({
  documentInnerWidth: window.innerWidth
})

const getMenuState = computed(function () {
  return store.getters['getMenuState']
})

function updateDocumentInnerWidth() {
  setTimeout(
    function() {
      state.documentInnerWidth = window.innerWidth
    }
  , 200)
}
onMounted(
  () => window.addEventListener('resize', updateDocumentInnerWidth)
)

onUnmounted(
  () => window.removeEventListener('resize', updateDocumentInnerWidth)
)
</script>

<style>
@import './assets/index.css';

#xdoc-app {
  display: flex;
  position: relative;
  top: 0;
}
</style>