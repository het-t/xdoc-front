<template>
    <div ref="menu" @click.self="closeMenu" :style="{top: posY ? posY + 'px' : 0, left: posX ? posX + 'px' : 0}" class="menu-parent pt12 pb12">
        <div class="menu-action-parent">
            <slot name="menu-actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseMenu',
    props: ['menuId', 'posX', 'posY'],
    methods: {
        closeMenu(event) {
            if (!this.$refs.menu.contains(event.target)) {
                this.$emit('click-outside')
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.closeMenu)
    },
    beforeUnmount() {
        document.removeEventListener('click', this.closeMenu)
    },
}
</script>

<style>
.menu-parent {
    color: #37352f;
    font-size: 14px;
    min-width: 150px;
    position: absolute;
    background-color: #fff;
    top: 0;
    left: 0;
    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
    border-radius: 4px;
}
.menu-action-parent {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin: 0 4px;
}
.menu-action {
    width: 100%;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-items: flex-end;
    cursor: pointer;
    padding: 2px 0;
}
.menu-action:hover {
    background-color: rgba(0, 0, 0, 0.08);
}
.menu-action .action-pic {
    height: 16px;
    width: 16px;
}
.action-parent {
    width: 16px;
    height: 16px;
    align-items: center;
    display: flex;
    justify-content: right;
}
.mrl6 {
    margin: 0 6px;
}
</style>