import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { getKey, getClearedTransKey, getTransValue } from 'utils/i18n.utils';

import cn from 'classnames';
import styles from './FiltersMobileMenu.module.css';

const getInitialState = (filtersState) => {
  return Object.keys(filtersState).reduce((acc, filterName) => {
    acc = { ...acc, [filterName]: false };
    return acc;
  }, {});
};

const FiltersMobileMenu = (props) => {
  const {
    filtersState,
    productsCount,
    filtersCount,
    onChange,
    onClose,
    onReset
  } = props;

  const [rollup, setRollup] = useState(getInitialState(filtersState));
  const { t } = useTranslation();

  const handleReset = () => {
    setRollup(getInitialState(filtersState));
    onReset();
  };

  const getProductsText = (productsCount) => {
    const digits = Array.from(String(productsCount)).map(Number);
    if (digits.length === 1 || digits[0] > 1) {
      const lastDigit = digits[digits.length - 1];
      if (lastDigit === 1) {
        return t('common:productsText1');
      } else if (lastDigit > 1 && lastDigit < 5) {
        return t('common:productsText2');
      } else if (lastDigit >= 5 || lastDigit === 0) {
        return t('common:productsText3');
      }
    }
    return t('common:productsText3');
  };

  return (
    <div className={styles.root}>
      <ul className={styles.filtersList}>
        {Object.entries(filtersState).map(([filterName, filter], i) => {
          return (
            <li key={i} className={styles.filterItem}>
              <span className={styles.filterName}>
                {getClearedTransKey(t, 'common:productFields', filter.key)}
              </span>
              <button
                type='button'
                className={styles.rollupBtn}
                onClick={() => {
                  setRollup((prevState) => ({
                    ...getInitialState(filtersState),
                    [filterName]: !prevState[filterName]
                  }));
                }}
              />
              <ul
                className={styles.optionsList}
                style={{ display: rollup[filterName] ? 'block' : 'none' }}
              >
                {Object.entries(filter.options).map(([optionName, _], i) => (
                  <li key={i} className={styles.option}>
                    <label
                      className={styles.optionLabel}
                      htmlFor={`option-${optionName}`}
                    >
                      <input
                        type='checkbox'
                        id={`option-${optionName}`}
                        className={styles.optionInput}
                        checked={filtersState[filterName].options[optionName]}
                        onChange={(e) =>
                          onChange(filterName, optionName, !e.target.checked)
                        }
                      />
                      <span className={styles.inputReplacement} />
                      {getTransValue(
                        t,
                        ['common:FiltersMobileMenu', getKey(filter.key)],
                        optionName
                      )}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className={styles.submitWrapper}>
        <button type='button' className={styles.submit} onClick={onClose}>
          {t('common:showBtn')} {productsCount}{' '}
          {getProductsText(productsCount)}
        </button>
        {!!filtersCount && (
          <button
            type='button'
            className={cn(styles.submit, styles.red, 'mt-2')}
            onClick={handleReset}
          >
            {t('common:clearBtn')}
          </button>
        )}
      </div>
    </div>
  );
};

export default FiltersMobileMenu;
