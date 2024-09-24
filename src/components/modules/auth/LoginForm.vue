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
import axios from 'axios'
import InputField from '@/components/common/InputField.vue'
import MyButton from '@/components/common/MyButton.vue'
import ForgotPassword from '@/components/common/ForgotPassword.vue'
import NotAccountSignUp from '@/components/common/NotAccountSignUp.vue'

import FormError from '@/components/common/FormError.vue'

import { isLengthMinimumValid, isLengthMaximumValid } from '../../../validators/validations.ts'

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
      error: null,
      loading: false
    }
  },
  methods: {
    async handleLogin() {
      if (
        !isLengthMinimumValid(this.password, 8) ||
        !isLengthMaximumValid(this.password, 40) ||
        !isLengthMinimumValid(this.email, 8) ||
        !isLengthMaximumValid(this.email, 40)
      ) {
        this.error = 'Su correo o contraseña estan mal, porfavor intente de nuevo'
        return
      }
      // Lógica para enviar los datos de login (ej. llamada a la API)
      this.error = null
      this.loading = true
      try {
        // esa url "https://tu-api.com/login" es solo de ejemplo ahi debe colocarse la API de verdad ed LÑaravel
        const response = await axios.post('https://tu-api.com/login', {
          email: this.email,
          password: this.password
        })

        // Manejo de exito
        console.log('Login exitoso', response.data)
      } catch (error) {
        // Manejo de errores
        console.log(error)
        this.error = error.response?.data?.message || 'Error al iniciar sesión'
      } finally {
        this.loading = false
      }
    },
    clearError() {
      this.error = null
    }
  }
}
</script>
