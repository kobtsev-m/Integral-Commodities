import { useState } from 'react';

import cn from 'classnames';
import styles from './FiltersMobile.module.css';

import MenuSlider from 'components/templates/Menu/mobile/MenuSlider/MenuSilder';
import FiltersMobileMenu from './FiltersMobileMenu/FiltersMobileMenu';
import { getProductsBySearchStringApi } from 'api/api';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

const FiltersMobile = (props) => {
  const {
    filtersState,
    filtersCount,
    productsCount,
    onChange,
    onSearch,
    onReset
  } = props;

  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      getProductsBySearchStringApi(lang, searchValue).then((searchResults) => {
        setIsLoading(false);
        onSearch(searchResults.product);
      });
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
              />
            </div>
          )}
          <button
            type='submit'
            className={cn(styles.button, styles.searchButton)}
            aria-label='Search by grade'
          >
            {isLoading ? (
              <div className='products__search-spinner spinner-border'>
                <span className='sr-only' />
              </div>
            ) : (
              <Image
                src='/images/icon-search.svg'
                width='17px'
                height='17px'
              />
            )}
          </button>
        </form>
      </div>
      <MenuSlider
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
      </MenuSlider>
    </>
  );
};

export default FiltersMobile;
