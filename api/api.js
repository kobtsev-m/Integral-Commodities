import { getRequest, postRequest } from './xhr';

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
  if (Array.isArray(data) && data.length === 0) {
    return { product: [], analogs: [] };
  }
  return data;
}

export async function getPlaceCoordinatesByNameApi(name, cb) {
  const data = await getRequest(1, `/places/${name}`, cb);
  return data?.coordinates;
}

export async function postInquiriesApi(data) {
  return await postRequest(1, '/inquiries', data);
}
