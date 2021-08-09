import { useState, useEffect } from 'react';

import FieldsBlockWrapper from '../fields/fields-block-wrapper';
import TextField from '../fields/text-field';
import FileField from '../fields/file-field';
import { initialIndividualsFormData } from '../validation/individuals-form-data';
import { individualsFormSchema } from '../validation/individuals-form-data';
import useTranslation from 'next-translate/useTranslation';

import cn from 'classnames';
import stylesUI from 'pages/order/order-ui.module.css';

function IndividualsForm() {
  const [formData, setFormData] = useState(initialIndividualsFormData);
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState([]);

  const { t } = useTranslation();

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
      <FieldsBlockWrapper label={t('order:step3.counterparty details')}>
        <div className='row g-0'>
          <TextField
            name='full_name'
            placeholder={t('order:step3.name surname')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name='birth_date_and_place'
            placeholder={t('order:step3.name surname')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name='residential_address'
            placeholder={t('order:step3.name surname')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name='email'
            placeholder={t('order:step3.email')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
        </div>
      </FieldsBlockWrapper>
      <FieldsBlockWrapper label={t('order:step3.documents required')}>
        <div className='row g-0'>
          <FileField
            name='passport_file'
            label={t('order:step3.passport')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name='utility_bill_file'
            label={t('order:step3.utility bill')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name='bank_reference_letter_file'
            label={t('order:step3.bank reference dated')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
        </div>
      </FieldsBlockWrapper>
      <div className='row mt-5'>
        <div className='position-relative d-flex justify-content-center'>
          <button
            type='submit'
            className={cn(stylesUI.btn, {
              [stylesUI.blue]: isFormValid(),
              [stylesUI.red]: !isFormValid()
            })}
          >
            {t('order:step3.submit button')}
          </button>
          {!isFormValid() && (
            <div className={cn(stylesUI.errorSpan, stylesUI.above)}>
              {t('order:step3.incorrect fields')}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default IndividualsForm;
