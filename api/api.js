const BACKEND_URL = 'https://integral-commodities.ch/api/v1';

export async function getAllProducts(cb) {
  const response = await fetch(`${BACKEND_URL}/products`);
  const data = await response.json();
  cb(data);
  return data;
}
export async function getProductById(id, cb) {
  const response = await fetch(`${BACKEND_URL}/products/${id}`);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data = await response.json();
  if (!data) {
    throw Error(response.statusText);
  }
  if (cb) {
    cb(data);
  }
  return data;
}
export async function getAnalogsByProductId(id, cb) {
  const response = await fetch(`${BACKEND_URL}/analogs/${id}`);
  const data = await response.json();
  if (cb) {
    cb(data);
  }
  return data;
}
export async function getAllOffers(cb) {
  const response = await fetch(`${BACKEND_URL}/offers`);
  const data = await response.json();
  cb(data);
  return data;
}
export async function getProductsBySearchString(searchString) {
  const response = await fetch(`${BACKEND_URL}/search?search=${searchString}`);
  return await response.json();
}
