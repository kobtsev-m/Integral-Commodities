import Breadcrumbs from 'components/ui/Breadcrumbs/Breadcrumbs';
import OrderNavigation from 'components/blocks/Order/components/OrderNavigation/OrderNavigation';
import PaymentForm from 'components/blocks/Order/components/Forms/PaymentForm';
import useTranslation from 'next-translate/useTranslation';

import cn from 'classnames';
import styles from '../../components/blocks/Order/styles/Order.module.css';

function OrderStep4() {
  const { t } = useTranslation();
  const breadcrumbs = [
    {
      title: t('common:menu.home'),
      link: '/'
    },
    {
      title: t('common:menu.order process')
    }
  ];
  return (
    <section className={styles.orderContainer}>
      <div className={styles.breadcrumbsContainer}>
        <Breadcrumbs list={breadcrumbs} />
      </div>
      <div className={styles.step3__orderNavigationContainer}>
        <OrderNavigation nextLink='/order/step-5' />
      </div>
      <p className={cn(styles.step3__textContent, styles.step3__beforeForm)}>
        {t('order:step4.main text')}
      </p>
      <PaymentForm />
    </section>
  );
}

export default OrderStep4;
