<template>
  <div v-if="message" class="form-error">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'FormError',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.form-error {
  color: red;
  background-color: #ffe5e5;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
}

.form-error p {
  margin: 0;
}
</style>
