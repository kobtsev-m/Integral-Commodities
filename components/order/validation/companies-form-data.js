import * as yup from 'yup';

export const initialCompaniesFormData = {
  registered_name: '',
  registration_no: '',
  incorporation_country: '',
  registration_date: '',
  name_1: '',
  name_2: '',
  name_3: '',
  name_4: '',
  email: '',
  memorandum_file: undefined,
  incorporation_certificate_file: undefined,
  trading_license_file: undefined,
  financial_statements_file: undefined,
  structure_chart_file: undefined,
  bank_reference_letter_file: undefined
};

export const companiesFormSchema = yup.object().shape({
  registered_name: yup.string().required('This field is a requred'),
  registration_no: yup.string().required('This field is a requred'),
  incorporation_country: yup.string().required('This field is a requred'),
  registration_date: yup.string().required('This field is a requred'),
  name_1: yup.string().required('This field is a requred'),
  email: yup.string().required('This field is a requred'),
  memorandum_file: yup
    .mixed()
    .test('fileSize', 'File is too large', (value) => {
      if (!value) return true;
      return value?.size <= 10000000;
    }),
  incorporation_certificate_file: yup
    .mixed()
    .test('fileSize', 'File is too large', (value) => {
      if (!value) return true;
      return value?.size <= 10000000;
    }),
  trading_license_file: yup
    .mixed()
    .test('fileSize', 'File is too large', (value) => {
      if (!value) return true;
      return value?.size <= 10000000;
    }),
  financial_statements_file: yup
    .mixed()
    .test('fileSize', 'File is too large', (value) => {
      if (!value) return true;
      return value?.size <= 10000000;
    }),
  structure_chart_file: yup
    .mixed()
    .test('fileSize', 'File is too large', (value) => {
      if (!value) return true;
      return value?.size <= 10000000;
    }),
  bank_reference_letter_file: yup
    .mixed()
    .test('fileSize', 'File is too large', (value) => {
      if (!value) return true;
      return value?.size <= 10000000;
    }),
});
