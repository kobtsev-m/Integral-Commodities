import { nanoid } from 'nanoid';

import cn from 'classnames';
import styles from './product-tabs.module.css';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../../../../utils/hooks/useWindowDemensions';

const polymersTabs = {
  Prices: 'prices',
  Offer: 'offer',
  Product: 'product',
  Analogs: 'analogs'
};

const otherTypesTabs = {
  Prices: 'prices',
  Offer: 'offer',
  Product: 'product'
};

const setClippingRect = (element, width, left) => {
  element.style.width = width + 'px';
  element.style.left = left + 'px';
};

function ProductTabs(props) {
  const tabs = props.category === 'polymers' ? polymersTabs : otherTypesTabs;
  const tabsElements = useRef();
  const activeTabLine = useRef();
  const [firstElementOffset, setFirstElementOffset] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const tabs = tabsElements.current.children;
    setFirstElementOffset(tabs[0].getBoundingClientRect().x);
  }, [width]);

  useEffect(() => {
    const activeTab = tabsElements.current
      .getElementsByClassName(styles.productTabs__item_active)[0]
      .getBoundingClientRect();

    setClippingRect(
      activeTabLine.current,
      activeTab.width,
      activeTab.left - firstElementOffset
    );
  }, [width, firstElementOffset, props.activeTab]);

  return (
    <div className={cn(styles.productTabs__listWrapper, 'sticky-top')}>
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
      <ul className={styles.productTabs__list} ref={tabsElements}>
        {Object.entries(tabs).map(([tabLabel, tabName]) => (
          <li
            key={nanoid()}
            className={cn(styles.productTabs__item, {
              [styles.productTabs__item_active]: tabName === props.activeTab
            })}
          >
            <button
              className={styles.productTabs__button}
              onClick={() => props.onTabClick(tabName)}
            >
              {tabLabel}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductTabs;
