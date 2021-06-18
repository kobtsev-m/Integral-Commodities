import classes from "./FilterMenu.module.css";
import { useState } from "react";

const getInitialState = (filters) => {
  return Object.keys(filters).reduce((acc, filterName) => {
    acc = { ...acc, [filterName]: false };
    return acc;
  }, {});
};

const FilterMenu = (props) => {
  const { filters, onChange } = props;

  const [rollup, setRollup] = useState(getInitialState(filters));

  const handleChange = (filterName, optionName, isChecked) => {
    const filter = filters[filterName];
    onChange({
      [filterName]: {
        ...filter,
        options: { ...filter.options, [optionName]: isChecked },
      },
    });
  };

  return (
    <div className={classes.root}>
      <ul className={classes.filtersList}>
        {Object.entries(filters).map(([filterName, filterInfo]) => {
          return (
            <li className={classes.filterItem}>
              <span className={classes.filterName}>{filterInfo.key}</span>
              <button
                className={classes.rollupBtn}
                onClick={() =>
                  setRollup((prevState) => ({
                    ...getInitialState(filters),
                    [filterName]: !prevState[filterName],
                  }))
                }
              />
              <ul
                className={classes.optionsList}
                style={{ display: `${rollup[filterName] ? "block" : "none"}` }}
              >
                {Object.entries(filterInfo.options).map(
                  ([optionName, optionValue]) => (
                    <li className={classes.option}>
                      <label htmlFor="">
                        <input
                          type="checkbox"
                          checked={filters[filterName].options[optionName]}
                          onChange={(evt) => {
                            handleChange(
                              filterName,
                              optionName,
                              evt.target.checked
                            );
                          }}
                        />
                        {optionName}
                      </label>
                    </li>
                  )
                )}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterMenu;
