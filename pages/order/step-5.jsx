import OrderNavigation from 'components/organisms/Order/components/OrderNavigation/OrderNavigation';
import Breadcrumbs from 'components/atoms/Breadcrumbs/Breadcrumbs';
import ComingSoon from 'components/organisms/Other/ComingSoon/ComingSoon';
import useTranslation from 'next-translate/useTranslation';
import styles from '../../components/organisms/Order/styles/Order.module.css';

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
