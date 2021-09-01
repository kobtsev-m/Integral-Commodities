import OrderNavigation from 'components/order/navigation/order-navigation';
import Breadcrumbs from 'components/ui/breadcrumbs';
import ComingSoon from 'components/other-blocks/coming-soon/coming-soon';
import useTranslation from 'next-translate/useTranslation';
import styles from './order.module.css';

function OrderStep5() {
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
      <OrderNavigation nextLink='/' />
      <ComingSoon />
    </section>
  );
}

export default OrderStep5;
