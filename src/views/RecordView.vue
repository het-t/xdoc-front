<template>
  <div id="records-view" style="width: 100%;" class="flex pr16 pl16">
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