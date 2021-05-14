import { useEffect, useState, useRef } from 'react';

import CheckboxesFilter from 'components/checkboxes-filter/checkboxes-filter';
import { getProductsBySearchStringApi } from 'api/api';

import styles from './product-list-controls.module.css';

function useOutsideAlerter(ref, cb) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

function ProductListControls(props) {
  const { filtersState, onFiltersChange, onSearchSubmit } = props;
  const [droppedDown, setIsDroppedDown] = useState({});
  const formRef = useRef(null);
  const searchRef = useRef(null);

  useOutsideAlerter(formRef, handleOutsideClick);

  useEffect(() => {
    setIsDroppedDown(getInitialDropDownState());
  }, [setIsDroppedDown]);

  function getInitialDropDownState() {
    return Object.keys(filtersState).reduce((acc, key) => {
      acc = { ...acc, [key]: false };
      return acc;
    }, {});
  }

  function handleChange(res) {
    onFiltersChange(res);
  }

  function handleDropDownClick(filterName) {
    setIsDroppedDown((prevState) => ({
      ...getInitialDropDownState,
      [filterName]: !prevState[filterName]
    }));
  }

  function handleOutsideClick() {
    setIsDroppedDown(getInitialDropDownState());
  }

  return (
    <div className={'products__controls'}>
      <form className={styles.filterForm} ref={formRef}>
        {Object.entries(filtersState).map(([filterName, filterOptions]) => {
          return (
            <CheckboxesFilter
              key={`filter-${filterName}`}
              filterName={filterName}
              filterOptions={filterOptions}
              onChange={handleChange}
              isDroppedDown={droppedDown[filterName]}
              onDropDownClick={handleDropDownClick}
            />
          );
        })}
      </form>
      <form
        className={'products__search-form'}
        name={'search'}
        onSubmit={async (evt) => {
          evt.preventDefault();
          const searchResult = await getProductsBySearchStringApi(
            searchRef.current.value
          );
          onSearchSubmit(searchResult);
        }}
      >
        <label className={'products__search-label'} htmlFor={'searchInput'}>
          Search
        </label>
        <input
          className={'products__search-input'}
          type={'text'}
          name={'search'}
          id={'searchInput'}
          placeholder={'Grade'}
          autoComplete={'off'}
          ref={searchRef}
        />
        <button className={'products__search-submit'} type={'submit'} />
      </form>
    </div>
  );
}

export default ProductListControls;
