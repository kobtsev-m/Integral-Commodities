import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import FieldWrapper from './FieldWrapper/FieldWrapper';
import AdditionalInfoField from './Fields/AdditionalInfoField';
import ContactsField from './Fields/ContactsField';
import IncotermsField from './Fields/IncotermsField';
import PaymentTermsField from './Fields/PaymentTermsField';
import PeriodField from './Fields/PeriodField';
import PlaceField from './Fields/PlaceField';
import QuantityField from './Fields/QuantityField';
import ProductField from './Fields/ProductField';

import cn from 'classnames';
import styles from './PriceCalculator.module.css';
import stylesUI from 'components/common/Form/CustomUI.module.css';

import { postInquiriesApi } from 'api/api';
import { formatWeekYMD } from 'utils/date.utils';
import { formSchema } from '../data/PriceCalculator.validation';
import {
  incotermsValues,
  paymentTermsValues
} from '../data/PriceCalculator.options';

function PriceCalculator(props) {
  const { initialFormData, isEmbed, ...restProps } = props;

  const [paymentValues, setPaymentValues] = useState([]);

  const router = useRouter();
  const { t, lang } = useTranslation();

  const products = isEmbed ? restProps.products : null;
  const productId = isEmbed ? null : restProps.productId;

  const newFormData = {
    ...initialFormData,
    product_id: isEmbed ? null : productId,
    terms_of_payment: t(
      `calculator:options.${initialFormData.terms_of_payment}`
    )
  };

  const [formData, setFormData] = useState(newFormData);
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState([]);

  useEffect(() => {
    setPaymentValues(
      paymentTermsValues.map((v) => t(`calculator:options.${v}`))
    );
  }, [lang]);

  useEffect(() => {
    formSchema
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

  const handleBlur = (fieldName) => {
    setTouchedFields([...touchedFields, fieldName]);
  };

  const handleChange = (newValue) => {
    setFormData({ ...formData, ...newValue });
  };

  const isFormValid = () => {
    return !Object.keys(formErrors).length;
  };

  const formatFormData = () => {
    return {
      ...formData,
      quantity: +formData.quantity,
      delivery_periods: formData.delivery_periods.map((week) =>
        formatWeekYMD(week)
      )
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        const formattedData = formatFormData();
        postInquiriesApi(formattedData).then(() =>
          router.push('/SuccessOffer')
        );
      })
      .catch((errors) => {
        const newFormErrors = errors.inner.reduce((acc, e) => {
          touchedFields.push(e.path);
          return { ...acc, [e.path]: e.message };
        }, {});
        setFormErrors(newFormErrors);
      });
  };

  const getErrorsLen = () => {
    return Object.keys(formErrors).length > 1 ? 'many' : 'single';
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      {products && (
        <div className='row gx-5'>
          <div className='col-12 col-md-6'>
            <FieldWrapper title={t('calculator:fields.grade')}>
              <ProductField
                name='product_id'
                placeholder={t('calculator:fields.type product grade')}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={formErrors}
                products={products}
              />
            </FieldWrapper>
          </div>
        </div>
      )}
      <div className='row gx-5 mt-4 mt-md-5'>
        <div className='col-12 col-md-6'>
          <FieldWrapper title={t('calculator:fields.place of delivery')}>
            <PlaceField
              name='place_of_delivery'
              placeholder={t('calculator:fields.search place of delivery')}
              onChange={handleChange}
              defaultValue={newFormData.place_of_delivery}
            />
          </FieldWrapper>
        </div>
        <div className='col-12 col-md-6 mt-4 mt-md-0'>
          <FieldWrapper title={t('calculator:fields.quantity')}>
            <QuantityField
              name='quantity'
              type='number'
              placeholder='50 e.g.'
              onChange={handleChange}
              defaultValue={newFormData.quantity}
            />
          </FieldWrapper>
        </div>
      </div>
      <div className='row gx-5 mt-4 mt-md-5'>
        <FieldWrapper title={t('calculator:fields.incoterms')}>
          <IncotermsField
            name='incoterms'
            values={incotermsValues}
            onChange={handleChange}
            defaultValue={newFormData.incoterms}
          />
        </FieldWrapper>
      </div>
      <div className='row gx-5 mt-4 mt-md-5'>
        <div className='col-12 col-md-6'>
          <FieldWrapper title={t('calculator:fields.terms of payment')}>
            <PaymentTermsField
              name='terms_of_payment'
              values={paymentValues}
              onChange={handleChange}
              defaultValue={newFormData.terms_of_payment}
            />
          </FieldWrapper>
        </div>
        <div className='col-12 col-md-6 mt-4 mt-md-0'>
          <FieldWrapper title={t('calculator:fields.delivery period')}>
            <PeriodField
              name='delivery_periods'
              onChange={handleChange}
              defaultValue={newFormData.delivery_periods}
              isEmbed={isEmbed}
            />
          </FieldWrapper>
        </div>
      </div>
      <div className='row gx-5 mt-4 mt-md-5'>
        <div className='col-12 col-md-6'>
          <FieldWrapper title={t('calculator:fields.additional information')}>
            <AdditionalInfoField
              name='additional_information'
              placeholder={t('calculator:fields.additional text')}
              rows={4}
              onChange={handleChange}
              defaultValue={newFormData.additional_information}
            />
          </FieldWrapper>
        </div>
        <div className='col-12 col-md-6 mt-4 mt-md-0'>
          <FieldWrapper title={t('calculator:fields.contact information')}>
            <ContactsField
              name='contacts'
              onChange={handleChange}
              onBlur={handleBlur}
              errors={formErrors}
              defaultValue={newFormData.contacts}
            />
          </FieldWrapper>
        </div>
      </div>

      <div className='row'>
        <div className={styles.submitBlock}>
          <button
            type='submit'
            className={cn(stylesUI.btn, stylesUI.large, {
              [stylesUI.isInvalid]: !isFormValid(),
              [stylesUI.orange]: isFormValid(),
              [stylesUI.red]: !isFormValid()
            })}
          >
            {t('common:askForQuote.button')}
          </button>
          <div className='mt-3'>
            <span className={styles.submitBlock__helpText}>
              {t('calculator:fields.we will revert')}
            </span>
          </div>
          {!isFormValid() && (
            <div className={cn(stylesUI.errorSpan, stylesUI.above)}>
              {Object.keys(formErrors).length + ' '}
              {t(`calculator:fields.not completed ${getErrorsLen()}`)}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default PriceCalculator;
