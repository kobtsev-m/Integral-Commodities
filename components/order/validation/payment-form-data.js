import * as yup from 'yup';

export const paymentMethods = [
  'Prepayment',
  'Letter of credit',
  'Bank guarantee',
  'Online payment',
  'Deferred payment'
];

export const paymentFormSchema = {
  [paymentMethods[0]]: yup.object().shape({
    payment_files: yup
      .mixed()
      .test(
        'fileSize',
        'File is too large',
        (value) => value && value.size <= 10000000
      )
      .required('This field is a required'),
    email: yup.string().required('This field is a requred')
  }),
  [paymentMethods[4]]: yup.object().shape({
    payment_files: yup
      .mixed()
      .test(
        'fileSize',
        'File is too large',
        (value) => value && value.size <= 10000000
      )
      .required('This field is a required'),
    email: yup.string().required('This field is a requred')
  }),
  [paymentMethods[1]]: yup.object().shape({
    bank_name: yup.string().required('This field is a requred'),
    bank_address: yup.string().required('This field is a requred'),
    bank_swift: yup.string().required('This field is a requred'),
    email: yup.string().required('This field is a requred')
  }),
  [paymentMethods[2]]: yup.object().shape({
    bank_name: yup.string().required('This field is a requred'),
    bank_address: yup.string().required('This field is a requred'),
    bank_swift: yup.string().required('This field is a requred'),
    email: yup.string().required('This field is a requred')
  })
};
