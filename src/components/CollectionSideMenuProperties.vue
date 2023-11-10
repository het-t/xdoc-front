<template>
    <base-collection-side-menu>
        <template #header>Properties</template>

        <template #top-part>
            <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                <div style="margin-left: 12px; margin-right: 12px; min-width: 0px; flex: 1 1 auto;">
                    <div style="display: flex;">
                        <div class="xdoc-focusable-within"
                            style="display: flex; align-items: center; width: 100%; font-size: 14px; line-height: 20px; padding: 3px 6px; position: relative; border-radius: 4px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset; background: rgba(242, 241, 238, 0.6); cursor: pointer; height: 28px;"
                        >
                            <input type="text"
                                placeholder="Search for a property..."
                                style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px;"
                            >

                            <base-button style="border-radius: 20px; margin-left: 4px;">
                                <svg role="graphics-symbol" viewBox="0 0 16 16" class="clearInput" style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0;"><path d="M7.993 15.528a7.273 7.273 0 01-2.923-.593A7.633 7.633 0 012.653 13.3a7.797 7.797 0 01-1.633-2.417 7.273 7.273 0 01-.593-2.922c0-1.035.198-2.01.593-2.922A7.758 7.758 0 015.063.99 7.273 7.273 0 017.985.395a7.29 7.29 0 012.93.593 7.733 7.733 0 012.417 1.64 7.647 7.647 0 011.64 2.41c.396.914.594 1.888.594 2.923 0 1.035-.198 2.01-.593 2.922a7.735 7.735 0 01-4.058 4.05 7.272 7.272 0 01-2.922.594zM5.59 11.06c.2 0 .371-.066.513-.198L8 8.951l1.904 1.911a.675.675 0 00.498.198.667.667 0 00.491-.198.67.67 0 00.205-.49.64.64 0 00-.205-.491L8.981 7.969l1.92-1.911a.686.686 0 00.204-.491.646.646 0 00-.205-.484.646.646 0 00-.483-.205.67.67 0 00-.49.205L8 6.995 6.081 5.083a.696.696 0 00-.49-.19.682.682 0 00-.491.198.651.651 0 00-.198.49c0 .181.068.342.205.484l1.912 1.904-1.912 1.92a.646.646 0 00-.205.483c0 .19.066.354.198.49.136.132.3.198.49.198z"></path></svg>
                            </base-button>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template #mid-part>
            <!-- some random id -->
            <div id="some"
                tabindex="0"
                role="menu"
                aria-activedescendant="same as the id"
            >
                <div style="padding-top: 6px; padding-bottom: 6px;">
                    <div style="display: flex; padding-left: 14px; padding-right: 14px; margin-top: 6px; margin-bottom: 8px; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.4); font-size: 12px; font-weight: 500; line-height: 120%; user-select: none; height: 19px;">
                        <div style="display: flex; align-self: center;">
                            Shown in table
                        </div>

                        <!-- on hover backgound: rgba(35, 131, 226, 0.07)-->
                        <div style="margin-left: auto;">
                            <base-button style="flex-shrink: 1; white-space: nowrap; border-radius: 4px; font-size: 12px; line-height: 1.2; min-width: 0px; padding: 2px 6px; color: rgb(35, 131, 226);"
                                :hover-style="{background: 'rgba(35, 131, 226, 0.07)'}"
                            >
                                Hide all
                            </base-button>
                        </div>
                    </div>

                    <div style="margin: 0px;">
                        <!-- property goes here -->
                        <base-collection-side-menu-item 
                            v-for="i in testProperties" 
                            :key="i" 
                            @click.stop="handleUserSelectPropertyEdit(i)"
                        >
                            <template #propertyName>
                                {{ i.name }}
                            </template>
                        </base-collection-side-menu-item>
                    </div>
                </div>
            </div>

            <div style="padding-top: 6px; padding-bottom: 6px;">
                <base-button style="width: calc(100% - 8px); margin-left: 4px; margin-right: 4px; border-radius: 3px; color: rgba(55, 53, 47, 0.65), fill: rgba(55, 53, 47, 0.45)">
                    <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                        <div style="display: flex; align-items: center; justify-content: center; margin-left: 10px; margin-right: 4px;">
                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="trash" style="width: 24px; height: 16px; display: block; fill: inherit; flex-shrink: 0; margin-right: -2px;"><path d="M4.8623 15.4287H11.1445C12.1904 15.4287 12.8672 14.793 12.915 13.7402L13.3799 3.88965H14.1318C14.4736 3.88965 14.7402 3.62988 14.7402 3.28809C14.7402 2.95312 14.4736 2.69336 14.1318 2.69336H11.0898V1.66797C11.0898 0.62207 10.4268 0 9.29199 0H6.69434C5.56641 0 4.89648 0.62207 4.89648 1.66797V2.69336H1.86133C1.5332 2.69336 1.25977 2.95312 1.25977 3.28809C1.25977 3.62988 1.5332 3.88965 1.86133 3.88965H2.62012L3.08496 13.7471C3.13281 14.7998 3.80273 15.4287 4.8623 15.4287ZM6.1543 1.72949C6.1543 1.37402 6.40039 1.14844 6.7832 1.14844H9.20312C9.58594 1.14844 9.83203 1.37402 9.83203 1.72949V2.69336H6.1543V1.72949ZM4.99219 14.2188C4.61621 14.2188 4.34277 13.9453 4.32227 13.542L3.86426 3.88965H12.1152L11.6709 13.542C11.6572 13.9453 11.3838 14.2188 10.9941 14.2188H4.99219ZM5.9834 13.1182C6.27051 13.1182 6.45508 12.9336 6.44824 12.667L6.24316 5.50293C6.23633 5.22949 6.04492 5.05176 5.77148 5.05176C5.48438 5.05176 5.2998 5.23633 5.30664 5.50293L5.51172 12.667C5.51855 12.9404 5.70996 13.1182 5.9834 13.1182ZM8 13.1182C8.28711 13.1182 8.47852 12.9336 8.47852 12.667V5.50293C8.47852 5.23633 8.28711 5.05176 8 5.05176C7.71289 5.05176 7.52148 5.23633 7.52148 5.50293V12.667C7.52148 12.9336 7.71289 13.1182 8 13.1182ZM10.0166 13.1182C10.29 13.1182 10.4746 12.9404 10.4814 12.667L10.6934 5.50293C10.7002 5.23633 10.5088 5.05176 10.2285 5.05176C9.95508 5.05176 9.76367 5.22949 9.75684 5.50293L9.54492 12.667C9.53809 12.9336 9.72949 13.1182 10.0166 13.1182Z"></path></svg>
                        </div>

                        <div style="margin-left: 6px; margin-right: 6px; min-width: 0px; flex: 1 1 auto;">
                            <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                Deleted properties
                            </div>
                        </div>

                        <div style="margin-left: auto; margin-right: 12px; min-width: 0px; flex-shrink: 0; display: flex; align-items: center; color: rgba(55, 53, 47, 0.5); fill: rgba(55, 53, 47, 0.35);">
                            2
                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="chevronRight" style="width: 12px; height: 100%; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0; margin-left: 6px; transition: transform 200ms ease-in-out 0s;"><path d="M12.375 8.06445C12.375 7.83203 12.2861 7.63379 12.1084 7.45605L6.77637 2.24023C6.62598 2.08984 6.44141 2.01465 6.22266 2.01465C5.77832 2.01465 5.42285 2.35645 5.42285 2.80078C5.42285 3.01953 5.51172 3.21777 5.66211 3.375L10.4746 8.06445L5.66211 12.7539C5.51855 12.9043 5.42285 13.1025 5.42285 13.3213C5.42285 13.7725 5.77832 14.1143 6.22266 14.1143C6.44141 14.1143 6.62598 14.0391 6.77637 13.8887L12.1084 8.67285C12.293 8.49512 12.375 8.29688 12.375 8.06445Z"></path></svg>
                        </div>
                    </div>
                </base-button>
            </div>
        </template>

        <template #footer>
            <div style="padding-top: 6px; padding-bottom: 6px; box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px; margin-top: 1px;">
                <base-button 
                    @click.stop="setCurrentComponent('propertyCreate')"
                    style="width: calc(100% - 8px); margin-left: 4px; margin-right: 4px; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45);"
                >
                    <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                        <div style="display: flex; align-items: center; justify-content: center; margin-left: 10px; margin-right: 4px;"><svg role="graphics-symbol" viewBox="0 0 16 16" class="plus" style="width: 24px; height: 16px; display: block; fill: inherit; flex-shrink: 0; margin-right: -2px;"><path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path></svg></div>
                        
                        <div style="margin-left: 6px; margin-right: 6px; min-width: 0px; flex: 1 1 auto;">
                            <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                New property
                            </div>
                        </div>

                        <div style="margin-left: auto; margin-right: 12px; min-width: 0px; flex-shrink: 0; display: flex; align-items: center; color: rgba(55, 53, 47, 0.5); fill: rgba(55, 53, 47, 0.35);"></div>
                    </div>

                </base-button>
            </div>
        </template>
    </base-collection-side-menu>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import BaseButton from './BaseButton.vue';
