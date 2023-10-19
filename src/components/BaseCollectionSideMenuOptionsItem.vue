<template>
    <base-button style="color: rgb(55, 53, 47); fill: rgba(55, 53, 47, 0.85); margin-right: 4px; margin-left: 4px; width: calc(100% - 8px);">
        <div style="display: flex; align-items: center; min-height: 28px; font-size: 14px; line-height: 120%; user-select: none; width: 100%;">
            <div style="margin-left: 10px; margin-right: 4px; display: flex; justify-content: center; align-items: center;">
                <slot name="graphic"></slot>
            </div>

            <div style="margin-left: 6px; margin-right: 6px; flex: 1 1 auto; min-width: 0;">
                <div style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">
                    <slot name="item"></slot>
                </div>
            </div>

            <div style="margin-left: auto; margin-right: 12px; min-width: 0; flex-shrink: 0; display: flex; align-items: center; color: rgba(55, 53, 47, 0.5); fill: rgba(55, 53, 47, 0.35);">
                <slot name="itemMeta"></slot>
                <svg role="graphics-symbol" viewBox="0 0 16 16" class="chevronRight" style="width: 12px; height: 100%; display: block; fill: rgba(55, 53, 47, 0.35); flex-shrink: 0; margin-left: 6px; transition: transform 200ms ease-in-out 0s;"><path d="M12.375 8.06445C12.375 7.83203 12.2861 7.63379 12.1084 7.45605L6.77637 2.24023C6.62598 2.08984 6.44141 2.01465 6.22266 2.01465C5.77832 2.01465 5.42285 2.35645 5.42285 2.80078C5.42285 3.01953 5.51172 3.21777 5.66211 3.375L10.4746 8.06445L5.66211 12.7539C5.51855 12.9043 5.42285 13.1025 5.42285 13.3213C5.42285 13.7725 5.77832 14.1143 6.22266 14.1143C6.44141 14.1143 6.62598 14.0391 6.77637 13.8887L12.1084 8.67285C12.293 8.49512 12.375 8.29688 12.375 8.06445Z"></path></svg>
            </div>
        </div>
    </base-button>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
</script>