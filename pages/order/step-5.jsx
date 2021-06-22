import { useRouter } from "next/router";

import OrderNavigation from "../../components/order/order-navigation";
import Breadcrumbs from "../../components/ui/breadcrumbs";
import styles from "./step-1.module.css";
import ComingSoon from "../../components/other-blocks/coming-soon/coming-soon";

function OrderStep5() {
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
      <OrderNavigation nextLink="/" />
      <ComingSoon />
    </section>
  );
}

export default OrderStep5;