import BaseCollectionSideMenu from './BaseCollectionSideMenu.vue';
import BaseCollectionSideMenuItem from './BaseCollectionSideMenuPropertiesItem.vue';

const store = useStore()

function setCurrentComponent(component) {
    store.commit('collectionSideMenu/setCurrentComponent', {collectionId: 'test', component})
}

function propertyEditClean() {
    store.commit('collection/cleanPropertyEdit', {
        collectionId: 'test'
    })
}

function handleUserSelectPropertyEdit(propertyData) {
    console.log("CollectionSideMenuProperties.vue => handleSelectPropertyEdit()")

    store.commit('collection/setPropertyEdit', {
        collectionId: 'test',
        name: propertyData.name,
        type: propertyData.type
    })

    setCurrentComponent('propertyEdit')
}

onMounted(propertyEditClean)
 
const testProperties = [
    {id: 1, name: "task name", type: "Text"},
    {id: 2, name: "description", type: "Text"},
    {id: 3, name: "deadline", type: "Date"},
    {id: 4, name: "assigned", type: "Person"},
    {id: 5, name: "status", type: "Select"},
    {id: 6, name: "status", type: "Select"},
    {id: 7, name: "status", type: "Multiselect"},
    {id: 8, name: "status", type: "Select"}
]
</script>