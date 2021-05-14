import { nanoid } from 'nanoid';
import cn from 'classnames';

import styles from './checkboxes-filter.module.css';

function CheckboxesFilter(props) {
  const {
    filterName,
    filterOptions,
    onChange,
    isDroppedDown,
    onDropDownClick
  } = props;

  function handleDropdownClick() {
    onDropDownClick(filterName);
  }

  return (
    <fieldset className={styles.checkboxFilter} key={nanoid()}>
      <button
        className={styles.checkboxFilter__dropDownBtn}
        type={'button'}
        onClick={handleDropdownClick}
      >
        {filterName}
      </button>
      <ul
        className={cn(styles.checkboxFilter__optionsList, {
          [styles.checkboxFilter__optionsList_opened]: isDroppedDown
        })}
      >
        {Object.entries(filterOptions).map(([name, isChecked]) => {
          const id = `${filterName}-option-${name}`;
          return (
            <li className={styles.checkboxFilter__optionsItem} key={nanoid()}>
              <label
                className={styles.checkboxFilter__optionLabel}
                htmlFor={id}
              >
                <input
                  className={styles.checkboxFilter__optionInput}
                  type={'checkbox'}
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
