export function getArrayFromData(data) {
  return !data
    ? []
    : typeof data === 'object' && !Array.isArray(data)
    ? [data]
    : data;
}
