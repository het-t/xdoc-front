<template>
    <div>
        <HeaderC></HeaderC>
        <router-view class="pr12 pl12 mt32 w"></router-view>
    </div>
</template>

<script>
import HeaderC from '../components/HeaderC.vue'
export default {
    components: {
        HeaderC
    }
}
</script>

<style>
    .w {
        width: 100vw;
    }
</style>