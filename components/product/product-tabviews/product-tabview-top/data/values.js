import { getCurrentDate, getFutureDate } from 'utils/date-utils';
import { paymentTermsValues } from '../components/tabs/price-calculator/options/options';
import { contactMethods } from '../components/tabs/price-calculator/options/options';

export const initialPorts = [
  {
    name: 'Riga, Latvia',
    price: 1130,
    incoterms: 'CPT'
  },
  {
    name: 'Moscow, Russia',
    price: 1100,
    incoterms: 'CFR'
  },
  {
    name: 'Mariupol, Ukraine',
    price: 1145,
    incoterms: 'FOB'
  },
  {
    name: 'Cinop, Turkey',
    price: 1120,
    incoterms: 'FOB'
  },
  {
    name: 'Mazandaran, Iran',
    price: 1000,
    incoterms: 'FOB'
  },
  {
    name: 'Hong Kong, China',
    price: 970,
    incoterms: 'CPT'
  },
  {
    name: 'Mangalore, India',
    price: 1080,
    incoterms: 'CFR'
  }
];

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
