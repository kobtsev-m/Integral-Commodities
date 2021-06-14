import { useState } from "react";

import ProductBottomTabs from "./components/product-tabs";
import TabDocuments from "./components/tabs/tab-documents/tab-documents";
import TabApplication from "./components/tabs/tab-application/tab-application";
import TabSamples from "./components/tabs/tab-samples/tab-samples";
import TabPhotos from "./components/tabs/tab-photos";
import TabFaq from "./components/tabs/tab-faq";

const CATEGORY_TABS = {
  polymers: ["Documents", "Application", "Samples", "FAQ"],
  fertilizers: ["Documents", "Application", "FAQ"],
  sulphur: ["Documents", "Photos"],
};
const SULPHUR_PHOTOS_SRC = [
  "/images/sulphur/1.jpeg",
  "/images/sulphur/2.jpeg",
  "/images/sulphur/3.jpeg",
];

function ProductTabviewBottom({ product }) {
  const [activeTab, setActiveTab] = useState("Documents");

  const { doc_data: docData } = product;
  const [documentsObj, applicationObj, samplesObj] = docData;
  const { documents } = documentsObj;
  const { application } = applicationObj;
  const { samples } = samplesObj;
  const { category } = product;

  const photos = category === "sulphur" ? SULPHUR_PHOTOS_SRC : null;

  return (
    <>
      <ProductBottomTabs
        tabs={CATEGORY_TABS[category]}
        activeTab={activeTab}
        handleTabClick={setActiveTab}
      />
      {activeTab === "Documents" && <TabDocuments documents={documents} />}
      {activeTab === "Application" && (
        <TabApplication application={application} />
      )}
      {activeTab === "Samples" && <TabSamples samples={samples} />}
      {activeTab == "Photos" && <TabPhotos photos={photos} />}
      {activeTab === "FAQ" && <TabFaq />}
    </>
  );
}

export default ProductTabviewBottom;
