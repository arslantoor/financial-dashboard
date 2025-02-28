// validateForm.js
export const validateForm = (formData) => {
  const errors = {}

  if (!formData.name.trim()) errors.name = 'Name is required'
  if (!formData.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid'
  }
  if (!formData.userName.trim()) errors.userName = 'User Name is required'
  if (formData.password && formData.password.length < 6) errors.password = 'Password must be at least 6 characters'

  return errors
}
