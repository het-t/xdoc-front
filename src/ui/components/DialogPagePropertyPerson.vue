<template>
    <div style="display: flex; flex-direction: column; min-width: 180px; max-width: calc(100vw - 24px); height: 100%; max-height: 70vh;">
        <div class="xdoc-scroller vertical"
            style="z-index: 1; flex-shrink: 0; max-height: 240px; box-shadow: rgba(55, 53, 47, 0.16) 0px -1px inset; overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
        >
            <div style="display: flex; flex-direction: column; align-items: stretch; flex: 1 1 0%;">
                <div class="xdoc-scroller vertical horizontal"
                    style="z-index: 1; display: flex; align-items: flex-start; cursor: text; flex-wrap: wrap; padding: 8px 9px 1px; overflow: auto; background: rgba(242, 241, 238, 0.6); width: 100%; min-height: 34px; font-size: 14px; margin-right: 0px; margin-bottom: 0px;"
                >
                    <div style="display: flex; align-items: center; border: none; padding: 0px; width: auto; background: transparent; font-size: inherit; line-height: 20px; flex: 1 1 60px; min-width: 60px; margin: 0px 6px 6px 0px; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                        <input type="text" placeholder="Search for a person..." size="1" autocomplete="off"
                            style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px; height: 18px;"
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="xdco-scroller vertical"
            style="z-index: 1; flex-grow: 1; min-height: 0px; transform: translateZ(0px); overflow: hidden auto; margin-right: 0px; margin-bottom: 0px;"
        >
            <div id=":r34:" tabindex="0" role="menu">
                <div style="padding-top: 6px; padding-bottom: 6px;">
                    <div style="display: flex; padding-left: 14px; padding-right: 14px; margin-top: 6px; margin-bottom: 8px; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); font-size: 12px; font-weight: 500; line-height: 120%; user-select: none;">
                        <div style="align-self: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Select one or more people</div>

                        <div style="margin-left: auto;"></div>
                    </div>

                    <base-menu-item>
                        <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 14px;">
                            <page-property-person-value />
                        </div>
                    </base-menu-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseMenuItem from './BaseMenuItem.vue';
import PagePropertyPersonValue from './PagePropertyPersonValue.vue';
</script>