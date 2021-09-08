import { useState } from 'react';

import cn from 'classnames';
import styles from './FiltersMobile.module.css';

import MenuSilder from '../../../../templates/Menu/mobile/MenuSlider/MenuSilder';
import FiltersMobileMenu from './FiltersMobileMenu/FiltersMobileMenu';
import { getProductsBySearchStringApi } from '../../../../../api/api';
import useTranslation from 'next-translate/useTranslation';

const FiltersMobile = (props) => {
  const {
    filtersState,
    filtersCount,
    productsCount,
    onChange,
    onSearch,
    onReset
  } = props;

  const [searchValue, setSearchValue] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const { t, lang } = useTranslation();

  const handleMenuClose = () => {
    setIsFilterOpen(false);
  };

  const handleInputReset = () => {
    onReset();
    setSearchValue('');
    setIsSearchActive(false);
  };

  const handleSearchButtonClick = async (e) => {
    e.preventDefault();
    if (!isSearchActive) {
      setIsSearchActive(true);
    } else {
      const searchResults = await getProductsBySearchStringApi(
        lang,
        searchValue
      );
      onSearch(searchResults.product);
    }
  };

  return (
    <>
      <div className={styles.root}>
        <button
          type='button'
          className={cn(styles.button, styles.filterButton)}
          onClick={() => setIsFilterOpen(true)}
        >
          {t('common:filtersBtn')}
        </button>
        <form
          className={cn(styles.searchForm, {
            [styles.searchForm_active]: isSearchActive
          })}
          onSubmit={handleSearchButtonClick}
        >
          <input
            className={cn(styles.searchInput, {
              [styles.searchInput_active]: isSearchActive
            })}
            type='search'
            placeholder={t('common:productFields.grade')}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {isSearchActive && (
            <div className='d-flex align-items-center'>
              <div
                className={styles.clearFiltersBtn}
                onClick={handleInputReset}
              ></div>
            </div>
          )}
          <button
            type='submit'
            className={cn(styles.button, styles.searchButton)}
            aria-label='Search by grade'
          />
        </form>
      </div>
      <MenuSilder
        title={t('common:filtersBtn')}
        open={isFilterOpen}
        onClose={handleMenuClose}
      >
        <FiltersMobileMenu
          filtersState={filtersState}
          filtersCount={filtersCount}
          productsCount={productsCount}
          onChange={onChange}
          onClose={handleMenuClose}
          onReset={onReset}
        />
      </MenuSilder>
    </>
  );
};

export default FiltersMobile;
