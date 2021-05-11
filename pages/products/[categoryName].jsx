import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ProductsList from "../../components/product/product-list/product-list";
import ProductListTabs from "../../components/product/product-list-tabs/product-list-tabs";
import LatestOffers from "../../components/product/latest-offers/latest-offers";
import LoadingSpinner from "../../components/ui/loading";
import ProductListControls from "../../components/product/product-list-controls/product-list-controls";
import AskForQuote from "../../components/other-blocks/ask-for-quote/ask-for-quote";

import { getAllOffers, getAllProducts } from "../../api/api";
import { Filter, TABS } from "../../utils/const";

function prepareFilterOptions(filter) {
  return filter.options.reduce((acc, option) => {
    acc = { ...acc, [option]: false };
    return acc;
  }, {});
}

function getFiltersInitialState(category) {
  if (category && Filter[category.toUpperCase()]) {
    return Filter[category.toUpperCase()].reduce((acc, filter) => {
      const filterOptions = prepareFilterOptions(filter);
      acc = {
        ...acc,
        [filter.name]: filterOptions,
      };
      return acc;
    }, {});
  }
  return {};
}

function HomePage() {
  const router = useRouter();
  const category = router.query.categoryName;

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [filtersState, setFiltersState] = useState({});

  useEffect(() => {
    setFiltersState(getFiltersInitialState(category));
  }, [category]);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getAllProducts(setProducts), getAllOffers(setOffers)])
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [setProducts]);

  useEffect(() => {
    if (products.length) {
      let filteredProducts = filterProductsByCategory(products, category);
      filteredProducts = filterProducts(filtersState, filteredProducts);
      setFilteredProducts(filteredProducts);
    }
  }, [products, category, filtersState]);

  function handleSearchSubmit(products) {
    setFiltersState(getFiltersInitialState(category));
    setTimeout(() => {
      const filteredProducts = filterProductsByCategory(products, category);
      setFilteredProducts(filteredProducts);
    });
  }

  function filterProductsByCategory(products, category) {
    return products.filter((product) => product.category === category);
  }

  function prepareProductDataValue(value) {
    return String(value)
      .split(",")
      .map((content) => content.trim());
  }

  function prepareFilterValues(filtersState) {
    return Object.entries(filtersState).reduce(
      (acc, [filterName, filterOptions]) => {
        const newFilterOptions = Object.entries(filterOptions)
          .filter(
            ([_filterOptionName, filterOptionsValue]) => filterOptionsValue
          )
          .map((item) => item[0]);
        if (newFilterOptions.length) {
          acc = { ...acc, [filterName]: newFilterOptions };
        }
        return acc;
      },
      {}
    );
  }

  function getValueByKeyName(sourceArr, key) {
    return sourceArr.find(
      (item) => item.key.toLowerCase() === key.toLowerCase()
    )?.value;
  }

  function getArraysIntersection(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item));
  }

  function filterProducts(filtersState, filteredProducts) {
    const fulfilledFilter = prepareFilterValues(filtersState);

    if (Object.keys(fulfilledFilter).length) {
      filteredProducts = filteredProducts.filter((product) => {
        const productData = product.card_data.slice();
        productData.push({ key: "Grade", value: product.grade });
        return Object.entries(fulfilledFilter).every(
          ([filterName, filterOptions]) => {
            const productValueToFilter = getValueByKeyName(
              productData,
              filterName
            );

            const matches = getArraysIntersection(
              prepareProductDataValue(productValueToFilter),
              filterOptions
            );

            return !!matches.length;
          }
        );
      });
    }

    return filteredProducts;
  }

  function handleFiltersChange(filtersValues) {
    const [filterName, valueToChange] = Object.entries(filtersValues)[0];

    setFiltersState({
      ...filtersState,
      [filterName]: { ...filtersState[filterName], ...valueToChange },
    });
  }

  function handleFiltersReset() {
    setFiltersState(getFiltersInitialState(category));
  }

  return (
    <>
      <h2 className="slogan root__slogan">
        Save time and get discount for ordering commodities online
      </h2>
      <section className="products root__products">
        <ProductListTabs activeTab={category} tabs={TABS} />
        {category === "polymers" && (
          <ProductListControls
            filtersState={filtersState}
            onSearchSubmit={handleSearchSubmit}
            onFiltersChange={handleFiltersChange}
            onReset={handleFiltersReset}
          />
        )}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <ProductsList products={filteredProducts} />
            <LatestOffers offers={offers} />
            <AskForQuote />
          </>
        )}
      </section>
    </>
  );
}

export default HomePage;
