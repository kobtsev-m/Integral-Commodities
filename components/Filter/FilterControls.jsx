import { useState } from "react";
import cn from "classnames";
import classes from "./FilterControls.module.css";

import SliderMenu from "../SliderMenu";
import FilterMenu from "./FilterMenu";

const FilterControls = (props) => {
  const { filters, count, onChange } = props;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleMenuClose = () => setIsFilterOpen(false);

  return (
    <>
      <div className={classes.root}>
        <button
          className={cn(classes.button, classes.filterButton)}
          onClick={() => setIsFilterOpen(true)}
        >
          Filters
        </button>
        <input
          className={cn(classes.searchInput, {
            [classes.searchInput_active]: isSearchActive,
          })}
          type="text"
          placeholder="Grade"
        />
        <button
          className={cn(classes.button, classes.searchButton)}
          onClick={() => setIsSearchActive(true)}
          aria-label="Search by grade"
        />
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
