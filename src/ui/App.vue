<template>
  <div id="xdoc-app">
    <div class="xdoc-app-inner xdoc-light-theme"
      style="color: rgb(55, 53, 47); fill: currentColor; line-height: 1.5; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; -webkit-font-smoothing:
      auto; background-color: white;"
    >
      <div style="height: 100%;">
        <div 
          @input="inputHandler"
          class="xdoc-cursor-listener"
          style="width: 100vw; height: 100%; position: relative; display: flex; flex: 1 1 0%; background: white; cursor: text;"
        >
          <menu-left 
            :space-id="spaceId"
            :space-view-id="spaceViewId"
          />
    
          <div style="display: flex; flex-direction: column; width: 100%; overflow: hidden;">
            <menu-top />
            
            <!-- set width of main element -->
            <main 
              class="xdoc-frame" 
              style="flex-grow: 0; flex-shrink: 1; display: flex; flex-direction: column; background: white; z-index: 1; height: calc(100% - 45px); max-height: 100%; position: relative; transition-property: width; transition-duration: 270ms; transition-timing-function: ease;"
              :style="`width: ${getMenuState === 'full' ? state.documentInnerWidth - 220 : state.documentInnerWidth}px`"
            >
              <router-view name="default"/>
            </main>
          </div>
    
          <page-peek-side 
            v-if="state.peekBlockId !== null && state.peekMode === 's'"
            :block-id="transformToStandardUUIDFormat(state.peekBlockId)"
            peek-mode="s"
          />
        </div>
      </div>
      
      <!-- default overlay -->
      <div class="xdoc-overlay-container xdoc-default-overlay-container"
        style="position: fixed; inset: 0px; z-index: 999; pointer-events: none; overflow: hidden;"
      >
        <div style="position: relative; z-index: 0;"></div>

        <div data-overlay="true" style="position: relative; z-index: 0; pointer-events: auto;">
          <page-peek-side 
            v-if="state.peekBlockId !== null && state.peekMode === 'c'"
            :block-id="transformToStandardUUIDFormat(state.peekBlockId)"
            peek-mode="c"
          />

          <dialog-page-property
            v-if="currentComponent === 'page_property_value_edit'"
            :property-id="currentComponentProps.propertyId"
            :page-id="currentComponentProps.pageId"
            :collection-id="currentComponentProps.collectionId"
          />

          <option-edit-view 
            v-if="currentComponent === 'page_property_option_edit'"
            :option-id="currentComponentProps.optionId"
            :collection-id="currentComponentProps.collectionId"
            :property-id="currentComponentProps.propertyId"
            :space-id="currentComponentProps.spaceId"
          />

          <collection-templates-list 
            v-if="currentComponent === 'collection_templates_list'"
            :collection-id="currentComponentProps.collectionId"
            :collection-view-id="currentComponentProps.collectionViewId"
            :space-id="currentComponentProps.spaceId"
          />

          <space-settings 
            v-if="currentComponent === 'space_settings'"
          />
        </div>
      
        <base-slash-menu :pos=slashMenuPosition v-if="showSlashMenu === true"></base-slash-menu>
      </div>
    
      <!-- overlay -->
      <div class="xdoc-overlay-container"
        style="position: fixed; inset: 0px; z-index: 1001; pointer-events: none; overflow: hidden;"
      >
        <div style="position: relative; z-index: 0;"></div>
      </div>
    </div>
  </div>
  {{ routeQuery }}
</template>


<script setup>
import { reactive, computed, onMounted, onUnmounted, watch } from 'vue';
import MenuLeft from './components/MenuLeft.vue';
import MenuTop from './components/MenuTop.vue';
import BaseSlashMenu from './components/BaseSlashMenu.vue';
import PagePeekSide from './components/PagePeekSide.vue';
import DialogPageProperty from './components/DialogPageProperty.vue';
import SpaceSettings from "./components/SpaceSettings.vue";
import { useMenuLeftStore } from '../stores/menuLeft';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { useKeyStrokeStore } from '@/stores/keyStrokes';
import { useRecordValuesStore } from '@/stores/recordValues';
import { useRoute } from 'vue-router';
import { transformToStandardUUIDFormat } from './helpers/router/transformToStandardUUIDFormat';
import { useGeneralStore } from '@/stores/general';
import OptionEditView from './views/OptionEditView.vue';
import CollectionTemplatesList from './components/CollectionTemplatesList.vue';

const spaceId = "f2cf1fd1-8789-4ddd-9190-49f41966c446";
const spaceViewId = "dbf9ee2d-ded5-4b35-b63d-de778f9dc19a";

const route = useRoute();

watch(
  () => route?.query?.pm,
  (newVal, oldVal) => {
    if (newVal && newVal !== oldVal) {
      state.peekMode = newVal;
    }
    else {
      state.peekMode = null;
    }
  }
)

watch(
  () => route?.query?.p,
  (newVal, oldVal) => {
    if (newVal !== null && newVal !== oldVal) {
      state.peekBlockId = newVal;
    }
    else {
      state.peekBlockId = null;
    }
  }
)

const routeQuery = computed(() => route.query);

const state = reactive({
  documentInnerWidth: window.innerWidth,
  peekMode: "s",
  peekBlockId: ""
})

const keystrokesStore = useKeyStrokeStore();

const showSlashMenu = keystrokesStore.showSlashMenu;
const slashMenuPosition = keystrokesStore.getPositions;

const menuLeftStore = useMenuLeftStore();

const getMenuState = computed(function () {
  return menuLeftStore.menuLeftState;
})

function updateDocumentInnerWidth() {
  setTimeout(
    function() {
      state.documentInnerWidth = window.innerWidth
    }
  , 200)
}

const qStore = useTransactionsQueue();
qStore.setBatchSize(50);

const recordValuesStore = useRecordValuesStore();
const transactionsQueue = useTransactionsQueue();

function inputHandler(e) {
    const target = e.target;
    const dataBlock = target.closest("[data-block-id]");

    if (!dataBlock) return;

    const dataBlockId = dataBlock.getAttribute("data-block-id");
    // const blockCSSClasses = dataBlock.getAttribute("class")?.split(" ");

    const blockData = recordValuesStore.getRecordValue(
      dataBlockId,
      "block",
      "f2cf1fd1-8789-4ddd-9190-49f41966c446"
    )
    
    if (e.inputType === "insertText") {
      if (blockData.type === "text") {
        transactionsQueue.setDelay(5*1000);
        transactionsQueue.enqueue(
          blockData.updateTitle(e.data)
        )
      }
    }
}

/** collection-record-porperty-value-overlay */
const generalStore = useGeneralStore();
const currentComponent = computed(() => generalStore.getCurrentComponentAndProps().component.value);
const currentComponentProps = computed(() => generalStore.getCurrentComponentAndProps()?.props.value);

onMounted(
  async () => {
    window.addEventListener('resize', updateDocumentInnerWidth);
  }
)

onUnmounted(
  () => window.removeEventListener('resize', updateDocumentInnerWidth)
)
</script>

<style>
@import '../assets/index.css';

#xdoc-app {
  display: flex;
  position: relative;
  top: 0;
}

.xdoc-focusable-within:focus-within {
  box-shadow: inset 0 0 0 1px rgba(35, 131, 226, 0.57), 0px 0px 0px 2px rgba(35, 131, 226, 0.35) !important;
}

input {
  font: inherit;
  color: inherit;
  margin: 0;
}
</style>