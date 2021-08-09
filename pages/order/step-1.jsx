import styles from './order.module.css';
import Button from 'components/ui/button';
import OrderNavigation from 'components/order/navigation/order-navigation';
import Breadcrumbs from 'components/ui/breadcrumbs';
import useTranslation from 'next-translate/useTranslation';

function OrderStep1() {
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
      <OrderNavigation nextLink='/order/step-2' />
      <p className={styles.orderContainer__intro}>
        {t('order:step1.main text')}
      </p>
      <h1 className={styles.orderContainer__title}>
        {t('order:step1.grade title')}
      </h1>
      <div className={styles.orderContainer__detailsRowBg} />
      <ul className={styles.orderContainer__detailsGrid}>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src='./images/icon-cart.svg'
              alt='Cart icon'
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            {t('order:step1.order value')}
          </p>
          <p className={styles.orderContainer__detailValue}>&#36;152 000</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src='./images/icon-money.svg'
              alt='Cart icon'
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            {t('order:step1.price per m/t')}
          </p>
          <p className={styles.orderContainer__detailValue}>&#36;760</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src='./images/icon-delivery.svg'
              alt='Cart icon'
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            {t('order:step1.order volume m/t')}
          </p>
          <p className={styles.orderContainer__detailValue}>&#36;200</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src='./images/icon-map.svg'
              alt='Cart icon'
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            {t('order:step1.place of delivery')}
          </p>
          <p className={styles.orderContainer__detailValue}>
            {t('order:step1.place of delivery value')}
          </p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src='./images/icon-box.svg'
              alt='Cart icon'
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            {t('order:step1.terms of delivery')}
          </p>
          <p className={styles.orderContainer__detailValue}>EXW</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src='./images/icon-calendar.svg'
              alt='Cart icon'
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            {t('order:step1.delivery period days')}
          </p>
          <p className={styles.orderContainer__detailValue}>60</p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src='./images/icon-creditcard.svg'
              alt='Cart icon'
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            {t('order:step1.terms of payment')}
          </p>
          <p className={styles.orderContainer__detailValue}>
            {t('order:step1.terms of payment value')}
          </p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src='./images/icon-client.svg'
              alt='Cart icon'
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            {t('order:step1.type of client')}
          </p>
          <p className={styles.orderContainer__detailValue}>
            {t('order:step1.type of client value')}
          </p>
        </li>
        <li className={styles.orderContainer__detailsItem}>
          <span className={styles.orderContainer__detailIconContainer}>
            <img
              className={styles.orderContainer__detailIcon}
              src='./images/icon-document.svg'
              alt='Cart icon'
            />
          </span>
          <p className={styles.orderContainer__detailTitle}>
            {t('order:step1.deal type')}
          </p>
          <p className={styles.orderContainer__detailValue}>
            {t('order:step1.deal type value')}
          </p>
        </li>
      </ul>
      <div className={styles.orderContainer__controlsContainer}>
        <Button link='/order/step-2'>
          <span className={styles.orderContainer__confirmButton}>
            {t('order:step1.submit button')}
          </span>
        </Button>
      </div>
    </section>
  );
}

export default OrderStep1;
