import { useState } from "react";
import cn from "classnames";
import classes from "./FilterControls.module.css";

import SliderMenu from "../SliderMenu";
import FilterMenu from "./FilterMenu";
import { getProductsBySearchStringApi } from "../../api/api";

const FilterControls = (props) => {
  const { filters, count, onChange, onSearch } = props;
  const [searchValue, setSearchValue] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleMenuClose = () => setIsFilterOpen(false);
  const handleSearchButtonClick = async (evt) => {
    evt.preventDefault();
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
          className={cn(classes.button, classes.filterButton)}
          onClick={() => setIsFilterOpen(true)}
        >
          Filters
        </button>
        <form
          className={cn({ [classes.searchForm_active]: isSearchActive })}
          action
          onSubmit={handleSearchButtonClick}
        >
          <input
            className={cn(classes.searchInput, {
              [classes.searchInput_active]: isSearchActive,
            })}
            type="search"
            placeholder="Grade"
            value={searchValue}
            onChange={(evt) => setSearchValue(evt.target.value)}
          />
          <button
            type="submit"
            className={cn(classes.button, classes.searchButton)}
            aria-label="Search by grade"
          />
        </form>
      </div>
      <SliderMenu title="Filters" open={isFilterOpen} onClose={handleMenuClose}>
        <FilterMenu
          filters={filters}
          onChange={onChange}
          productsCount={count}
          onClose={handleMenuClose}
        />
      </SliderMenu>
    </>
  );
};

export default FilterControls;
