import * as yup from 'yup';

export const formSchema = yup.object().shape({
  quantity: yup
    .number()
    .typeError('Quantity is a required field')
    .min(1, 'Min value is 1')
    .max(1000, 'Max value is 1000'),
  contacts: yup.object().shape({
    email: yup
      .string()
      .email('Incorrect email format')
      .required('Email is a required field')
  })
});
