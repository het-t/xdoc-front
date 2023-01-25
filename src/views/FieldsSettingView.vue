<template>
    <div class="flex-setting">
        <div style="width: 40%; margin-top: 36px;">
            <fields-create></fields-create>
        </div>

        <fields-list class="setting-list"></fields-list>
    </div>
</template>

<script>
import FieldsCreate from '../components/FieldsCreate.vue'
import FieldsList from '../components/FieldsList.vue'

export default {
    components: { FieldsList, FieldsCreate },
    name: 'FieldsSettingView',
}
</script>

<style scoped>
    .flex-setting {
        min-width: 600px;
        width: 100%;
        display: flex;
        gap: 16px;
        flex-direction: column;
    }
</style>