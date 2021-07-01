import { getCurrentDate, getFutureDate } from 'utils/date-utils';
import { paymentTermsValues } from '../components/tabs/price-calculator/options/options';
import { contactMethods } from '../components/tabs/price-calculator/options/options';

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

// Initial form data
export const initialOfferFormData = {
  place_of_delivery: '',
  quantity: '',
  incoterms: '',
  terms_of_payment: paymentTermsValues[0],
  delivery_periods: [initialDeliveryPeriod],
  additional_information: '',
  contacts: initialContacts
};
