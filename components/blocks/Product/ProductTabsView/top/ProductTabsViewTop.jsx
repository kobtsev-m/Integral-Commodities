import { useRouter } from 'next/router';
import { useState, useEffect, memo } from 'react';
import slugify from 'react-slugify';

import ProductTabsViewTopList from './ProductTabsViewTopList';
import PriceMap from './PriceMap/components/PriceMap';
import PriceCalculator from './PriceCalculator/components/PriceCalculator';
import InfoTab from './InfoTab/InfoTab';
import AnalogsTab from './AnalogsTab/AnalogsTab';

import { initialOfferFormData } from './PriceCalculator/data/values';

function ProductTabsViewTop({ product, ports, factories }) {
  const router = useRouter();
  const { categoryName, productGrade } = router.query;

  const [activeTab, setActiveTab] = useState(router.query.tab ?? 'prices');
  const [offerFormData, setOfferFormData] = useState(initialOfferFormData);

  useEffect(() => {
    const query = activeTab !== 'prices' ? `?tab=${activeTab}` : '';
    const link = `/products/${categoryName}/${productGrade}${query}`;
    router.replace(link, null, { scroll: false });
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
      <ProductTabsViewTopList
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
      {activeTab === 'product' && <InfoTab product={product} />}
      {activeTab === 'analogs' && <AnalogsTab product={product} />}
    </>
  );
}

export default memo(ProductTabsViewTop);
