<template>
  <LoginLayout>
    <LoginForm />
  </LoginLayout>
</template>

<script>
import LoginLayout from '@/components/layout/LoginLayout.vue'
import LoginForm from '@/components/modules/auth/LoginForm.vue'

export default {
  name: 'LoginView',
  components: {
    LoginLayout,
    LoginForm
  }
}
</script>
