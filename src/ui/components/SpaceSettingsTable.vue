<template>
    <div style="margin-top: -1px;">
        <div style="position: relative; display: grid; overflow-x: auto;">
            <table style="margin-top: 0px; table-layout: fixed; border-collapse: collapse; min-width: 100%;">
                <thead>
                    <tr>
                        <space-settings-table-header style="z-index: 4;">User</space-settings-table-header>
                        <space-settings-table-header>Group</space-settings-table-header>
                        <space-settings-table-header>Teamspace</space-settings-table-header>
                        <space-settings-table-header>Role</space-settings-table-header>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script setup>
import SpaceSettingsTableHeader from './SpaceSettingsTableHeader.vue';
</script>