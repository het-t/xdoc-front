<template>
    <div 
        role="menuitem"
        tabindex="-1"
        style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; width: calc(100% - 8px); margin-left: 4px; margin-right: 4px; border-radius: 4px;"
    >
        <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 45px; font-size: 14px; padding-top: 4px; padding-bottom: 4px;">
            <div style="display: flex; align-items: center; justify-content: center; margin-left: 10px; margin-right: 4px; margin-top: 1px; align-self: flex-start;"></div>

            <div style="margin-left: 6px; margin-right: 12px; min-width: 0px; flex: 1 1 auto;">
                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    <div style="display: flex; align-items: center;">
                        <span style="margin-right: 6px;">
                            <slot></slot>
                        </span>
                    </div>
                </div>

                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: rgb(120, 119, 116); margin-top: 2px; font-size: 12px;">
                    <slot name="description"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>