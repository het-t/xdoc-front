<template>
    <div>
        <table>
            <!--allow use to add new fields in view-->
            <thead>
                <tr>
                    <th>#</th>
                    <th>Patient</th>
                    <th>Age</th>
                    <!-- <th></th>
                    <th></th> -->
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>19</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>19</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>19</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'UpcomingsC'
}
</script>

<style scoped>
    th, td {
        border: solid 1px #e9e9e7;
        padding: 12px;
    }
    table {
        border-top: solid 1px #e9e9e7;
        border-bottom: solid 1px #e9e9e7;
        border-collapse: collapse;
    }
    tr > td:first-child,
    tr > th:first-child {
        border-left: none;
    }
    tr > td:last-child,
    tr > th:last-child {
        border-right: none;
    }
</style>