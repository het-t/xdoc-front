<template>
    <div>
        <div class="record-meta">
            {{ id }}
            {{ createdAt }}
            {{ editedAt }}
            {{ userId }}
        </div>

        <div v-for="(field, index) in data" :key="index" class="grid mt8">
            <label :for="field.name">
                {{ field.name }}
            </label>

            <input v-if="field.id == 1 || field.id == 4 || field.id == 5" :value="field.value" :type="field.meta.type" disabled>
            <textarea v-else-if="field.id == 3" :value="field.value" id="" cols="30" rows="15" disabled></textarea>
        </div>
    </div>
</template>

<script>
import { records } from '@/api';

export default {
    name: 'RecordRender',
    props: [
        'recordId'
    ],
    data() {
        return {
            data: '',
            id: '',
            createdAt: '',
            editedAt: '',
            userId: ''
        }
    },
    mounted() {
        records.getIndividual({
            recordId: this.recordId
        })
        .then(res => {
            this.createdAt = res.data[0]?.createdAt
            this.editedAt = res.data[0]?.editedAt
            this.userId = res.data[0]?.userId
            this.id = res.data[0]?.id

            if (res.data?.[0]?.record) this.data = JSON.parse(res.data[0].record)
        })
    }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 150px minmax(300px, 100%);
}
</style>