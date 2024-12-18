export function passwordValidator(password) {
  if (!password) return "Este campo es requerido."
  if (password.length < 8) return 'La contraseña debe tener al menos 8 caracteres.'
  return ''
}
