import { useState, useEffect } from 'react';

import FieldsBlockWrapper from '../fields/fields-block-wrapper';
import TextField from '../fields/text-field';
import FileField from '../fields/file-field';
import { initialIndividualsFormData } from '../validation/individuals-form-data';
import { individualsFormSchema } from '../validation/individuals-form-data';

import cn from 'classnames';
import stylesUI from 'pages/order/order-ui.module.css';

function IndividualsForm(props) {
  const [formData, setFormData] = useState(initialIndividualsFormData);
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState([]);

  useEffect(() => {
    individualsFormSchema
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
    individualsFormSchema
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
            name={'full_name'}
            placeholder={'Name Surname'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name={'birth_date_and_place'}
            placeholder={'Date & Place of birth'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name={'residential_address'}
            placeholder={'Residential address'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
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
            name={'passport_file'}
            label={'Passport or another document confirming the identity'}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name={'utility_bill_file'}
            label={
              'Utility bill indicating the address (dated within the last 3 months)'
            }
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name={'bank_reference_letter_file'}
            label={'Bank reference letter (dated within the last 3 months)'}
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

export default IndividualsForm;
