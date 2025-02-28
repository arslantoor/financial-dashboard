/**
 * Form fields configuration for the profile form.
 */
export const formFields = [
  { name: 'name', label: 'Your Name', placeholder: 'Enter your name', type: 'text', component: 'input', required: true, ariaLabel: 'Name' },
  { name: 'userName', label: 'User Name', placeholder: 'Enter username', type: 'text', component: 'input', required: true, ariaLabel: 'User Name' },
  { name: 'email', label: 'Email', placeholder: 'Enter email', type: 'email', component: 'input', required: true, ariaLabel: 'Email' },
  { name: 'password', label: 'Password', placeholder: '••••••••••', type: 'password', component: 'input', required: true, ariaLabel: 'Password' },
  { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', component: 'date', required: true, ariaLabel: 'Date of Birth' },
  { name: 'presentAddress', label: 'Present Address', placeholder: 'San Jose, California, USA', type: 'text', component: 'input', required: true, ariaLabel: 'Present Address' },
  { name: 'permanentAddress', label: 'Permanent Address', placeholder: 'San Jose, California, USA', type: 'text', component: 'input', ariaLabel: 'Permanent Address' },
  { name: 'city', label: 'City', placeholder: 'San Jose', type: 'text', component: 'input', required: true, ariaLabel: 'City' },
  { name: 'postalCode', label: 'Postal Code', placeholder: '45962', type: 'text', component: 'input', ariaLabel: 'Postal Code' },
  { name: 'country', label: 'Country', placeholder: 'USA', type: 'text', component: 'input', required: true, ariaLabel: 'Country' },
]
