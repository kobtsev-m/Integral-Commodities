import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from 'hooks/useActions';

import ProductsList from 'components/home/ProductList/ProductList';
import ProductTabs from 'components/product/ProductTabs/ProductTabs';
import LatestOffers from 'components/home/LatestOffers/LatestOffers';
import LoadingSpinner from 'components/common/Loaders/Spinner';
import FiltersDesktop from 'components/home/Filters/desktop/FiltersDesktop';
import AskForQuote from 'components/home/AskForQuote/AskForQuote';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import { FILTERS, TABS } from 'utils/constants';
import { getKey, getTransValue } from 'utils/i18n.utils';

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

function HomePage() {
  const router = useRouter();
  const category = router.query.categoryName;
  const { t, lang } = useTranslation();

  const { products, isProductsLoading } = useSelector(
    (state) => state.products
  );
  const { offers, isOffersLoading } = useSelector((state) => state.offers);
  const { fetchProducts, fetchOffers } = useActions();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filtersState, setFiltersState] = useState({});

  useEffect(() => {
    fetchProducts(lang);
    fetchOffers(lang, category);
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
    setFiltersState(getFiltersInitialState(t, category));
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
        <ProductTabs activeTab={category} tabs={TABS} />
        {category === 'polymers' && (
          <FiltersDesktop
            filteredProductsCount={filteredProducts.length}
            category={category}
            filtersState={filtersState}
            onSearchSubmit={handleSearchSubmit}
            onFiltersChange={handleFiltersChange}
            onReset={handleFiltersReset}
          />
        )}
        {isProductsLoading ? (
          <LoadingSpinner />
        ) : (
          <ProductsList products={filteredProducts} />
        )}
        {isOffersLoading ? (
          <LoadingSpinner />
        ) : (
          <LatestOffers offers={offers} />
        )}
        <AskForQuote products={products} />
      </section>
    </>
  );
}

export default HomePage;
