import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import useWindowDimensions from 'utils/hooks/useWindowDemensions';

import cn from 'classnames';
import styles from './product-tabs.module.css';

const setClippingRect = (element, width, left) => {
  element.style.width = width + 'px';
  element.style.left = left + 'px';
};

function ProductBottomTabs(props) {
  const { tabs, activeTab, handleTabClick } = props;

  const [firstElementOffset, setFirstElementOffset] = useState(0);
  const tabsElements = useRef();
  const activeTabLine = useRef();
  const size = useWindowDimensions();

  useEffect(() => {
    const tabs = tabsElements.current.children;
    setFirstElementOffset(tabs[0].getBoundingClientRect().x);
  }, [size]);

  useEffect(() => {
    const activeTab = tabsElements.current
      .getElementsByClassName(styles.tabItem_active)[0]
      .getBoundingClientRect();

    setClippingRect(
      activeTabLine.current,
      activeTab.width,
      activeTab.left - firstElementOffset
    );
  }, [size, firstElementOffset, props.activeTab]);

  return (
    <ul className={cn('sticky-top', styles.tabsList)} ref={tabsElements}>
      <span
        ref={activeTabLine}
        style={{
          width: 100,
          height: 2,
          position: 'absolute',
          backgroundColor: 'var(--p-blue)',
          bottom: 0,
          left: 0,
          transition: '200ms ease'
        }}
      />
      {tabs.map((tab) => (
        <li
          key={`tab-${nanoid()}`}
          className={cn(styles.tabItem, {
            [styles.tabItem_active]: tab === activeTab
          })}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}

export default ProductBottomTabs;
