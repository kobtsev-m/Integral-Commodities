import { useRouter } from 'next/router';
import { useState, useEffect, memo } from 'react';

import ProductTabs from './components/product-tabs';
import PriceMap from './components/tabs/price-map/price-map';
import PriceCalculator from './components/tabs/price-calculator/price-calculator';
import ProductTab from './components/tabs/product-tab/product-tab';
import ProductAnalogs from './components/tabs/product-analogs/product-analogs';

import { initialOfferFormData } from './data/values';

function ProductTabviewTop({ product, ports, factories }) {
  const router = useRouter();
  const productId = +router.query.productId;

  const [activeTab, setActiveTab] = useState(router.query.tab ?? 'prices');
  const [offerFormData, setOfferFormData] = useState(initialOfferFormData);

  useEffect(() => {
    router.replace(`/products/id/${productId}/?tab=${activeTab}`, null, {
      scroll: false
    });
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAskForQuote = (offerFormChangedFields) => {
    setOfferFormData({ ...offerFormData, ...offerFormChangedFields });
    setActiveTab('offer');
  };

  return (
    <>
      <ProductTabs
        activeTab={activeTab}
        category={product.category}
        onTabClick={handleTabClick}
      />
      {activeTab === 'prices' && (
        <PriceMap
          ports={ports}
          factories={factories}
          onAskForQuote={handleAskForQuote}
        />
      )}
      {activeTab === 'offer' && (
        <PriceCalculator
          productId={product.id}
          initialFormData={offerFormData}
        />
      )}
      {activeTab === 'product' && <ProductTab product={product} />}
      {activeTab === 'analogs' && <ProductAnalogs product={product} />}
    </>
  );
}

export default memo(ProductTabviewTop);
