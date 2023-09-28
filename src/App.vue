<template>
  <div id="xdoc-app">
    
    <div style="display: flex; flex-grow: 1;">
      <menu-left />

      <div style="width: 100%; overflow: hidden;">
        <menu-top />
        
        <!-- set width of main element -->
        <main 
          class="xdoc-frame" 
          style="flex-grow: 0; flex-shrink: 1; display: flex; flex-direction: column; background: white; z-index: 1; height: calc(100% - 45px); max-height: 100%; position: relative; transition-property: width; transition-duration: 270ms; transition-timing-function: ease;"
        >
          <RouterView name="default"/>
        </main>
      </div>

      <router-view name="sidePeek" />
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
</template>


<script setup>
import MenuLeft from './components/MenuLeft.vue';
import MenuTop from './components/MenuTop.vue';
</script>

<style>
@import './assets/index.css';

#xdoc-app {
  display: flex;
  position: relative;
  top: 0;
}
</style>