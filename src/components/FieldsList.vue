<template>
    <table-main 
        :showSideMenu=showSideMenu
        :sideMenuForEntity="{'type': 'field', 'id': menu.meta.id}" 
        @sideMenuHide="showSideMenu = false" 
    >
        <template #thead>       
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
        </template>

        <template #tbody>
            <tr @click.right.prevent="openMenu($event, this,{id: field.id, fieldName: field.name})" v-for="(field, index) in fields" :class="menu.meta.id == field.id ? 'tr-right-clicked' : ''" :key="field.id" class="cursor-ptr">
                <td>{{ index + 1 }}</td>
                <td>{{ field.name }}</td>
                <td>{{ field.typeDes }}</td>
                <td>{{ field.description }}</td>
            </tr>

            <BaseMenu @click-outside="closeMenu(this, {id: '', fieldName: ''}) " v-if="menu.visibility == true" :posX="menu.posX" :posY="menu.posY">
                <template v-slot:menu-actions>
                    <div @click.prevent="showSideMenu = true; closeMenu(this)" class="menu-action">
                        <div class="action-parent mrl6">
                            <font-awesome-icon :icon="['far', 'pen-to-square']" class="action-pic"></font-awesome-icon>
                        </div>
                        <div class="mrl6">
                            Edit
                        </div>
                    </div>
                    <div @click="del(menu.meta.id, menu.meta.fieldName)" class="menu-action">
                        <div class="action-parent mrl6">
                            <font-awesome-icon :icon="['far', 'trash-can']" class="action-pic"></font-awesome-icon>
                        </div>
                        <div class="mrl6">
                            Delete
                        </div>
                    </div>
                </template>
            </BaseMenu>
        </template>

        <template v-slot:side-menu-title>Edit Field</template>
        <template v-slot:side-menu-options>
            <div class="option">
                <div class="icon">
                    <font-awesome-icon :icon="['far', 'eye-slash']"></font-awesome-icon>
                </div>
                <span>Display</span>
            </div>

            <div class="option red">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'universal-access']"></font-awesome-icon>
                </div>
                <span>Restrict</span>
            </div>

            <div class="option red">
                <div class="icon">
                    <font-awesome-icon :icon="['far', 'trash-can']"></font-awesome-icon>
                </div>
                <span>Delete</span>
            </div>
        </template>
    </table-main>
</template>

<script>
import { fields } from '@/api'
import useDeleteSwal from '@/helpers/swalDelete'
import TableMain from './TableMain.vue'
import BaseMenu from './BaseMenu.vue'

export default {
    components: { TableMain, BaseMenu },
    name: 'FieldsList',
    data() {
        return {
            menu: {
                visibility: false,
                posY: '',
                posX: '',
                meta: {
                    id: '',
                }
            },
            showSideMenu: false,
        }
    },
    computed: {
        fields() {
            return this.$store.getters['fields/getList']({
                from: 0,
                to: 100
            })
        }
    },
    methods: {
        del(fieldId, fieldName) {
            useDeleteSwal({
                text: fieldName,
                mutationFn: 'fields/getList',
                promise: () => fields.delete({fieldId}),
                context: this
            })
        }
    },
    created() {
        this.$store.dispatch('fields/getList', {from:0, to:100})
    }
}

// function fieldEditVisbility(id, visibility) {
//     fields.edit({
//         id,
//         visibility
//     })
// }
</script>