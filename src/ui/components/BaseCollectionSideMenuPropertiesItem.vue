<template>
    <div style="display: flex; flex-direction: column;">
        <div role="menuitem"
            tabindex="-1"
            style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; width: calc(100% - 8px); margin-left: 4px; margin-right: 4px; border-radius: 3px;"
            :style="state.style"
            @mouseenter="state.style = { background: 'rgba(55, 53, 47, 0.08)' }"
            @mouseleave="state.style = {}"
        >
            <div style="display: flex; align-items: center; line-height: 120%; width: 100%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                <div style="margin-left: 12px; margin-right: 6px; min-width: 0px; flex: 1 1 auto;">
                    <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        <div style="display: flex; align-items: center;">
                            <div style="display: flex; align-items: center; justify-content: center; width: 18px; height: 24px; flex-shrink: 0; cursor: -webkit-grab; margin-right: 8px;"><svg role="graphics-symbol" viewBox="0 0 10 10" class="dragHandle" style="width: 12px; height: 12px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path></svg></div>
                        
                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="typesTitle" style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.85); flex-shrink: 0;"><path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z"></path></svg>

                            <span style="margin-left: 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                            >{{ props.name }}</span>
                        </div>
                    </div>
                </div>

                <div style="margin-left: auto; margin-right: 12px; min-width: 0px; flex-shrink: 0;">
                    <div style="display: flex; align-items: center;">
                        <base-button aria-disabled="true"      
                            @click.stop="emitPropertyVisibilityChangeEvent"                                                                 
                            tabindex="-1" 
                            aria-label="Toggle property visibility" 
                            style="display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; height: 24px; width: 24px;"
                        >
                            <svg role="graphics-symbol" 
                                viewBox="0 0 32 32" 
                                class="eye" 
                                style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.85); flex-shrink: 0;"
                                :style="props.visible !== true ? 'opacity: 0.4;' : ''"
                            >
                                <path d="M16.006 25.812c8.863 0 14.994-7.17 14.994-9.406C31 14.16 24.858 7 16.006 7 7.252 7 1 14.16 1 16.406c0 2.236 6.252 9.406 15.006 9.406zm0-3.242a6.194 6.194 0 01-6.197-6.164c-.012-3.452 2.744-6.164 6.197-6.164 3.419 0 6.185 2.711 6.185 6.164 0 3.364-2.766 6.164-6.185 6.164zm0-3.94c1.228 0 2.246-1.007 2.246-2.224 0-1.228-1.018-2.235-2.246-2.235-1.24 0-2.258 1.007-2.258 2.235 0 1.217 1.018 2.224 2.258 2.224z"></path>
                            </svg>
                        </base-button>
                        
                        <svg role="graphics-symbol" 
                            viewBox="0 0 16 16" 
                            class="chevronRight" 
                            style="width: 12px; 
                            height: 100%; 
                            display: block; 
                            fill: rgba(55, 53, 47, 0.5); 
                            flex-shrink: 0; 
                            margin-left: 5px;"
                        >
                            <path d="M12.375 8.06445C12.375 7.83203 12.2861 7.63379 12.1084 7.45605L6.77637 2.24023C6.62598 2.08984 6.44141 2.01465 6.22266 2.01465C5.77832 2.01465 5.42285 2.35645 5.42285 2.80078C5.42285 3.01953 5.51172 3.21777 5.66211 3.375L10.4746 8.06445L5.66211 12.7539C5.51855 12.9043 5.42285 13.1025 5.42285 13.3213C5.42285 13.7725 5.77832 14.1143 6.22266 14.1143C6.44141 14.1143 6.62598 14.0391 6.77637 13.8887L12.1084 8.67285C12.293 8.49512 12.375 8.29688 12.375 8.06445Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, reactive, defineEmits } from "vue";
import BaseButton from "./BaseButton.vue";

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        required: true
    },
    collectionViewId: {
        type: String,
        required: true
    }
})

const state = reactive({
    style: {}
})

const emits = defineEmits([
    "property-visibility-change"
])

function emitPropertyVisibilityChangeEvent() {
    emits("property-visibility-change", {
        id: props.id,
        visible: !props.visible
    })
}
</script>