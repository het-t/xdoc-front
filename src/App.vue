<template>
  <div id="xdoc-app">
    
    <div style="display: flex; flex-grow: 1;">
      <menu-left />

      <div style="width: 100%;">
        <menu-top />
  
        <div id="content">
          <RouterView/>
        </div>
  
        <div 
          id="overlay-default" 
          @click.self="handleClickOnOverlay"
          v-show="some"
        >
          <div id="overlay-item"> 
  
          </div>
          <!-- <div id="overlay-item" class="center-peek">
            <render-page 
              v-if="getOverlayComponent === 'page'"
              :id="getOverlayComponentProps.pageDataRaw"
            />
          </div> -->
        </div>
  
        <div id="overlay"
          v-show="getOverlayVisibility === true" 
          @click.self="handleClickOnOverlay"
        >
      
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import MenuLeft from './components/MenuLeft.vue';
import MenuTop from './components/MenuTop.vue';
// import RenderPage from '@/components/RenderPage.vue';

const store = useStore()

const getOverlayVisibility = computed(function () {
  return store.getters['getOverlayVisibility']
})

// const getOverlayComponent = computed(function () {
//   return store.getters['getOverlayComponent']
// })

// const getOverlayComponentProps = computed(function () {
//   return store.getters['getOverlayComponentProps']
// })

function handleClickOnOverlay() {
  store.commit('setOverlayVisibility', false)
  store.commit('setOverlayPropertyValue', '')
  store.commit('setOverlayRequestData', {
    requesterBlockId: '',
    reason: ''
  })
}
</script>

<style>
@import './assets/index.css';

#xdoc-app {
  display: flex;
  position: relative;
  top: 0;
}

#content {
  flex: 1;
  margin-top: 39px;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
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
  padding-top: 31px;
}

#overlay-default {
  background-color: var(--tertary-black-color);
}

#overlay-item {
  background-color: #fff;
}
#overlay-item.center-peek {
  box-shadow: 0 0 12px var(--primary-box-shadow-color);
  border-radius: 2px;
}
</style>