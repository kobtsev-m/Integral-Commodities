const BACKEND_URL = 'https://integral-commodities.ch/api/v';

export async function getRequest(version, requestUrl, callback) {
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

export async function postRequest(requestUrl, data) {
  const response = await fetch(`${BACKEND_URL}${requestUrl}`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return await response.json();
}
