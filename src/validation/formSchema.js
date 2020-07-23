import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(1,'Name must be at least one character')
    .max(50, 'Too many characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .max(50, 'Too many characters')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least six characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_\-\(\)\?])(?=.{8,})/, 'Your password isn\'t strong enough yet')
    .max(50, 'Are you really going to remember that password?')
    .required('Password is required'),
  tos: yup
    .boolean()
    // .isValid(true)
    .oneOf([true], 'You must agree to the terms of service')
    .required('You must click to accept the terms of service')
})

export default formSchema