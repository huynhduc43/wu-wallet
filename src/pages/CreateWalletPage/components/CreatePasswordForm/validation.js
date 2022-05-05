import * as yup from 'yup'

const schema = yup.object().shape({
  password: yup
    .string()
    .required('Required')
    .test(
      'len',
      'Password must be 8 or more characters',
      (val) => val.length >= 8,
    ),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export default schema
