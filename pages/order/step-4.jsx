import Breadcrumbs from 'components/ui/breadcrumbs';
import OrderNavigation from 'components/order/navigation/order-navigation';
import PaymentForm from 'components/order/forms/payment-form';

import cn from 'classnames';
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

function OrderStep4(props) {
  return (
    <section className={styles.orderContainer}>
      <div className={styles.breadcrumbsContainer}>
        <Breadcrumbs list={breadcrumbs} />
      </div>
      <div className={styles.step3__orderNavigationContainer}>
        <OrderNavigation nextLink={'/order/step-5'} />
      </div>
      <p className={cn(styles.step3__textContent, styles.step3__beforeForm)}>
        Please select one of the following payment methods:
      </p>
      <PaymentForm />
    </section>
  );
}

export default OrderStep4;
