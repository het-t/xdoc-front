<template>
    <div>
        <div class="mt8 setting-grid">
            <label for="field-create-name">field</label>
            <input v-model="fieldName" type="text" id="field-create-name">
        </div>

        <div class="mt8 setting-grid">
            <label for="field-create-type">type</label>
            <select v-model="fieldType" name="" id="field-create-type">
                <option value="1">small text</option>
                <option value="2">medium text</option>
                <option value="3">huge text</option>
                <option value="4">date</option>
                <option value="5">number</option>
            </select>
        </div>

        <button :disabled="disabled == true" @click.prevent="createField" class="button green mt16">save</button>
        <button :disabled="disabled == true" class="button neutral mt16 ml8">cancel</button>
    </div>
</template>

<script>
import { fields } from '@/api';
import useCreateSwal from '@/helpers/swalCreate';

export default {
    name: 'FieldCreate',
    data() {
        return {
            fieldName: '',
            fieldType: '',

            disabled: false
        }
    },
    methods: {
        createField() {
            this.disabled = true
            
            const args = {
                fieldName: this.fieldName,
                fieldType: this.fieldType
            }

            this.fieldName = ''
            this.fieldType = ''

            useCreateSwal({
                text: `"${args.fieldName}" field`,
                mutationFnName: 'fields/refetch',
                mutationArgs: {},
                promise: fields.create(args),
                context: this
            })

        }
    },
}
</script>

<style>
  label {
    width: 200px !important;
  }  
  button {
    min-width: 56px;
  }
</style>