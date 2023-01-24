<template>
    <!-- <div class="w"> -->
        <table-main>
            <template #thead>
                <th>#</th>
                <th>Record</th>
                <th>User</th>
                <th></th>
            </template>

            <template #tbody>
                <tr v-for="(record) in records" :key="record.id">
                    <td>{{ record.id }}</td>
                    <td v-if="record != ''">
                        <template v-for="(value, field, index) in treatRecord(record.record)">
                            <p v-if="index < 3" :key="record.id+index">
                                {{ field }} :  {{ value }}
                            </p>
                        </template>

                        <p v-if="record.record != null && showMore(record.record) == true" class="more">...</p>
                    </td>
                    <td>{{ record.username }}</td>
                    <td>
                        <div class="flex">
                            <font-awesome-icon @click="edit(record.id)" icon="fa-solid fa-square-pen" class="fa-icon"></font-awesome-icon>
                            <font-awesome-icon icon="fa-solid fa-trash" class="fa-icon"></font-awesome-icon>
                        </div>
                    </td>
                </tr>
            </template>
        </table-main>
    <!-- </div> -->
</template>

<script>
import TableMain from './TableMain.vue'
import { records } from '@/api'
export default {
    components: { TableMain },
    name: 'UpcomingsC',
    data() {
        return {
            records: [],
        }
    },
    methods: {
        edit(recordId) {
            this.$store.dispatch('records/fetchBaseRecords', recordId)
            this.$router.push({name: 'records-create'})
        },
        treatRecord(recordObj) {
            const record = JSON.parse(JSON.stringify(recordObj))
            if (record == null) return {}

            return record
        },
        showMore(recordObj) {
            if (Object.keys(JSON.parse(JSON.stringify(recordObj)))?.length > 3) return true
            return false
        }
    },
    mounted() {
        records.get({
            from: 0,
            to: 100
        })
        .then(res => {
            this.records = res.data
        })
    }
}
</script>

<style scoped>
td {
    vertical-align: text-top;
}
table {
    height: fit-content;
}
</style>