<template>
    <table-main>
        <template #thead>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th></th>
        </template>

        <template #tbody>
            <tr v-for="(field, index) in fields" :key="field.id">
                <td>{{ index + 1 }}</td>
                <td>{{ field.name }}</td>
                <td>{{ field.type }}</td>
                <td>
                    <div class="flex">
                        <font-awesome-icon icon="fa-solid fa-square-pen" class="fa-icon"></font-awesome-icon>
                        <font-awesome-icon icon="fa-solid fa-trash" class="fa-icon"></font-awesome-icon>
                    </div>
                </td>
            </tr>
        </template>
    </table-main>
</template>

<script>
import TableMain from './TableMain.vue'
export default {
  components: { TableMain },
    name: 'FieldsList',
    computed: {
        fields() {
            return this.$store.getters['fields/getList']({
                from: 0,
                to: 100
            })
        }
    },
    created() {
        this.$store.dispatch('fields/getList', {from:0, to:100})
    }
}
</script>