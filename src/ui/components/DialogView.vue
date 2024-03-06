<template>
    <div>
        <div 
            @click.self="handleClickOutside"
            style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;"
        ></div>

        <div style="position: fixed; pointer-events: none;" 
            :style="{ top: `${pos.top}px`, left: `${pos.left}px`}"
        >
            <div style="width: 272px; height: 0px;"></div>

            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-end;">
                <div style="position: relative; top: 100%; pointer-events: auto;">
                    <div style="display: flex; align-items: center; position: relative; flex-direction: column-reverse; transform-origin: 100% top; opacity: 1; transition-property: opacity, transform; transition-duration: 270ms; transition-timing-function: ease;">
                        <div ref="dialog" role="dialog" style="width: 272px; border-radius: 6px; background: white; backdrop-filter: none; position: relative; max-width: calc(-24px + 100vw); box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px; overflow: hidden;">
                            
                            <slot></slot>

                            <footer style="flex-shrink: 0;"></footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGeneralStore } from '@/stores/general';
import { ref, onMounted } from "vue";
 
const generalStore = useGeneralStore();

function handleClickOutside() {
    generalStore.dialog = {};
    generalStore.setCurrentComponentInDefaultOverlay(null, {});
}

const pos = ref({});
const dialog = ref();

onMounted(() => {
    const adjustment = window.innerHeight - generalStore.dialog.top - dialog.value.getBoundingClientRect().height - 36;
    
    pos.value = {
        top: adjustment < 0 ? generalStore.dialog.top + adjustment : generalStore.dialog.top,
        left: generalStore.dialog.left
    };
})
</script>