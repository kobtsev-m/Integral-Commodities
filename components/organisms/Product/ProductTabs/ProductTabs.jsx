import ProbuctTabsItem from './ProbuctTabsItem';

function convertFirstLetterToUpper(str) {
  return str?.slice(0, 1).toUpperCase() + str?.slice(1);
}

function ProductTabs(props) {
  const { activeTab, tabs } = props;
  const formattedActiveTab = convertFirstLetterToUpper(activeTab);

  return (
    <ul className='products__tabs'>
      {tabs.map((tab, i) => (
        <ProbuctTabsItem
          key={`tab-${i}`}
          tab={tab}
          isActive={tab === formattedActiveTab}
        />
      ))}
    </ul>
  );
}

export default ProductTabs;
