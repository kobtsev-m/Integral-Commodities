import { useState } from 'react';

import ProductBottomTabs from './ProductTabsViewBottomList';
import DocumentsTab from './DocumentsTab/DocumentsTab';
import ApplicationTab from './ApplicationTab/ApplicationTab';
import SamplesTab from './SamplesTab/SamplesTab';
import PhotosTab from './PhotosTab/PhotosTab';
import FaqTab from './FaqTab/FaqTab';

const CATEGORY_TABS = {
  polymers: ['Documents', 'Application', 'Samples', 'FAQ'],
  fertilizers: ['Documents', 'Application', 'FAQ'],
  sulphur: ['Documents', 'Photos']
};
const SULPHUR_PHOTOS_SRC = [
  '/images/sulphur/1.jpeg',
  '/images/sulphur/2.jpeg',
  '/images/sulphur/3.jpeg'
];

function ProductTabsViewBottom({ product }) {
  const [activeTab, setActiveTab] = useState('Documents');

  const { doc_data: docData } = product;
  const [documentsObj, applicationObj, samplesObj] = docData;
  const { documents } = documentsObj;
  const { application } = applicationObj;
  const { samples } = samplesObj;
  const { category } = product;

  const photos = category === 'sulphur' ? SULPHUR_PHOTOS_SRC : null;

  return (
    <>
      <ProductBottomTabs
        tabs={CATEGORY_TABS[category]}
        activeTab={activeTab}
        handleTabClick={setActiveTab}
      />
      {activeTab === 'Documents' && <DocumentsTab documents={documents} />}
      {activeTab === 'Application' && (
        <ApplicationTab application={application} />
      )}
      {activeTab === 'Samples' && <SamplesTab samples={samples} />}
      {activeTab === 'Photos' && <PhotosTab photos={photos} />}
      {activeTab === 'FAQ' && <FaqTab />}
    </>
  );
}

export default ProductTabsViewBottom;
