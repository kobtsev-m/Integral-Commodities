import { nanoid } from 'nanoid';

import cn from 'classnames';
import styles from './product-tabs.module.css';

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

function ProductTabs(props) {
  const tabs = props.category === 'polymers' ? polymersTabs : otherTypesTabs;
  return (
    <div className={cn(styles.productTabs__listWrapper, 'sticky-top')}>
      <ul className={styles.productTabs__list}>
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
