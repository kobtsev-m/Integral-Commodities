import { useState, useEffect } from 'react';

import ComingSoon from 'components/other/ComingSoon/ComingSoon';
import TextField from '../Fields/TextField';
import FileField from '../Fields/FileField';
import CustomSubmit from 'components/common/Form/CustomSubmit';
import { paymentMethods } from '../../data/PaymentForm.data';
import { paymentFormSchema } from '../../data/PaymentForm.data';
import useTranslation from 'next-translate/useTranslation';

import cn from 'classnames';
import styles from './PaymentForm.module.css';

function PaymentForm() {
  const [activeMethod, setActiveMethod] = useState(0);
  const { t } = useTranslation();
  return (
    <div className={cn(styles.form, 'pb-5')}>
      <div className={styles.checkboxGroup}>
        {paymentMethods.map((methodName, i) => (
          <label key={i} className={styles.checkbox}>
            <span>{t(`order:step4.${methodName.toLowerCase()}`)}</span>
            <input
              type='checkbox'
              checked={i === activeMethod}
              onChange={() => setActiveMethod(i)}
            />
            <span className={styles.checkmark}></span>
          </label>
        ))}
      </div>
      <div className='mt-5'>
        {activeMethod === 0 || activeMethod === 4 ? (
          <PrepaymentForm activeMethod={activeMethod} />
        ) : activeMethod === 1 || activeMethod === 2 ? (
          <BankGuaranteeForm activeMethod={activeMethod} />
        ) : activeMethod === 3 ? (
          <ComingSoon />
        ) : null}
      </div>
    </div>
  );
}

const PrepaymentForm = ({ activeMethod }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    paymentFormSchema[paymentMethods[0]]
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
    paymentFormSchema[paymentMethods[0]]
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
    <form onSubmit={handleSubmit}>
      <p className='mb-3'>
        {activeMethod === 0
          ? t('order:step4.prepayment help')
          : t('order:step4.deferred payment help')}
      </p>
      <FileField
        name='payment_files'
        required={true}
        className='col-md-12 col-lg-12 px-md-0'
        onChange={handleChange}
        onBlur={handleBlur}
        errors={formErrors}
      />
      <TextField
        name='email'
        placeholder={t('order:step4.email')}
        required={true}
        className='px-md-0'
        onChange={handleChange}
        onBlur={handleBlur}
        errors={formErrors}
      />
      <CustomSubmit formErrors={formErrors} isFormValid={isFormValid} />
    </form>
  );
};

const BankGuaranteeForm = ({ activeMethod }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    paymentFormSchema[paymentMethods[2]]
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
    paymentFormSchema[paymentMethods[2]]
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
    <form onSubmit={handleSubmit}>
      <p className='mb-3'>
        {t(`order:step4.${paymentMethods[activeMethod].toLowerCase()} help`)}
      </p>
      <div className='row g-0'>
        <TextField
          name='bank_name'
          placeholder={t('order:step4.bank name')}
          required={true}
          className='ps-md-0'
          onChange={handleChange}
          onBlur={handleBlur}
          errors={formErrors}
        />
        <TextField
          name='bank_address'
          placeholder={t('order:step4.bank address')}
          required={true}
          className='pe-md-0'
          onChange={handleChange}
          onBlur={handleBlur}
          errors={formErrors}
        />
        <TextField
          name='bank_swift'
          placeholder={t('order:step4.bank swift')}
          required={true}
          className='ps-md-0'
          onChange={handleChange}
          onBlur={handleBlur}
          errors={formErrors}
        />
        <TextField
          name='email'
          placeholder={t('order:step4.email')}
          required={true}
          className='pe-md-0'
          onChange={handleChange}
          onBlur={handleBlur}
          errors={formErrors}
        />
      </div>
      <CustomSubmit formErrors={formErrors} isFormValid={isFormValid} />
    </form>
  );
};

export default PaymentForm;
