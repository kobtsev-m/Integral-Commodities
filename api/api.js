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

export async function getProductsApi(cb) {
  return await getRequest(1, '/products', cb);
}
export async function getProductByIdApi(id, cb) {
  return await getRequest(1, `/products/${id}`, cb);
}
export async function getAnalogsByProductIdApi(id, cb) {
  return await getRequest(1, `/analogs/${id}`, cb);
}
export async function getOffersApi(lang, category, cb) {
  return await getRequest(2, `/offers/${lang}/${category}`, cb);
}
export async function getProductsBySearchStringApi(searchString) {
  return await getRequest(1, `/search?search=${searchString}`);
}
export async function getPlaceCoordinatesByNameApi(name, cb) {
  const data = await getRequest(1, `/places/${name}`, cb);
  return data?.coordinates;
}
export async function postInquiriesApi(data) {
  return await postRequest(1, '/inquiries', data);
}
