import { useState, useEffect } from 'react';

import FieldsBlockWrapper from '../fields/fields-block-wrapper';
import TextField from '../fields/text-field';
import FileField from '../fields/file-field';
import { initialCompaniesFormData } from '../validation/companies-form-data';
import { companiesFormSchema } from '../validation/companies-form-data';

import cn from 'classnames';
import stylesUI from 'pages/order/order-ui.module.css';

function CompaniesForm(props) {
  const [formData, setFormData] = useState(initialCompaniesFormData);
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState([]);

  useEffect(() => {
    companiesFormSchema
      .validate(formData, { abortEarly: false })
      .then(() => setFormErrors({}))
      .catch((errors) => {
        const newFormErrors = errors.inner.reduce((acc, e) => {
          if (touchedFields.includes(e.path)) {
            return { ...acc, [e.path]: e.message };
          }
          return acc;
        }, {});
        setFormErrors(newFormErrors);
      });
  }, [touchedFields, formData]);

  const isFormValid = () => {
    return !Object.keys(formErrors).length;
  };

  const handleBlur = (fieldName) => {
    setTouchedFields([...touchedFields, fieldName]);
  };

  const handleChange = (newValue) => {
    setFormData({ ...formData, ...newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    companiesFormSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        console.log(formData);
      })
      .catch((errors) => {
        const newFormErrors = errors.inner.reduce((acc, e) => {
          touchedFields.push(e.path);
          return { ...acc, [e.path]: e.message };
        }, {});
        setFormErrors(newFormErrors);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={stylesUI.step3__form}>
      <FieldsBlockWrapper label={'Counterparty details'}>
        <div className={'row g-0'}>
          <TextField
            name={'registered_name'}
            placeholder={'Complete registered name'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name={'registration_no'}
            placeholder={'Registration No'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name={'incorporation_country'}
            placeholder={'Country of incorporation'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name={'registration_date'}
            placeholder={'Date of registration'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
        </div>
      </FieldsBlockWrapper>
      <FieldsBlockWrapper label={'Shareholders, Directors, Partners'}>
        <div className={'row g-0'}>
          <TextField
            name={'name_1'}
            placeholder={'Name Surname'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name={'name_2'}
            placeholder={'Name Surname'}
            required={false}
            onChange={handleChange}
          />
          <TextField
            name={'name_3'}
            placeholder={'Name Surname'}
            required={false}
            onChange={handleChange}
          />
          <TextField
            name={'name_4'}
            placeholder={'Name Surname'}
            required={false}
            onChange={handleChange}
          />
        </div>
      </FieldsBlockWrapper>
      <FieldsBlockWrapper label={'Contact Information'}>
        <div className={'row g-0'}>
          <TextField
            name={'email'}
            placeholder={'Your e-mail'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
        </div>
      </FieldsBlockWrapper>
      <FieldsBlockWrapper label={'Documents required'}>
        <div className={'row g-0'}>
          <FileField
            name={'memorandum_file'}
            label={'Memorandum & Articles of Association'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name={'incorporation_certificate_file'}
            label={'Certificate of Incorporation'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name={'trading_license_file'}
            label={'Trading License'}
            required={false}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name={'financial_statements_file'}
            label={'Audited Financial Statements (last 3 years)'}
            required={false}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name={'structure_chart_file'}
            label={'Corporation Structure Chart'}
            required={false}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name={'bank_reference_letter_file'}
            label={'Bank Reference Letter'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
        </div>
      </FieldsBlockWrapper>
      <div className={'row mt-5'}>
        <div className={'position-relative d-flex justify-content-center'}>
          <button
            type={'submit'}
            className={cn(stylesUI.btn, {
              [stylesUI.blue]: isFormValid(),
              [stylesUI.red]: !isFormValid()
            })}
          >
            Send KYC Documents
          </button>
          {!isFormValid() && (
            <div className={cn(stylesUI.errorSpan, stylesUI.above)}>
              {Object.keys(formErrors).length}
              {Object.keys(formErrors).length > 1
                ? ' fields were filled incorrect'
                : ' field was filled incorrect'}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default CompaniesForm;
