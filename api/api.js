const BACKEND_URL = 'https://integral-commodities.ch/api/v1';

async function getRequest(requestUrl, callback) {
  const response = await fetch(`${BACKEND_URL}${requestUrl}`);
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
  return await getRequest('/products', cb);
}
export async function getProductByIdApi(id, cb) {
  return await getRequest(`/products/${id}`, cb);
}
export async function getAnalogsByProductIdApi(id, cb) {
  return await getRequest(`/analogs/${id}`, cb);
}
export async function getOffersApi(category, cb) {
  return await getRequest(`/offers/${category}`, cb);
}
export async function getProductsBySearchStringApi(searchString) {
  return await getRequest(`/search?search=${searchString}`);
}
export async function getPlaceCoordinatesByNameApi(name, cb) {
  const data = await getRequest(`/places/${name}`, cb);
  return { lat: data.coordinates.lat, lng: data.coordinates.lon };
}
export async function postInquiriesApi(data) {
  return await postRequest('/inquiries', data);
}
