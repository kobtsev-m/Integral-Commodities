import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FieldWrapper from './common/field-wrapper';
import AdditionalInfoField from './fields/additional-info-field';
import ContactsField from './fields/contacts-field';
import IncotermsField from './fields/incoterms-field';
import PaymentTermsField from './fields/payment-terms-field';
import PeriodField from './fields/period-field';
import PlaceField from './fields/place-field';
import QuantityField from './fields/quantity-field';

import cn from 'classnames';
import styles from './price-calculator.module.css';
import stylesUI from 'components/ui/custom-ui.module.css';

import { postInquiriesApi } from 'api/api';
import { formatWeekYMD } from 'utils/date-utils';
import { formSchema } from './validation/validation';
import { incotermsValues, paymentTermsValues } from './options/options';
import ProductField from './fields/product-field';

function PriceCalculator(props) {
  const { initialFormData, isEmbed, ...restProps } = props;

  const router = useRouter();
  const products = isEmbed ? restProps.products : null;
  const productId = isEmbed ? null : restProps.productId;

  const newFormData = {
    ...initialFormData,
    product_id: isEmbed ? null : productId
  };

  const [formData, setFormData] = useState(newFormData);
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState([]);

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
          router.push('/success-offer')
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

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      {products && (
        <div className={'row gx-5'}>
          <div className={'col-12'}>
            <FieldWrapper title={'Grade'}>
              <ProductField
                name={'product_id'}
                placeholder={'Type grade of product'}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={formErrors}
                products={products}
              />
            </FieldWrapper>
          </div>
        </div>
      )}
      <div className={'row gx-5 mt-5'}>
        <div className={'col-12 col-md-6'}>
          <FieldWrapper title={'Place of delivery'}>
            <PlaceField
              name={'place_of_delivery'}
              placeholder={'Type your place of delivery'}
              onChange={handleChange}
              defaultValue={initialFormData.place_of_delivery}
            />
          </FieldWrapper>
        </div>
        <div className={'col-12 col-md-6 mt-4 mt-md-0'}>
          <FieldWrapper title={'Quantity'}>
            <QuantityField
              name={'quantity'}
              type={'number'}
              placeholder={'50 e.g.'}
              onChange={handleChange}
              defaultValue={initialFormData.quantity}
            />
          </FieldWrapper>
        </div>
      </div>
      <div className={'row gx-5 mt-5'}>
        <FieldWrapper title={'Incoterms'}>
          <IncotermsField
            name={'incoterms'}
            values={incotermsValues}
            onChange={handleChange}
            defaultValue={initialFormData.incoterms}
          />
        </FieldWrapper>
      </div>
      <div className={'row gx-5 mt-5'}>
        <div className={'col-12 col-md-6'}>
          <FieldWrapper title={'Terms of payment'}>
            <PaymentTermsField
              name={'terms_of_payment'}
              values={paymentTermsValues}
              onChange={handleChange}
              defaultValue={initialFormData.terms_of_payment}
            />
          </FieldWrapper>
        </div>
        <div className={'col-12 col-md-6 mt-4 mt-md-0'}>
          <FieldWrapper title={'Delivery period'}>
            <PeriodField
              name={'delivery_periods'}
              onChange={handleChange}
              defaultValue={initialFormData.delivery_periods}
              isEmbed={isEmbed}
            />
          </FieldWrapper>
        </div>
      </div>
      <div className={'row gx-5 mt-5'}>
        <div className={'col-12 col-md-6'}>
          <FieldWrapper title={'Additional information'}>
            <AdditionalInfoField
              name={'additional_information'}
              placeholder={'Company name, order requirements'}
              rows={4}
              onChange={handleChange}
              defaultValue={initialFormData.additional_information}
            />
          </FieldWrapper>
        </div>
        <div className={'col-12 col-md-6 mt-4 mt-md-0'}>
          <FieldWrapper title={'Contact information'}>
            <ContactsField
              name={'contacts'}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={formErrors}
              defaultValue={initialFormData.contacts}
            />
          </FieldWrapper>
        </div>
      </div>

      <div className={'row'}>
        <div className={styles.submitBlock}>
          <button
            type={'submit'}
            className={cn(stylesUI.btn, stylesUI.large, {
              [stylesUI.isInvalid]: !isFormValid(),
              [stylesUI.orange]: isFormValid(),
              [stylesUI.red]: !isFormValid()
            })}
          >
            Ask for quote
          </button>
          <div className={'mt-3'}>
            <span className={styles.submitBlock__helpText}>
              We will revert within 48 hours
            </span>
          </div>
          {!isFormValid() && (
            <div className={cn(stylesUI.errorSpan, stylesUI.above)}>
              {Object.keys(formErrors).length}
              {' required '}
              {Object.keys(formErrors).length > 1 ? 'fields are' : 'field is'}
              {' not completed'}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default PriceCalculator;
