import { nanoid } from "nanoid";
import classnames from "classnames";

import classes from "./checkboxes-filter.module.css";

function CheckboxesFilter(props) {
  const {
    filterName,
    filterOptions,
    onChange,
    isDroppedDown,
    onDropDownClick,
  } = props;

  function handleDropdownClick() {
    onDropDownClick(filterName);
  }

  return (
    <fieldset className={classes.checkboxFilter} key={nanoid()}>
      <button
        className={classes.checkboxFilter__dropDownBtn}
        type="button"
        onClick={handleDropdownClick}
      >
        {filterName}
      </button>
      <ul
        className={classnames(classes.checkboxFilter__optionsList, {
          [classes.checkboxFilter__optionsList_opened]: isDroppedDown,
        })}
      >
        {Object.entries(filterOptions).map(([name, isChecked]) => {
          const id = `${filterName}-option-${name}`;
          return (
            <li className={classes.checkboxFilter__optionsItem} key={nanoid()}>
              <label
                className={classes.checkboxFilter__optionLabel}
                htmlFor={id}
              >
                <input
                  className={classes.checkboxFilter__optionInput}
                  type="checkbox"
                  value={name}
                  name={filterName}
                  checked={isChecked}
                  id={id}
                  onChange={() =>
                    onChange({ [filterName]: { [name]: !isChecked } })
                  }
                />
                {name}
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

export default CheckboxesFilter;
