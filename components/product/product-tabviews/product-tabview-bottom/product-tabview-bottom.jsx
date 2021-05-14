import ProductBottomTabs from './components/product-tabs';
import TabDocuments from './components/tabs/tab-documents/tab-documents';
import TabApplication from './components/tabs/tab-application/tab-application';
import TabSamples from './components/tabs/tab-samples/tab-samples';
import TabFaq from './components/tabs/tab-faq';
import { useState } from 'react';

const TABS = ['Documents', 'Application', 'Samples', 'FAQ'];
const CATEGORY_TABS = {
  polymers: TABS,
  fertilizers: TABS.filter((tab) => tab !== 'Samples'),
  sulphur: TABS.filter(
    (tab) => tab !== 'Samples' && tab !== 'Application' && tab !== 'FAQ'
  )
};

function ProductTabviewBottom({ product }) {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const { doc_data: docData } = product;
  const [documentsObj, applicationObj, samplesObj] = docData;

  const { documents } = documentsObj;
  const { application } = applicationObj;
  const { samples } = samplesObj;

  const { category } = product;
  const filteredTabs = CATEGORY_TABS[category] || TABS;

  const isSulphur = category === 'sulphur';

  return (
    <>
      <ProductBottomTabs
        tabs={filteredTabs}
        activeTab={activeTab}
        handleTabClick={setActiveTab}
        isSulphur={isSulphur}
      />
      {activeTab === 'Documents' && <TabDocuments documents={documents} />}
      {activeTab === 'Application' && (
        <TabApplication application={application} />
      )}
      {activeTab === 'Samples' && <TabSamples samples={samples} />}
      {activeTab === 'FAQ' && <TabFaq />}
    </>
  );
}

export default ProductTabviewBottom;
