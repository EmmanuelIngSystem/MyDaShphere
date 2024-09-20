<template>
  <form @submit.prevent="handleLogin">
    <InputField
      label="Correo"
      type="email"
      icon="fa-envelope"
      v-model="email"
      placeholder="Introduce tu correo"
    />
    <InputField
      label="Contraseña"
      type="password"
      icon="fa-lock"
      v-model="password"
      placeholder="Introduce tu contraseña"
    />
    <FormError v-if="error" :message="error" />
    <MyButton type="submit">Iniciar sesion</MyButton>
    <ForgotPassword
      linkRecoveryPassword="http://localhost:5173/"
      text="¿Has olvidado tu contraseña?"
    >
    </ForgotPassword>
    <NotAccountSignUp
      paragraphText="¿No tienes una cuenta?"
      linkSignUp="http://localhost:5173/"
      text="Regístrate"
    >
    </NotAccountSignUp>
  </form>
</template>

<script>
import InputField from '@/components/common/InputField.vue'
import MyButton from '@/components/common/MyButton.vue'
import ForgotPassword from '@/components/common/ForgotPassword.vue'
import NotAccountSignUp from '@/components/common/NotAccountSignUp.vue'

import FormError from '@/components/common/FormError.vue'

export default {
  name: 'LoginForm',
  components: {
    InputField,
    MyButton,
    ForgotPassword,
    NotAccountSignUp,
    FormError
  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    handleLogin() {
      if (!this.email || !this.password) {
        this.error = 'Todos los campos son obligatorios'
        return
      }
      // Lógica para enviar los datos de login (ej. llamada a la API)
    }
  }
}
</script>
