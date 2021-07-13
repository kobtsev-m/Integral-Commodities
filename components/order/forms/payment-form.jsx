import { useState, useEffect } from 'react';

import ComingSoon from 'components/other-blocks/coming-soon/coming-soon';
import TextField from '../fields/text-field';
import FileField from '../fields/file-field';
import SubmitBlock from 'components/common/submit-block';
import { paymentMethods } from '../validation/payment-form-data';
import { paymentFormSchema } from '../validation/payment-form-data';

import cn from 'classnames';
import styles from './payment-form.module.css';

function PaymentForm(props) {
  const [activeMethod, setActiveMethod] = useState(0);
  return (
    <div className={cn(styles.form, 'pb-5')}>
      <div className={styles.checkboxGroup}>
        {paymentMethods.map((methodName, i) => (
          <label key={i} className={styles.checkbox}>
            <span>{methodName}</span>
            <input
              type={'checkbox'}
              checked={i === activeMethod}
              onChange={() => setActiveMethod(i)}
            />
            <span className={styles.checkmark}></span>
          </label>
        ))}
      </div>
      <div className={'mt-5'}>
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
      <p className={'mb-3'}>
        {activeMethod === 0
          ? 'Please, make a payment to the bank details indicated on your invoice and upload payment confirmation:'
          : 'Please, upload audited financial statements for the last 3 years:'}
      </p>
      <FileField
        name={'payment_files'}
        required={true}
        className={'col-md-12 col-lg-12 px-md-0'}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={formErrors}
      />
      <TextField
        name={'email'}
        placeholder={'Your e-mail'}
        required={true}
        className={'px-md-0'}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={formErrors}
      />
      <SubmitBlock formErrors={formErrors} isFormValid={isFormValid} />
    </form>
  );
};

const BankGuaranteeForm = ({ activeMethod }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState([]);

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
      <p className={'mb-3'}>
        Please, indicate the details of the bank which will open the{' '}
        {paymentMethods[activeMethod].toLowerCase()}:
      </p>
      <div className={'row g-0'}>
        <TextField
          name={'bank_name'}
          placeholder={'Bank name'}
          required={true}
          className={'ps-md-0'}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={formErrors}
        />
        <TextField
          name={'bank_address'}
          placeholder={'Bank address'}
          required={true}
          className={'pe-md-0'}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={formErrors}
        />
        <TextField
          name={'bank_swift'}
          placeholder={'Bank SWIFT code'}
          required={true}
          className={'ps-md-0'}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={formErrors}
        />
        <TextField
          name={'email'}
          placeholder={'Your e-mail'}
          required={true}
          className={'pe-md-0'}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={formErrors}
        />
      </div>
      <SubmitBlock formErrors={formErrors} isFormValid={isFormValid} />
    </form>
  );
};

export default PaymentForm;
