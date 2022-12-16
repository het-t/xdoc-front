<template>
  <div>
    <h2>Record</h2>
    <form>
      <label class="floating-label" for="1">age</label>
      <input class="floating-input" type="text" id="1">
    </form>
  </div>
</template>

<script>
export default {
  name: 'RecordCreate',
}
</script>

<style scoped>

@import url('../assets/forms.css');
/* @import url('../assets/floating.css'); */

form {
  grid-template-columns: minmax(150px, 25%) minmax(300px, 100%);
}
/* .floating-label{
  position: relative;
  top: 28px;
} */
/* .floating-container :focus ~ .floating-label,
.floating-container :not(:focus):valid ~ .floating-label {
    font-size: 12px;
    bottom: 40px;
    opacity: 0.5;
    transition: 0.2s ease all;
} */
</style>