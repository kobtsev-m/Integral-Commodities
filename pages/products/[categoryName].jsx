import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ProductsList from 'components/product/product-list/product-list';
import ProductListTabs from 'components/product/product-list-tabs/product-list-tabs';
import LatestOffers from 'components/product/latest-offers/latest-offers';
import LoadingSpinner from 'components/ui/loading';
import ProductListControls from 'components/product/product-list-controls/product-list-controls';
import AskForQuote from 'components/other-blocks/ask-for-quote/ask-for-quote';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import { getProductsApi, getOffersApi } from 'api/api';
import { FILTERS, TABS } from 'utils/const';
import { getKey, getTransValue } from 'utils/i18n';

function getValueByKeyName(arr, key) {
  const searchedItem = arr.find(
    (item) => item.key.toLowerCase() === key.toLowerCase()
  );
  return searchedItem?.value;
}

function getArraysIntersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

function getTransOption(t, filter, option) {
  return getTransValue(t, ['common:filter', getKey(filter.key)], option);
}

function prepareFilterOptions(t, filter) {
  return filter.options.reduce(
    (acc, option) => ({ ...acc, [getTransOption(t, filter, option)]: false }),
    {}
  );
}

function getFiltersInitialState(t, category, optionalFields) {
  if (!category || !FILTERS[category.toUpperCase()]) {
    return {};
  }
  return FILTERS[category.toUpperCase()].reduce((acc, filter) => {
    let options = prepareFilterOptions(t, filter);
    if (optionalFields?.[filter.name]) {
      options = {
        ...options,
        [getTransOption(t, filter, optionalFields[filter.name])]: true
      };
    }
    return { ...acc, [filter.name]: { ...filter, options } };
  }, {});
}

function prepareProductDataValue(value) {
  return String(value)
    .split(',')
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
    productData.push({ key: 'grade', value: product.grade });
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

function renameFiltersOptions(t, filtersState) {
  Object.entries(filtersState).forEach(([filter, { key, options }]) => {
    const newOptions = Object.keys(options).reduce((acc, option) => {
      const newKey = getTransValue(t, ['common:filter', getKey(key)], option);
      return { ...acc, [newKey]: options[option] };
    }, {});
    filtersState[filter].options = newOptions;
  });
  return filtersState;
}

function HomePage() {
  const router = useRouter();
  const category = router.query.categoryName;

  const { t, lang } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filtersState, setFiltersState] = useState({});
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    if (category) {
      setIsLoading(true);
      Promise.all([
        getProductsApi(lang, setProducts),
        getOffersApi(lang, category, setOffers)
      ])
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    }
  }, [lang, category]);

  useEffect(() => {
    setFiltersState(getFiltersInitialState(t, category, router.query));
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

  const handleFiltersChange = (newFiltersState) => {
    setFiltersState({ ...filtersState, ...newFiltersState });
  };

  const handleFiltersReset = () => {
    router.replace(`/products/${category}`, null, { scroll: false });
    setFiltersState(getFiltersInitialState(category));
  };

  return (
    <>
      <h2 className='slogan root__slogan'>
        <Trans i18nKey='common:slogan' components={[<br />]} />
      </h2>
      <section className='products root__products'>
        <ProductListTabs activeTab={category} tabs={TABS} />
        {category === 'polymers' && (
          <ProductListControls
            filteredProductsCount={filteredProducts.length}
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
            <ProductsList loading={isLoading} products={filteredProducts} />
            <LatestOffers loading={isLoading} offers={offers} />
            <AskForQuote products={products} />
          </>
        )}
      </section>
    </>
  );
}

export default HomePage;
