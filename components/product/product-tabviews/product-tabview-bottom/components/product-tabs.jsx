import cn from "classnames";
import styles from "./product-tabs.module.css";
import { nanoid } from "nanoid";

function ProductBottomTabs(props) {
  const { tabs, activeTab, handleTabClick } = props;
  return (
    <ul className={cn(styles.tabsList, "sticky-top")}>
      {tabs.map((tab) => (
        <li
          key={`tab-${nanoid()}`}
          className={cn(styles.tabItem, {
            [styles.tabItem_active]: tab === activeTab,
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
