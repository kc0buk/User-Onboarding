import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(1,"Name must be at least one character")
    .required("Name is required"),
//   username: yup
//     .string()
//     .min(3, "Username must be at least 3 characters")
//     .required("Username is Required"),
//   role: yup
//     .string()
//     .oneOf(['tl', 'instructor', 'alumni', 'student'], "Role is required"),
//   civil: yup
//     .string()
//     .oneOf(['married', 'single'], "Civil status is required")
})

export default formSchema