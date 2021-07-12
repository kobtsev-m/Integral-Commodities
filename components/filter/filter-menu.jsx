import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './filter-menu.module.css';

const getInitialState = (filters) => {
  return Object.keys(filters).reduce((acc, filterName) => {
    acc = { ...acc, [filterName]: false };
    return acc;
  }, {});
};

const FilterMenu = (props) => {
  const { filters, productsCount, onChange, onClose } = props;

  const [rollup, setRollup] = useState(getInitialState(filters));

  return (
    <div className={styles.root}>
      <ul className={styles.filtersList}>
        {Object.entries(filters).map(([filterName, filterInfo]) => {
          return (
            <li key={nanoid()} className={styles.filterItem}>
              <span className={styles.filterName}>{filterInfo.key}</span>
              <button
                type={'button'}
                className={styles.rollupBtn}
                onTouchStart={() => {
                  setRollup((prevState) => ({
                    ...getInitialState(filters),
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
                        checked={filters[filterName].options[optionName]}
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
          Show {productsCount} products
        </button>
      </div>
    </div>
  );
};

export default FilterMenu;
