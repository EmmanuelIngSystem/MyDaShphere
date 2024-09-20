<template>
  <div class="container-forgot-password">
    <a :href="linkRecoveryPassword">{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  props: {
    linkRecoveryPassword: {
      type: String,
      default: '#'
    },
    text: String
  }
}
</script>
