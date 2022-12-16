<template>
  <div class="flex">
    <router-view></router-view>
    <!-- <record-create class="flex-items pt12 pr12 pb12 pl12"></record-create>
    <record-create class="flex-items pt12 pr12 pb12 pl12"></record-create> -->
  </div>
</template>

<script>
import RecordCreate from '../components/RecordCreate.vue'
export default {
  components: { RecordCreate },
    name: 'RecordView'
}
</script>

<style scoped>
  input {
    width: 50% !important;
  }
  .flex {
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  .flex-items {
    min-width: calc(50% - 6px);
    max-width: 50%;
    border: solid 1px #e9e9e7;
  }
</style>