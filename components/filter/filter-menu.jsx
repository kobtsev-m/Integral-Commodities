import { useState } from 'react';
import { nanoid } from 'nanoid';

import cn from 'classnames';
import styles from './filter-menu.module.css';

const getInitialState = (filtersState) => {
  return Object.keys(filtersState).reduce((acc, filterName) => {
    acc = { ...acc, [filterName]: false };
    return acc;
  }, {});
};

const FilterMenu = (props) => {
  const {
    filtersState,
    productsCount,
    filtersCount,
    onChange,
    onClose,
    onReset
  } = props;

  const [rollup, setRollup] = useState(getInitialState(filtersState));

  return (
    <div className={styles.root}>
      <ul className={styles.filtersList}>
        {Object.entries(filtersState).map(([filterName, filterInfo]) => {
          return (
            <li key={nanoid()} className={styles.filterItem}>
              <span className={styles.filterName}>{filterInfo.key}</span>
              <button
                type={'button'}
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
                {Object.entries(filterInfo.options).map(([optionName, _]) => (
                  <li key={nanoid()} className={styles.option}>
                    <label
                      className={styles.optionLabel}
                      htmlFor={`option-${optionName}`}
                    >
                      <input
                        type={'checkbox'}
                        id={`option-${optionName}`}
                        className={styles.optionInput}
                        checked={filtersState[filterName].options[optionName]}
                        onChange={(e) =>
                          onChange(filterName, optionName, !e.target.checked)
                        }
                      />
                      <span className={styles.inputReplacement} />
                      {optionName}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className={styles.submitWrapper}>
        <button type={'button'} className={styles.submit} onClick={onClose}>
          Show {productsCount} {productsCount !== 1 ? 'products' : 'product'}
        </button>
        {!!filtersCount && (
          <button
            type={'button'}
            className={cn(styles.submit, styles.red, 'mt-2')}
            onClick={onReset}
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterMenu;
