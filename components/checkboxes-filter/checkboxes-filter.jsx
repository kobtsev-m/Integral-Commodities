import Trans from 'next-translate/Trans';
import { nanoid } from 'nanoid';

import cn from 'classnames';
import styles from './checkboxes-filter.module.css';

function CheckboxesFilter(props) {
  const { filterName, filter, onChange, isDroppedDown, onDropDownClick } =
    props;

  const getKey = (key) => {
    return key.replace('.', '').toLowerCase();
  };
  const getFullKey = (key, optionName) => {
    return `filter.${getKey(key)}.${getKey(optionName)}`;
  };

  const isTranslatableFilter = (filterName) => {
    return ['type', 'procmethod', 'application'].includes(filterName);
  };

  return (
    <fieldset className={styles.checkboxFilter} key={nanoid()}>
      <button
        className={styles.checkboxFilter__dropDownBtn}
        type='button'
        onClick={() => onDropDownClick(filterName)}
      >
        <Trans i18nKey={`common:productFields.${getKey(filter.key)}`} />
      </button>
      <ul
        className={cn(styles.checkboxFilter__optionsList, {
          [styles.checkboxFilter__optionsList_opened]: isDroppedDown
        })}
      >
        {Object.entries(filter.options).map(([optionName, isChecked]) => {
          return (
            <li className={styles.checkboxFilter__optionsItem} key={nanoid()}>
              <label
                className={styles.checkboxFilter__optionLabel}
                htmlFor={`${filterName}-option-${optionName}`}
              >
                <input
                  className={styles.checkboxFilter__optionInput}
                  type='checkbox'
                  value={optionName}
                  name={filterName}
                  checked={isChecked}
                  id={`${filterName}-option-${optionName}`}
                  onChange={() => onChange(filterName, optionName, isChecked)}
                />
                {isTranslatableFilter(filterName) ? (
                  <Trans
                    i18nKey={`common:${getFullKey(filter.key, optionName)}`}
                  />
                ) : (
                  optionName
                )}
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

export default CheckboxesFilter;
