import { useState } from 'react';
import cn from 'classnames';
import classes from './filter-controls.module.css';

import SliderMenu from '../slider-menu/slider-menu';
import FilterMenu from './filter-menu';
import { getProductsBySearchStringApi } from '../../api/api';

const FilterControls = (props) => {
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

  const handleMenuClose = () => {
    setIsFilterOpen(false);
  };

  const handleSearchButtonClick = async (e) => {
    e.preventDefault();
    if (!isSearchActive) {
      setIsSearchActive(true);
    } else {
      const searchResult = await getProductsBySearchStringApi(searchValue);
      onSearch(searchResult);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <button
          type={'button'}
          className={cn(classes.button, classes.filterButton)}
          onClick={() => setIsFilterOpen(true)}
        >
          Filters
        </button>
        <form
          className={cn({ [classes.searchForm_active]: isSearchActive })}
          onSubmit={handleSearchButtonClick}
        >
          <input
            className={cn(classes.searchInput, {
              [classes.searchInput_active]: isSearchActive
            })}
            type={'search'}
            placeholder={'Grade'}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            type={'submit'}
            className={cn(classes.button, classes.searchButton)}
            aria-label={'Search by grade'}
          />
        </form>
      </div>
      <SliderMenu
        title={'Filters'}
        open={isFilterOpen}
        onClose={handleMenuClose}
      >
        <FilterMenu
          filtersState={filtersState}
          filtersCount={filtersCount}
          productsCount={productsCount}
          onChange={onChange}
          onClose={handleMenuClose}
          onReset={onReset}
        />
      </SliderMenu>
    </>
  );
};

export default FilterControls;
