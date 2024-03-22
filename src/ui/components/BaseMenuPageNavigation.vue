<template>
    <div style="display: flex; flex-direction: column; cursor: grab;">
        <div :class="`xdoc-outliner-${ props.cssClass }-header-container`"
            style="margin-bottom: 18px; width: 100%;"
        >
            <div :class="`xdoc-outliner-${ props.cssClass }-header`"
                style="display: flex; align-items: center; width: 100%; font-size: 14px; min-height: 24px; padding: 0px 14px 0px 15px; margin-top: 6px; margin-bottom: 2px;"
            >
                <div style="flex: 1 1 auto; white-space: nowrap; min-width: 0px; overflow: visible; text-overflow: clip;">
                    <div style="display: flex; align-items: center;">
                        <base-button 
                            :default-style="{ color: 'rgba(55, 53, 47, 0.5)' }"
                            :hover-style="{ backgroundColor: 'rgba(55, 53, 47, 0.08)', color: 'rgba(55, 53, 47, 0.8)' }"
                            style="margin-left: -4px; padding: 2px 4px;"
                        >
                            <span style="font-size: 12px; line-height: 1; font-weight: 600;"><slot name="header"></slot></span>
                        </base-button>
                    </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: center; flex-shrink: 0; flex-grow: 0; height: 100%;">
                    <slot name="navigation-options"></slot>
                </div>
            </div>

            <div id="id_1"
                style="display: block;"
                role="tree"
            >
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
    cssClass: {
        type: String,
        required: true
    }
});
</script>