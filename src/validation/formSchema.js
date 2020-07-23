import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(1,'Name must be at least one character')
    .required('Name is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least six characters')
    .required('Password is required'),
  tos: yup
    .boolean()
    // .isValid(true)
    .oneOf([true], 'You must agree to the terms of service')
    .required('You must click to accept the terms of service')
})

export default formSchema