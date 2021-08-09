import OrderNavigation from 'components/order/navigation/order-navigation';
import Breadcrumbs from 'components/ui/breadcrumbs';
import ComingSoon from 'components/other-blocks/coming-soon/coming-soon';
import styles from './order.module.css';

const breadcrumbs = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Order process'
  }
];

function OrderStep5() {
  return (
    <section className={styles.orderContainer}>
      <div className={styles.breadcrumbsContainer}>
        <Breadcrumbs list={breadcrumbs} />
      </div>
      <OrderNavigation nextLink='/' />
      <ComingSoon />
    </section>
  );
}

export default OrderStep5;
