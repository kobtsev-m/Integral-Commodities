import { useState, useEffect } from 'react';

import FieldsBlockWrapper from '../fields/fields-block-wrapper';
import TextField from '../fields/text-field';
import FileField from '../fields/file-field';
import { initialCompaniesFormData } from '../validation/companies-form-data';
import { companiesFormSchema } from '../validation/companies-form-data';
import useTranslation from 'next-translate/useTranslation';

import cn from 'classnames';
import stylesUI from 'pages/order/order-ui.module.css';

function CompaniesForm() {
  const [formData, setFormData] = useState(initialCompaniesFormData);
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState([]);

  const { t } = useTranslation();

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
      <FieldsBlockWrapper label={t('order:step3.counterparty details')}>
        <div className='row g-0'>
          <TextField
            name='registered_name'
            placeholder={t('order:step3.registered name')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name='registration_no'
            placeholder={t('order:step3.registration no')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name='incorporation_country'
            placeholder={t('order:step3.country of incorporation')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name='registration_date'
            placeholder={t('order:step3.date of registration')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
        </div>
      </FieldsBlockWrapper>
      <FieldsBlockWrapper label={t('order:step3.shareholders')}>
        <div className='row g-0'>
          <TextField
            name='name_1'
            placeholder={t('order:step3.name surname')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors}
          />
          <TextField
            name='name_2'
            placeholder={t('order:step3.name surname')}
            required={false}
            onChange={handleChange}
          />
          <TextField
            name='name_3'
            placeholder={t('order:step3.name surname')}
            required={false}
            onChange={handleChange}
          />
          <TextField
            name='name_4'
            placeholder={t('order:step3.name surname')}
            required={false}
            onChange={handleChange}
          />
        </div>
      </FieldsBlockWrapper>
      <FieldsBlockWrapper label={t('order:step3.contact information')}>
        <div className='row g-0'>
          <TextField
            name='email'
            placeholder='Your e-mail'
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
            name='memorandum_file'
            label={t('order:step3.memorandum')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name='incorporation_certificate_file'
            label={t('order:step3.certificate')}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name='trading_license_file'
            label={t('order:step3.trading license')}
            required={false}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name='financial_statements_file'
            label={t('order:step3.financial statements')}
            required={false}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name='structure_chart_file'
            label={t('order:step3.structure chart')}
            required={false}
            onChange={handleChange}
            onBlur={handleBlur}
            data={formData}
            errors={formErrors}
          />
          <FileField
            name='bank_reference_letter_file'
            label={t('order:step3.bank reference')}
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

export default CompaniesForm;
