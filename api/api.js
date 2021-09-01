import { getArrayFromData } from './utils';

const BACKEND_URL = 'https://integral-commodities.ch/api/v';

async function getRequest(version, requestUrl, callback) {
  const response = await fetch(`${BACKEND_URL}${version}${requestUrl}`);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data = await response.json();
  if (callback) {
    callback(data);
  }
  return data;
}

async function postRequest(requestUrl, data) {
  const response = await fetch(`${BACKEND_URL}${requestUrl}`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return await response.json();
}

export async function getProductsApi(lang, cb) {
  return await getRequest(2, `/products/${lang}`, cb);
}
export async function getProductByIdApi(lang, id, cb) {
  return await getRequest(2, `/products/${lang}/${id}`, cb);
}
export async function getAnalogsByProductIdApi(id, cb) {
  return await getRequest(1, `/analogs/${id}`, cb);
}
export async function getOffersApi(lang, category, cb) {
  return await getRequest(2, `/offers/${lang}/${category}`, cb);
}
export async function getProductsBySearchStringApi(lang, query, cb) {
  const data = await getRequest(2, `/search/${lang}?search=${query}`, cb);
  return getArrayFromData(data);
}
export async function getPlaceCoordinatesByNameApi(name, cb) {
  const data = await getRequest(1, `/places/${name}`, cb);
  return data?.coordinates;
}
export async function postInquiriesApi(data) {
  return await postRequest(1, '/inquiries', data);
}
