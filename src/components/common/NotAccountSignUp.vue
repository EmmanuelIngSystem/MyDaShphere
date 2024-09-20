<template>
  <div class="container-not-account-sign-up">
    <p>
      {{ paragraphText }} <a href="linkSignUp">{{ text }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'NotAccountSignUp',
  props: {
    linkSignUp: {
      type: String,
      default: '#'
    },
    text: String,
    paragraphText: String
  }
}
</script>
