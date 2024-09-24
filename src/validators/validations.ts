import { commonPasswords } from '../helpers/commonPassword'

export const isLengthMinimumValid = (field: string, minLength: number): boolean => {
  return field.length >= minLength
}

export const isLengthMaximumValid = (field: string, maxLength: number): boolean => {
  return field.length <= maxLength
}

export const hasMinimumUppercase = (field: string, minUppercase: number): boolean => {
  const uppercaseCount = (field.match(/[A-Z]/g) || []).length
  return uppercaseCount >= minUppercase
}

export const hasMinimumLowercase = (field: string, minLowercase: number): boolean => {
  const lowercaseCount = (field.match(/[a-z]/g) || []).length
  return lowercaseCount >= minLowercase
}

export const hasMinimumDigits = (field: string, minDigits: number): boolean => {
  const digitCount = (field.match(/[0-9]/g) || []).length
  return digitCount >= minDigits
}

export const hasMinimumSpecialCharacters = (field: string, minSpecial: number): boolean => {
  const specialCount = (field.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length
  return specialCount >= minSpecial
}

export const isPasswordCompromised = (password: string): boolean => {
  return commonPasswords.includes(password)
}

export const isEmailFormatValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/*

// Para el registro
if (isPasswordCompromised(this.password)) {
  // Passw0rd
  console.log('No uses contraseñas comunes, porfavor introduce otra mas segura')
  return
}

// Para el login y registro 
if (!isLengthMinimumValid(this.password, 8)) {
  console.log('La contraseña debe tener al menos 8 caracteres.')
  return
}

// Para el login y registro
if (!isLengthMaximumValid(this.password, 40)) {
  console.log('La contraseña no debe exceder 40 letras.')
  return
}

// Para el registro
if (!hasMinimumUppercase(this.password, 2)) {
  console.log('La contraseña debe tener al menos 2 letras mayusculas')
  return
}

// Para el registro
if (!hasMinimumLowercase(this.password, 2)) {
  console.log('La contraseña debe tener al menos 2 letras minusculas')
  return
}

// Para el registro
if (!hasMinimumDigits(this.password, 2)) {
  console.log('La contraseña debe tener al menos 2 digitos')
  return
}

// Para el registro
if (!hasMinimumSpecialCharacters(this.password, 1)) {
  console.log('La contraseña debe tener al menos 1 caracter especial')
  return
}

// Para el registro
if (!isEmailFormatValid(this.email)) {
  console.log('Formato invalido del correo')
  return
}

*/
