import { getCurrentDate, getFutureDate } from 'utils/date-utils';
import { paymentTermsValues } from './options';
import { contactMethods } from './options';

const initialDeliveryPeriod = [
  getCurrentDate(),
  getFutureDate(new Date(), 56)
];

const initialContacts = {
  name: '',
  ...contactMethods.reduce(
    (acc, method) => ({ ...acc, [method.name]: '' }),
    {}
  )
};

// Initial Form data
export const initialOfferFormData = {
  place_of_delivery: '',
  quantity: '',
  incoterms: '',
  terms_of_payment: paymentTermsValues[0],
  delivery_periods: [initialDeliveryPeriod],
  additional_information: '',
  contacts: initialContacts
};
