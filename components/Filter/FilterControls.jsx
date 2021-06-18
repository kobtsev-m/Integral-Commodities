import { useState } from "react";
import cn from "classnames";
import classes from "./FilterControls.module.css";

import SliderMenu from "../SliderMenu";
import FilterMenu from "./FilterMenu";

const FilterControls = (props) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { filters, onChange } = props;

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
        <button
          className={cn(classes.button, classes.searchButton)}
          aria-label="Search by grade"
        />
      </div>
      <SliderMenu title="Filters" open={isFilterOpen} onClose={handleMenuClose}>
        <FilterMenu filters={filters} onChange={onChange} />
      </SliderMenu>
    </>
  );
};

export default FilterControls;
