<template>
  <div class="w">
    <div>pic</div>
    <div>username</div> <!-- give option to edit it-->
    <div>email</div> <!-- give option to edit it-->
    <div>password</div> <!--chagne password component-->
    <div>users</div> <!--create new remove users-->
    <div>fields</div> <!--fields setting add or remove -->
  </div>
</template>

<script>
export default {
    name: 'TheSetting'
}
</script>

<style scoped>
    .w {
        min-width: 300px;
        max-width: 50%;
        min-height: 100vh;
        margin: auto;
        margin-top: 32px;
        background-color: whitesmoke;
    }
</style>