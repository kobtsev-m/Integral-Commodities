import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

import CheckboxesFilter from 'components/checkboxes-filter/checkboxes-filter';
import FilterControls from 'components/filter/filter-controls';
import useWindowDimensions from 'utils/hooks/useWindowDemensions';
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
  const {
    filteredProductsCount,
    filtersState,
    onFiltersChange,
    onSearchSubmit,
    onReset
  } = props;

  const router = useRouter();
  const { t } = useTranslation();

  const [droppedDown, setIsDroppedDown] = useState({});
  const [filtersCount, setFiltersCount] = useState(0);

  const formRef = useRef(null);
  const searchRef = useRef(null);

  const size = useWindowDimensions();

  useEffect(() => {
    setIsDroppedDown(getInitialDropDownState());
  }, []);

  useEffect(() => {
    setFiltersCount(Object.keys(router.query).length - 1);
  }, [router.query]);

  const getInitialDropDownState = () => {
    return Object.keys(filtersState).reduce(
      (acc, key) => ({ ...acc, [key]: false }),
      {}
    );
  };

  const handleChange = (filterName, optionName, isChecked) => {
    const newFiltersState = {
      [filterName]: {
        ...filtersState[filterName],
        options: {
          ...filtersState[filterName].options,
          [optionName]: !isChecked
        }
      }
    };
    onFiltersChange(newFiltersState);
    setFiltersCount(filtersCount + (isChecked ? -1 : 1));
  };

  const handleClear = () => {
    if (searchRef.current) {
      searchRef.current.value = '';
    }
    onReset();
    setFiltersCount(0);
  };

  const handleDropDownClick = (filterName) => {
    setIsDroppedDown((prevState) => ({
      ...getInitialDropDownState,
      [filterName]: !prevState[filterName]
    }));
  };

  const handleOutsideClick = () => {
    setIsDroppedDown(getInitialDropDownState());
  };

  useOutsideAlerter(formRef, handleOutsideClick);

  if (size.width <= 768) {
    return (
      <FilterControls
        filtersState={filtersState}
        filtersCount={filtersCount}
        productsCount={filteredProductsCount}
        onChange={handleChange}
        onSearch={onSearchSubmit}
        onReset={handleClear}
      />
    );
  }

  return (
    <div className='products__controls'>
      <form className={styles.filterForm} ref={formRef}>
        {Object.entries(filtersState).map(([filterName, filter]) => (
          <CheckboxesFilter
            key={`filter-${filterName}`}
            filterName={filterName}
            filter={filter}
            onChange={handleChange}
            isDroppedDown={droppedDown[filterName]}
            onDropDownClick={handleDropDownClick}
          />
        ))}
        {!!filtersCount && (
          <div className='d-flex align-items-center'>
            <div
              className={styles.clearFiltersBtn}
              onClick={handleClear}
            ></div>
          </div>
        )}
      </form>
      <form
        className='products__search-form mt-2 d-none d-xl-flex'
        name='search'
        onSubmit={async (event) => {
          event.preventDefault();
          const searchResult = await getProductsBySearchStringApi(
            searchRef.current.value
          );
          onSearchSubmit(searchResult);
        }}
      >
        <label className='products__search-label' htmlFor='searchInput'>
          Search
        </label>
        <input
          className='products__search-input'
          type='text'
          name='search'
          id='searchInput'
          placeholder={t('common:productFields.grade')}
          autoComplete='off'
          ref={searchRef}
          onChange={() => setFiltersCount(filtersCount + 1)}
        />
        <button className='products__search-submit' type='submit' />
      </form>
    </div>
  );
}

export default ProductListControls;
