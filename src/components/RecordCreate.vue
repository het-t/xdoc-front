<template>
  <div class="flex pr16 pl16" :key="key" style="width: 100%; height: 100%; overflow-y: auto;">
    <form @submit.prevent="saveRecord()" ref="record" class="overflow-scroll pr8" :class="getRootRecordId == '' ? 'new-record' : ''">
      <div v-for="field in fields" :key="field.id" class="grid mt8">
        <label :for="field.id" class="floating-label">
          {{ field.name }}
        </label>

        <input v-if="field.typeId == 1 || field.typeId == 4 || field.typeId == 5" :type="field.meta.type" :id="field.id" :name="field.id" :title="field.description" class="floating-input">
        <textarea v-else-if="field.typeId == 3" :name="field.id" :id="field.id" :title="field.description" cols="30" rows="15"></textarea>
      </div>

      <div class="grid mt16">
        <div></div>

        <div>
          <button :disabled="disable" type="submit" class="button green">save</button>
          <button :disabled="disable" class="button neutral ml8">cancel</button>
        </div>
      </div>
    </form>

    <div v-if="getRootRecordId !== ''" class="pr8 overflow-scroll flex-upcomings">
      <record-render v-for="(baseRecord) of getBaseRecordsIds(getRootRecordId)" :recordId="baseRecord.id" :key="baseRecord.id"></record-render>
    </div>
  </div>
</template>

<script>
import { records } from '@/api'
import { mapGetters } from 'vuex'
import RecordRender from './RecordRender.vue'
export default {
  components: { RecordRender },
  name: 'RecordCreate',
  data() {
    return {
      disable: false,
      key: 0
    }
  },
  computed: {
    fields() {
      return this.$store.getters['fields/getList']({
        from: 0,
        to: 100
      })
    },
    ...mapGetters('records', [
      'getRootRecordId',
      'getBaseRecordsIds'
    ])
  },
  methods: {
    saveRecord() {
      this.disable = true

      var form = this.$refs['record']
      form = new FormData(form)
      form = JSON.stringify(Object.fromEntries(form.entries()))
      const formJson = JSON.parse(form)

      records.create({
        record: JSON.stringify(formJson),
        rootRecordId: this.getRootRecordId,
        parentRecordId: this.getRootRecordId
      })
      .then((res) => {
        this.$toast.success(`created record #${res.data.recordId}`)

        if (this.getRootRecordId) {
          this.$router.push({name: 'records-upcomings'})
        }
        else {
          this.$store.commit('records/setRootRecordId', '')
          this.$store.commit('records/setBaseRecords', {
            rootRecordId: this.getRootRecordId,
            records: []
          })
          this.key = !this.key
        }
      })
      .catch(() => {
        this.$toast.error("Oops, Error occured during action...")
      })
      .finally(() => this.disable = false)
    }
  }
}
</script>

<style scoped>

@import url('../assets/forms.css');

.grid {
  display: grid;
  grid-template-columns: 150px minmax(300px, 100%);
}

.flex {
  display: flex;
  flex-wrap: wrap-reverse;
  column-gap: 16px;
  row-gap: 32px;
  justify-content: space-around;
}
.overflow-scroll {
  flex-grow: 1;
  overflow-y: scroll;
  max-height: calc(100vh - 70px);
}
.flex-upcomings {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.new-record {
  display: flex;
  flex-direction: column;
}
.new-record input,
.new-record textarea,
.new-record select {
  max-width: 50%;
  min-width: 300px;
}
</style>