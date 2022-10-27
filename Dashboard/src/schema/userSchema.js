const yup = require('yup')
const { email, mobile, password } = require('./regexp')

const createUserSchema = yup.object().shape({
  name: yup.string().required('Name is Required!'),
  email: yup
    .string()
    .matches(email, 'Invalid Email Address!')
    .required('Email is Required!'),
  mobile: yup
    .string()
    .matches(mobile, 'Invalid Mobile Number!')
    .required('Mobile Number is Required!'),
  password: yup
    .string()
    .matches(password, 'Invalid Password!')
    .required('Password Is Required!'),
})

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(email, 'Invalid Email!')
    .required('Email is Required!'),
  password: yup
    .string()
    .matches(password, 'Invalid Password!')
    .required('Password Is Required!'),
  remember: yup.boolean(),
  // .required('The terms and conditions must be accepted.')
  // .oneOf([true], 'The terms and conditions must be accepted.'),
})

const updateUserSchema = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().optional().matches(email, 'Invalid Email Address!'),
  mobile: yup.string().optional().matches(mobile, 'Invalid Mobile Number!'),
  password: yup.string().optional().matches(password, 'Invalid Password!'),
})

// const userRolesSehema = yup.object().shape({
//   roles: yup
//     .array()
//     .typeError('Roles must be array')
//     .of(yup.mixed().oneOf(user.role)),
// })

module.exports = {
  createUserSchema,
  loginSchema,
  updateUserSchema,
}
