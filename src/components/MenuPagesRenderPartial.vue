<template>
    <div style="display: flex; flex-direction: column; gap: 1px;">
        <div
            v-for="page in pages" 
            :key="'page'+page.id"
            class="menu-page-partial-parent"
        >
            <div @click="$router.push({
                    name: 'render-object', 
                    params: { blockId: page.id }
                })" 
                style="font-weight: 500; font-size: 14px; min-height: 21px;"
            >
                {{ page.properties.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuPagesRenderPartial',
    props: {
        pages: Array
    }
}
</script>

<style scoped>
.menu-page-partial-parent {
    padding: 2px;
    margin-right: 8px;
}
.menu-page-partial-parent:hover{
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    cursor: pointer;
}
</style>