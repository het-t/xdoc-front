<template>
    <div>
        <form>

            <div class="mt8 setting-grid">
                <label for="field-create-for">user</label>
                <select v-model="ownerId" id="field-create-for">
                    <option v-for="user in users" :value=user.id :key="user.id">
                        {{ user.email }}
                    </option>
                </select>
            </div>

            <div class="mt8 setting-grid">
                <label for="field-create-name">field</label>
                <input v-model="fieldName" type="text" id="field-create-name">
            </div>

            <div class="mt8 setting-grid">
                <label for="field-create-type">type</label>
                <select v-model="fieldType" id="field-create-type">
                    <option v-for="fieldType in fieldTypes" :value="fieldType.id" :key="fieldType.id">
                        {{ fieldType.description }}
                    </option>
                </select>
            </div>

            <div class="mt8 setting-grid">
                <label for="field-create-description">Description</label>
                <textarea v-model="fieldDes" id="field-create-description" cols="30" rows="10"></textarea>
            </div>

            <div class="setting-grid mt16">
                <div></div>

                <div>
                    <button :disabled="disabled == true" @click.prevent="createField" class="button green">save</button>
                    <button :disabled="disabled == true" class="button neutral ml8">cancel</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { fields } from '@/api';

export default {
    name: 'FieldCreate',
    data() {
        return {
            fieldName: '',
            fieldType: '',
            fieldDes: '',

            ownerId: '',

            disabled: false
        }
    },
    computed: {
        users() {
            return this.$store.getters['users/getList']
        },
        fieldTypes() {
            return this.$store.getters['fields/getTypes']
        }
    },
    methods: {
        createField() {
            this.disabled = true
            
            const args = {
                fieldName: this.fieldName,
                fieldType: this.fieldType,
                fieldDes: this.fieldDes,
                ownerId: this.ownerId
            }

            fields.create(args)
            .then(() => {
                this.fieldName = ''
                this.fieldType = ''
                this.fieldDes = ''
                this.ownerId = ''

                this.$toast.success(`created '${args.fieldName}' field`)
                this.$store.dispatch('fields/getList', {
                    from: 0,
                    to: 100
                })
            })
            .catch((err) => {
                this.$toast.error(err)
            })
            .finally(() => this.disabled = false)
        },
    },
    created() {
        this.$store.dispatch('users/getList', {
            from: 0,
            to: 100
        })

        this.$store.dispatch('fields/getTypes')
    }
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