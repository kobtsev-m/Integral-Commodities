import useTranslation from 'next-translate/useTranslation';
import { nanoid } from 'nanoid';

import cn from 'classnames';
import styles from './checkboxes-filter.module.css';
import { getKey, getClearedTransKey, getTransValue } from 'utils/i18n';

function CheckboxesFilter(props) {
  const { filterName, filter, onChange, isDroppedDown, onDropDownClick } =
    props;

  const { t } = useTranslation();

  const getTransOption = (optionName) => {
    return getTransValue(t, ['common:filter', getKey(filter.key)], optionName);
  };

  return (
    <fieldset className={styles.checkboxFilter} key={nanoid()}>
      <button
        className={styles.checkboxFilter__dropDownBtn}
        type='button'
        onClick={() => onDropDownClick(filterName)}
      >
        {getClearedTransKey(t, 'common:productFields', filter.key)}
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
                  onChange={() =>
                    onChange(filterName, getTransOption(optionName), isChecked)
                  }
                />
                {getTransOption(optionName)}
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

export default CheckboxesFilter;
