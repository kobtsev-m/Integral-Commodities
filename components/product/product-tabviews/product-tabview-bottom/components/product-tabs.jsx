import classes from "./product-tabs.module.css";
import classnames from "classnames";
import { nanoid } from "nanoid";

function ProductBottomTabs(props) {
  const { tabs, isSulphur, activeTab, handleTabClick } = props;
  return (
    <ul className={classes.tabsList} style={isSulphur ? { justifyContent: 'left' } : { } }>
      {tabs.map((tab) => (
        <li
          key={`tab-${nanoid()}`}
          className={classnames(classes.tabItem, {
            [classes.tabItem_active]: tab === activeTab,
          })}
          style={isSulphur ? { marginLeft: '150px' } : { } }
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}

export default ProductBottomTabs;
