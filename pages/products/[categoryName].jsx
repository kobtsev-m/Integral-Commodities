import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import ProductsList from "components/product/product-list/product-list";
import ProductListTabs from "components/product/product-list-tabs/product-list-tabs";
import LatestOffers from "components/product/latest-offers/latest-offers";
import LoadingSpinner from "components/ui/loading";
import ProductListControls from "components/product/product-list-controls/product-list-controls";
import AskForQuote from "components/other-blocks/ask-for-quote/ask-for-quote";

import { getProductsApi, getOffersApi } from "api/api";
import { FILTERS, TABS } from "utils/const";

function getValueByKeyName(arr, key) {
  const searchedItem = arr.find(
    (item) => item.key.toLowerCase() === key.toLowerCase()
  );
  return searchedItem?.value;
}

function getArraysIntersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

function prepareFilterOptions(filter) {
  return filter.options.reduce(
    (acc, option) => ({ ...acc, [option]: false }),
    {}
  );
}

function getFiltersInitialState(category, optionalFields) {
  if (!category || !FILTERS[category.toUpperCase()]) {
    return {};
  }
  return FILTERS[category.toUpperCase()].reduce((acc, filter) => {
    let options = prepareFilterOptions(filter);
    if (optionalFields?.[filter.name]) {
      options = {
        ...options,
        [optionalFields[filter.name]]: true,
      };
    }
    return { ...acc, [filter.name]: { ...filter, options } };
  }, {});
}

function prepareProductDataValue(value) {
  return String(value)
    .split(",")
    .map((content) => content.trim());
}

function prepareFilterValues(filtersState) {
  return Object.entries(filtersState).reduce((acc, [filterName, filter]) => {
    const options = Object.entries(filter.options)
      .filter((item) => item[1])
      .map((item) => item[0]);
    if (options.length) {
      acc = { ...acc, [filterName]: { ...filter, options } };
    }
    return acc;
  }, {});
}

function filterProducts(filtersState, filteredProducts) {
  const fullFilledFilter = prepareFilterValues(filtersState);
  if (!Object.keys(fullFilledFilter).length) {
    return filteredProducts;
  }
  return filteredProducts.filter((product) => {
    const productData = product.card_data.slice();
    productData.push({ key: "grade", value: product.grade });
    return Object.values(fullFilledFilter).every((filter) => {
      const productValueToFilter = getValueByKeyName(productData, filter.key);
      const matches = getArraysIntersection(
        prepareProductDataValue(productValueToFilter),
        filter.options
      );
      return !!matches.length;
    });
  });
}

function filterProductsByCategory(products, category) {
  return products.filter((product) => product.category === category);
}

function HomePage() {
  const router = useRouter();
  const category = router.query.categoryName;

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filtersState, setFiltersState] = useState({});
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    if (category) {
      setIsLoading(true);
      Promise.all([
        getProductsApi(setProducts),
        getOffersApi(category, setOffers),
      ])
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    }
  }, [category]);

  useEffect(() => {
    setFiltersState(getFiltersInitialState(category, router.query));
  }, [router.query]);

  useEffect(() => {
    if (products?.length) {
      let filteredProducts = filterProductsByCategory(products, category);
      setFilteredProducts(filterProducts(filtersState, filteredProducts));
    }
  }, [category, products, filtersState]);

  const handleSearchSubmit = (products) => {
    setFiltersState(getFiltersInitialState(category));
    setTimeout(() => {
      const filteredProducts = filterProductsByCategory(products, category);
      setFilteredProducts(filteredProducts);
    });
  };

  const handleFiltersChange = (newFilterState) => {
    setFiltersState({ ...filtersState, ...newFilterState });
  };

  const handleFiltersReset = () => {
    setFiltersState(getFiltersInitialState(category));
  };

  return (
    <>
      <h2 className={"slogan root__slogan"}>
        Save time and get discount for ordering commodities online
      </h2>
      <section className={"products root__products"}>
        <ProductListTabs activeTab={category} tabs={TABS} />
        {category === "polymers" && (
          <ProductListControls
            category={category}
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
