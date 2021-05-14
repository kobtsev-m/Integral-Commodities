import cn from 'classnames';
import styles from './product-tabs.module.css';
import { nanoid } from 'nanoid';

function ProductBottomTabs(props) {
  const { tabs, isSulphur, activeTab, handleTabClick } = props;
  return (
    <ul
      className={styles.tabsList}
      style={isSulphur ? { justifyContent: 'left' } : {}}
    >
      {tabs.map((tab) => (
        <li
          key={`tab-${nanoid()}`}
          className={cn(styles.tabItem, {
            [styles.tabItem_active]: tab === activeTab
          })}
          style={isSulphur ? { marginLeft: '150px' } : {}}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}

export default ProductBottomTabs;
