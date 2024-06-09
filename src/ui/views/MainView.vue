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
            :block-id="state.peekBlockId ? transformToStandardUUIDFormat(state.peekBlockId) : null"
            peek-mode="s"
          />
        </div>
      </div>
      
      <!-- default overlay -->
      <div class="xdoc-overlay-container xdoc-default-overlay-container"
        style="position: fixed; inset: 0px; z-index: 999; pointer-events: none; overflow: hidden;"
      >
        <div style="position: relative; z-index: 0;"></div>

        <div 
          v-for="(component, index) in components"
          :key="component.name"
          data-overlay="true" 
          style="position: relative; pointer-events: auto;"
          :style="{ zIndex: index }"
        >
          <page-peek-side 
            v-if="state.peekBlockId !== null && state.peekMode === 'c'"
            :block-id="transformToStandardUUIDFormat(state.peekBlockId)"
            peek-mode="c"
          />

          <dialog-page-property
            v-else-if="component.name === 'page_property_value_edit'"
            :property-id="component.props.propertyId"
            :page-id="component.props.pageId"
            :collection-id="component.props.collectionId"
          />

          <option-edit-view 
            v-else-if="component.name === 'page_property_option_edit'"
            :option-id="component.props.optionId"
            :collection-id="component.props.collectionId"
            :property-id="component.props.propertyId"
            :space-id="component.props.spaceId"
          />

          <collection-templates-list 
            v-else-if="component.name === 'collection_templates_list'"
            :collection-id="component.props.collectionId"
            :collection-view-id="component.props.collectionViewId"
            :space-id="component.props.spaceId"
          />

          <space-settings 
            v-else-if="component.name === 'space_settings'"
          />

          <space-settings-content-people-add-member
            v-else-if="component.name === 'space_settings_add_member'"
          />

          <space-settings-dialog-people-remove 
            v-else-if="component.name === 'dialog_space_setting_people_remove'"
            :space-id="spaceId"
            :user-id="component.props.userId"
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
import MenuLeft from '@/ui/components/MenuLeft.vue';
import MenuTop from '@/ui/components/MenuTop.vue';
import BaseSlashMenu from '@/ui/components/BaseSlashMenu.vue';
import PagePeekSide from '@/ui/components/PagePeekSide.vue';
import DialogPageProperty from '@/ui/components/DialogPageProperty.vue';
import SpaceSettings from "@/ui/components/SpaceSettings.vue";
import { useMenuLeftStore } from '@/stores/menuLeft';
import { useTransactionsQueue } from '@/stores/transactionsQueue';
import { useKeyStrokeStore } from '@/stores/keyStrokes';
import { useRecordValuesStore } from '@/stores/recordValues';
import { useRoute } from 'vue-router';
import { transformToStandardUUIDFormat } from '@/ui/helpers/router/transformToStandardUUIDFormat';
import { useGeneralStore } from '@/stores/general';
import OptionEditView from '@/ui/views/OptionEditView.vue';
import CollectionTemplatesList from '@/ui/components/CollectionTemplatesList.vue';
import SpaceSettingsContentPeopleAddMember from '../components/SpaceSettingsContentPeopleAddMember.vue';
import SpaceSettingsDialogPeopleRemove from '../components/SpaceSettingsDialogPeopleRemove.vue';

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

const recordValuesStore = useRecordValuesStore();
const transactionsQueue = useTransactionsQueue();

function inputHandler(e) {
    const target = e.target;
    const dataBlock = target.closest("[data-block-id]");

    console.log(target);
    
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
const components = computed(() => generalStore.components);

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
@import "../../assets/index.css";

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