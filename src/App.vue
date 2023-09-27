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

      <div v-for="(component, index) in getOverlayComponentsList" 
        :key="'xdoc-default-overlay-container-'+index"
        data-overlay="true"
        style="pointer-events: auto; position: relative; z-index: 0;"
      >
        <component :is="component.component"></component>
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
import { computed, defineAsyncComponent } from 'vue';
// import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import MenuLeft from './components/MenuLeft.vue';
import MenuTop from './components/MenuTop.vue';

// const state = reactive({
//   overlayComponentStyles: {
//     SettingsC: "display: flex; flex-direction: column; height: calc(100% - 144px); position: absolute; top: 72px; left: 72px; right: 72px; margin-left: auto; margin-right: auto; max-width: 970px; background: white;",
//     SidePeekRenderer: "inset: 0px; z-index: 99; background: rgba(0, 0, 0, 0.4);"
//   }
// })

const store = useStore();
// const route = useRoute();

// watch(
//   function() {
//     return route.params?.pageId;
//   },
//   function(newValue, oldValue) {
//     console.log("ParamPageId:", newValue, oldValue);
//   }
// )

// watch(
//   function() {
//     return route.query?.p;
//   },
//   function(newValue, oldValue) {
//     console.log("QueryPageId:", newValue, oldValue);
//   }
// )

// watch(
//   function() {

//   }
// )

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
</style>