export const getKey = (key) => {
  return key.replace('.', '').toLowerCase();
};

export const getTransKey = (t, ns, key) => {
  const clearedKey = key.replace('.', '').toLowerCase();
  return t(`${ns}.${clearedKey}`);
};

export const getClearedTransKey = (t, ns, key) => {
  const clearedKey = key
    .replace('.', '')
    .replace('(', '')
    .replace(')', '')
    .toLowerCase();
  return t(`${ns}.${clearedKey}`);
};

const getTranslationIfExists = (t, ns, value) => {
  const nsString = typeof ns === 'object' ? ns.join('.') : ns;
  const clearedValue = value.replace('.', '').toLowerCase();
  const translation = t(`${nsString}.${clearedValue}`, Object, {
    fallback: 'common:null'
  });
  return translation === 'null' ? value : translation;
};

export const getTransValue = (t, ns, value) => {
  return getTranslationIfExists(t, ns, value.toString());
};

export const getTransValueSplitted = (t, ns, value) => {
  return value
    .toString()
    .split(', ')
    .map((value) => getTranslationIfExists(t, ns, value))
    .join(', ');
};
