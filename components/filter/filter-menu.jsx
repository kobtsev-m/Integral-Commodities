import classes from './filter-menu.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const getInitialState = (filters) => {
  return Object.keys(filters).reduce((acc, filterName) => {
    acc = { ...acc, [filterName]: false };
    return acc;
  }, {});
};

const FilterMenu = (props) => {
  const { filters, productsCount, onChange, onClose } = props;

  const [rollup, setRollup] = useState(getInitialState(filters));

  const handleChange = (filterName, optionName, isChecked) => {
    const filter = filters[filterName];
    onChange({
      [filterName]: {
        ...filter,
        options: { ...filter.options, [optionName]: isChecked }
      }
    });
  };

  return (
    <div className={classes.root}>
      <ul className={classes.filtersList}>
        {Object.entries(filters).map(([filterName, filterInfo]) => {
          return (
            <li key={nanoid()} className={classes.filterItem}>
              <span className={classes.filterName}>{filterInfo.key}</span>
              <button
                className={classes.rollupBtn}
                onClick={() =>
                  setRollup((prevState) => ({
                    ...getInitialState(filters),
                    [filterName]: !prevState[filterName]
                  }))
                }
              />
              <ul
                className={classes.optionsList}
                style={{ display: `${rollup[filterName] ? 'block' : 'none'}` }}
              >
                {Object.entries(filterInfo.options).map(([optionName, _]) => (
                  <li className={classes.option} key={`option-${optionName}`}>
                    <label
                      className={classes.optionLabel}
                      htmlFor={`option-${optionName}`}
                    >
                      <input
                        className={classes.optionInput}
                        type="checkbox"
                        id={`option-${optionName}`}
                        checked={filters[filterName].options[optionName]}
                        onChange={(evt) => {
                          handleChange(
                            filterName,
                            optionName,
                            evt.target.checked
                          );
                        }}
                      />
                      <span className={classes.inputReplacement} />
                      {optionName}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className={classes.submitWrapper}>
        <button className={classes.submit} onClick={onClose}>
          Show {productsCount} products
        </button>
      </div>
    </div>
  );
};

export default FilterMenu;
