import classes from "./product-tabs.module.css";
import classnames from "classnames";
import { useRouter } from "next/router";

const polymersTabs = {
  Offer: `Offer`,
  Product: `Product`,
  Analogs: `Analogs`,
};

const anotherTypesTabs = {
  Offer: `Offer`,
  Product: `Product`,
};

const tabStyles = classes.productTabs__item;
const activeTabStyles = classes.productTabs__item_active;

function ProductTabs({ productCategory }) {
  const router = useRouter();

  const productId = router.query.productId;
  const tabParameter = router.query.tab;

  const Tab = productCategory === 'polymers' ? polymersTabs : anotherTypesTabs;

  function getItemClassNames(isActive) {
    return classnames(tabStyles, {
      [activeTabStyles]: isActive,
    });
  }

  function handleTabClick(tab) {
    router.replace(`/products/id/${productId}/?tab=${tab.toLowerCase()}`);
  }

  return (
    <div className={classes.productTabs__listWrapper}>
      <ul
        className={
          classnames(classes.productTabs__list, { [classes.productTabs__list_compressed]: tabParameter === 'offer' })
        }
      >
        {Object.values(Tab).map((tab) => (
          <li
            key={`tab-${tab}`}
            className={getItemClassNames(tab.toLowerCase() === tabParameter)}
          >
            <button
              className={classes.productTabs__button}
              onClick={handleTabClick.bind(null, tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductTabs;
