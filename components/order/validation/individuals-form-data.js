import * as yup from 'yup';

export const initialIndividualsFormData = {
  full_name: '',
  birth_date_and_place: '',
  residential_address: '',
  email: '',
  passport_file: undefined,
  utility_bill_file: undefined,
  bank_reference_letter_file: undefined
};

export const individualsFormSchema = yup.object().shape({
  full_name: yup.string().required('This field is a requred'),
  birth_date_and_place: yup.string().required('This field is a requred'),
  residential_address: yup.string().required('This field is a requred'),
  email: yup.string().required('This field is a requred'),
  passport_file: yup
    .mixed()
    .test(
      'fileSize',
      'File is too large',
      (value) => value && value.size <= 10000000
    )
    .required('This field is a required'),
  utility_bill_file: yup
    .mixed()
    .test(
      'fileSize',
      'File is too large',
      (value) => value && value.size <= 10000000
    )
    .required('This field is a required'),
  bank_reference_letter_file: yup
    .mixed()
    .test(
      'fileSize',
      'File is too large',
      (value) => value && value.size <= 10000000
    )
    .required('This field is a required')
});
