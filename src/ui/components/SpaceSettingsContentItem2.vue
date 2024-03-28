<template>
    <div style="display: flex; align-items: center; justify-content: space-between; cursor: default;">
        <div style="display: flex; flex-direction: column; margin-right: 10px;">
            <div style="border-bottom: 0px; margin-bottom: 2px; margin-top: 0px; font-size: 14px; font-weight: 400; width: auto; color: rgb(55, 53, 47);">
                <div style="display: flex; flex-direction: row;">
                    <slot name="title"></slot>
                </div>
            </div>

            <div style="font-size: 12px; line-height: 16px; color: rgba(55, 53, 47, 0.65);">
                <slot name="description"></slot>
            </div>
        </div>

        <slot name="button"></slot>
    </div>
</template>