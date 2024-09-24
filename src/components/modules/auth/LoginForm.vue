<template>
  <LoaderDots :isLoading="loading" />
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
import LoaderDots from '@/components/common/LoaderDots.vue'
import InputField from '@/components/common/InputField.vue'
import MyButton from '@/components/common/MyButton.vue'
import ForgotPassword from '@/components/common/ForgotPassword.vue'
import NotAccountSignUp from '@/components/common/NotAccountSignUp.vue'

import FormError from '@/components/common/FormError.vue'

import { isLengthMinimumValid, isLengthMaximumValid } from '../../../validators/validations.ts'

export default {
  name: 'LoginForm',
  components: {
    LoaderDots,
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
      try {
        console.log(`valor de loading al entrar al metodo handleLogin: ${this.loading}`)

        this.error = null
        this.loading = true
        // await this.$nextTick()
        console.log(`valor de loading despues de setearlo a true: ${this.loading}`)

        // Esperar a que Vue procese el cambio en `loading`
        await this.$nextTick()

        if (
          !isLengthMinimumValid(this.password, 8) ||
          !isLengthMaximumValid(this.password, 40) ||
          !isLengthMinimumValid(this.email, 8) ||
          !isLengthMaximumValid(this.email, 40)
        ) {
          // Usar un pequeño retardo antes de ocultar el loader
          setTimeout(() => {
            this.loading = false
            this.error = 'Su correo o contraseña están mal, por favor intente de nuevo'
          }, 1000) // Retardo de 1000ms
        }

        // ejemplo de peticion correcta por get que devuelvo todos los paises en formato XML
        const response = await axios.get('http://api.geonames.org/countryInfo', {
          params: {
            username: 'emanuel_le_dcn'
          }
        })
        /*
        const response = await axios.post(
          'http://api.geonames.org/countryInfo?username=emanuel_le_dcn',
          {
            email: this.email,
            password: this.password
          }
        )
          */

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
