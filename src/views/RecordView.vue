<template>
  <div id="records-view" style="width: calc(100vw - 300px);" class="flex">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'RecordView',
    created() {
      this.$store.dispatch('fields/getList', {from:0, to:100})
    }
}
</script>