<template>
  <div class="flex">
    <form @submit.prevent="saveRecord()" ref="record" style="padding-right: 50px;" class="overflow-scroll">
      <div v-for="field in fields" :key="field.id" class="grid mt8">
        <label :for="field.id" class="floating-label">
          {{ field.name }}
        </label>

        <input v-if="field.typeId == 1" type="text" :id="field.id" :name="field.name" class="floating-input">
        <textarea v-else-if="field.typeId == 2" :name="field.name" :id="field.name" cols="30" rows="5"></textarea>
        <textarea v-else-if="field.typeId == 3" :name="field.name" :id="field.name" cols="30" rows="15"></textarea>
      </div>

      <button type="submit" class="button green mt8">save</button>
      <button class="button neutral mt8 ml8">cancel</button>
    </form>

    <div v-if=" getBaseRecords(getRootRecordId) !== undefined " class="mr8 overflow-scroll" style="padding: 0 50px;">
      <div v-for="(recordObj, index) of JSON.parse(getBaseRecords(getRootRecordId))" :key="index">
        {{ `#${recordObj.id}` }} {{ recordObj.username }}
        <div v-for='(fieldValue, fieldName) in recordObj.record' :key="fieldName+'_'+index" class="grid mt8">
          <label>
            {{ fieldName }}
          </label>

          <input disabled type="text" :value="fieldValue">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { records } from '@/api'
import { mapGetters } from 'vuex'
export default {
  name: 'RecordCreate',
  computed: {
    fields() {
      return this.$store.getters['fields/getList']({
        from: 0,
        to: 100
      })
    },
    ...mapGetters('records', [
      'getRootRecordId',
      'getBaseRecords'
    ])
  },
  methods: {
    saveRecord() {
      var form = this.$refs['record']
      form = new FormData(form)
      form = JSON.stringify(Object.fromEntries(form.entries()))
      const formJson = JSON.parse(form)

      records.create({
        record: JSON.stringify(formJson)
      })
      .then((res) => {
        console.log(res.data[0].createdRecordId, "created arecord id")
      })
    }
  }
}
</script>

<style scoped>

@import url('../assets/forms.css');

.grid {
  display: grid;
  grid-template-columns: minmax(150px, 25%) minmax(300px, 100%);
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
form {
  overflow-y: auto;
}
</style>