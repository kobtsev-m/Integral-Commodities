import * as yup from 'yup';

export const formSchema = yup.object().shape({
  product_id: yup.number().required('Product is a requred field'),
  contacts: yup.object().shape({
    email: yup
      .string()
      .email('Incorrect email format')
      .required('Email is a required field')
  })
});
