export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Este campo es requerido."
  if (!re.test(email)) return 'Por favor ingresa un email válido'
  return ''
}