<template>
    <div class="xdoc-space-settings"
        style="height: 100vh; width: 100vw; position: fixed; top: 0; left: 0; display: flex; align-items: center; justify-content: center; pointer-events: auto; opacity: 1; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;" 
    >
        <div style="position: absolute; inset: 0; background: rgba(15, 15, 15, 0.6);"
            @click.stop="handleClose"
        ></div>

        <div style="overflow: hidden; box-shadow: rgba(15, 15, 15, 0.05) 0 0 0 1px, rgba(15, 15, 15, 0.1) 0 5px 10px, rgba(15, 15, 15, 0.2) 0 15px 40px; background: white; position: relative; z-index: 1; border-radius: 5px; width: 480px; max-width: calc(100vw - 100px);">
            <div style="height: 100%;">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; user-select: none;">
                    <div style="padding: 22px 26px; user-select: none; position: relative; width: 100%;">
                        <div style="font-size: 18px; font-weight: 600;"
                        >Create a new teamspace</div>

                        <div style="color: rgba(55, 53, 47, 0.5); font-size: 12px; line-height: 16px;"
                        >Teamspaces are where your team organize pages, permissions and members</div>

                        <div style="width: 100%;">
                            <label style="margin-top: 14px; margin-bottom: 4px; font-size: 12px; color: rgba(55, 53, 47, 0.5); display: block;"
                            >Icon & name</label>

                            <div class="xdoc-focusable-within"
                                style="background: rgba(242, 241, 238, 0.6); box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset; padding: 4px 10px; border-radius: 4px;"
                            >
                                <input v-model="state.name" 
                                    type="text"
                                    placeholder="Human resource"
                                    style="border: none; width: 100%; resize: none; background: none; display: block; padding: 0;"
                                >
                            </div>

                            <label style="margin-top: 14px; margin-bottom: 4px; font-size: 12px; color: rgba(55, 53, 47, 0.5); display: block;"
                            >Description</label>

                            <div class="xdoc-focusable-within"
                                style="background: rgba(242, 241, 238, 0.6); box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset; padding: 4px 10px; border-radius: 4px;"
                            >
                                <textarea v-model="state.description"
                                    type="text" rows=3 
                                    placeholder="Details about your teamspace"
                                    style="border: none; width: 100%; resize: none; background: none; display: block; padding: 0;"
                                ></textarea>
                            </div>

                            <label style="margin-top: 14px; margin-bottom: 4px; font-size: 12px; color: rgba(55, 53, 47, 0.5); display: block;"
                            >Permissions</label>

                            <base-button
                                @click.stop="handleTeamspaceTypesDisplay"
                                style="min-height: 45px; width: 100%; padding: 4px 0; box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset;"
                            >
                                <div ref="typeBtn" style="display: flex; line-height: 120%; width: 100%; user-select: none; padding-top: 4px; padding-bottom: 4px;">
                                    <div style="margin-left: 10px; margin-right: 6px;">
                                        <div>{{ props.type.type }}</div>

                                        <div style="margin-top: 2px; font-size: 12px; color: rgb(120, 119, 116);"
                                        >{{ props.type.description }}</div>
                                    </div>
                                </div>
                            </base-button>

                            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding-top: 22px;">
                                <div style="display: inline-flex;">
                                    <base-button style="height: 32px; padding: 0 12px; white-space: nowrap; border-radius: 4px; color: white; font-weight: 500;"
                                        :style="state.name === '' ? { opacity: 0.4, cursor: 'default' } : { cursor: 'pointer' }"
                                        @click.stop="state.name && handleCreateTeamspace()"
                                        :hover-style="{background: 'rgb(0, 119, 212)'}"
                                        :default-style="{background: 'rgb(35, 131, 226)'}"
                                    >Create teamspace</base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGeneralStore } from '@/stores/general';
import BaseButton from './BaseButton.vue';
import { reactive, ref, defineProps } from 'vue';

const props = defineProps({
    type: {
        type: Object,
        required: true
    }
});

const state = reactive({
    name: "",
    description: ""
});

const typeBtn = ref(null);

const generalStore = useGeneralStore();

function handleTeamspaceTypesDisplay() {
    const { top, width, left, height } = typeBtn.value.getBoundingClientRect();
    generalStore.setCurrentComponentInDefaultOverlay("dialog_teamspace_types", {
        top,
        left,
        height,
        width
    });
}

function handleClose() {
    generalStore.hideCurrentComponent();
}

function handleCreateTeamspace() {
    console.log(state.name, state.description, props.type);
    handleClose();
}
</script>