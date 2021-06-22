import styles from "./step-1.module.css";
import Button from "../../components/ui/button";
import OrderNavigation from "../../components/order/order-navigation";
import Breadcrumbs from "../../components/ui/breadcrumbs";

function OrderStep1() {
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Order process",
    },
  ];
  return (
    <section className={styles.orderContainer}>
      <div className={styles.breadcrumbsContainer}>
        <Breadcrumbs list={breadcrumbs} />
      </div>
      <OrderNavigation nextLink="/order/step-2" />
      <p className={styles.orderContainer__intro}>
        Upon placing the Order, You will receive the deal recap similar to the
        below one and will be able to change or to confirm it. The deal
        confirmation is subject to satisfactory KYC.
      </p>
      <h1 className={styles.orderContainer__title}>Grade: B-Y250</h1>
      <div className={styles.orderContainer__detailsRowBg} />
      <ul className={styles.orderContainer__detailsGrid}>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src="./images/icon-cart.svg"
              alt="Cart icon"
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>Order value</p>
          <p className={styles.orderContainer__detailValue}>&#36;152 000</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src="./images/icon-money.svg"
              alt="Cart icon"
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>Price per M/T</p>
          <p className={styles.orderContainer__detailValue}>&#36;760</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src="./images/icon-delivery.svg"
              alt="Cart icon"
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>Order volume M/T</p>
          <p className={styles.orderContainer__detailValue}>&#36;152 000</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src="./images/icon-map.svg"
              alt="Cart icon"
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            Place of delivery
          </p>
          <p className={styles.orderContainer__detailValue}>
            Novosibirsk. Russian Federation
          </p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src="./images/icon-box.svg"
              alt="Cart icon"
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            Terms of delivery
          </p>
          <p className={styles.orderContainer__detailValue}>EXW</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src="./images/icon-calendar.svg"
              alt="Cart icon"
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            Delivery period days
          </p>
          <p className={styles.orderContainer__detailValue}>60</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src="./images/icon-creditcard.svg"
              alt="Cart icon"
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>Terms of payment</p>
          <p className={styles.orderContainer__detailValue}>Pre-payment</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src="./images/icon-client.svg"
              alt="Cart icon"
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>Type of client</p>
          <p className={styles.orderContainer__detailValue}>Distrubitor</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src="./images/icon-document.svg"
              alt="Cart icon"
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>Deal type</p>
          <p className={styles.orderContainer__detailValue}>Spot</p>
        </li>
      </ul>
      <div className={styles.orderContainer__controlsContainer}>
        <Button link="/order/step-2">
          <span className={styles.orderContainer__confirmButton}>
            Confirm deal
          </span>
        </Button>
      </div>
    </section>
  );
}

export default OrderStep1;
