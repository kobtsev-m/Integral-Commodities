import ProductListTab from './components/product-list-tab';

function convertFirstLetterToUpper(str) {
  return str?.slice(0, 1).toUpperCase() + str?.slice(1);
}

function ProductListTabs(props) {
  const { activeTab, tabs } = props;
  const formattedActiveTab = convertFirstLetterToUpper(activeTab);

  return (
    <ul className={'products__tabs'}>
      {tabs.map((tab, i) => (
        <ProductListTab
          key={`tab-${i}`}
          tab={tab}
          isActive={tab === formattedActiveTab}
        />
      ))}
    </ul>
  );
}

export default ProductListTabs;
