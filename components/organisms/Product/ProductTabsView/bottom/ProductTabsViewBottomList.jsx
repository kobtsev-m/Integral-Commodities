import { useState, useEffect, useRef } from 'react';
import useWindowDimensions from 'utils/hooks/useWindowDemensions';
import Trans from 'next-translate/Trans';

import cn from 'classnames';
import styles from './ProductTabsViewBottom.module.css';

const setClippingRect = (element, width, left) => {
  element.style.width = width + 'px';
  element.style.left = left + 'px';
};

function ProductTabsViewBottomList(props) {
  const { tabs, activeTab, handleTabClick } = props;

  const [firstElementOffset, setFirstElementOffset] = useState(null);
  const tabsElements = useRef();
  const activeTabLine = useRef();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!tabsElements.current || !width) {
      return;
    }
    const tabs = tabsElements.current.children;
    setFirstElementOffset(tabs[0].getBoundingClientRect().x);
  }, [tabsElements, width]);

  useEffect(() => {
    if (!firstElementOffset && firstElementOffset !== 0) {
      return;
    }

    const activeTabSizes = tabsElements.current
      .getElementsByClassName(styles.tabItem_active)[0]
      .getBoundingClientRect();

    setClippingRect(
      activeTabLine.current,
      activeTabSizes.width,
      activeTabSizes.left - firstElementOffset
    );
  }, [firstElementOffset, activeTab]);

  return (
    <div className={cn(styles.tabsList__wrapper, 'sticky-top')}>
      <ul className={styles.tabsList} ref={tabsElements}>
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
        {tabs.map((tab, i) => (
          <li
            key={i}
            className={cn(styles.tabItem, {
              [styles.tabItem_active]: tab === activeTab
            })}
          >
            <button
              className={styles.tabsList__button}
              onClick={() => handleTabClick(tab)}
            >
              <Trans i18nKey={`product:tabs.${tab.toLowerCase()}`} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductTabsViewBottomList;
