import Link from 'next/link';
import { useRouter } from 'next/router';

import Breadcrumbs from 'components/atoms/Breadcrumbs/Breadcrumbs';
import OrderNavigation from 'components/organisms/Order/components/OrderNavigation/OrderNavigation';
import CompaniesForm from 'components/organisms/Order/components/Forms/CompaniesForm';
import IndividualsForm from 'components/organisms/Order/components/Forms/IndividualsForm';
import useTranslation from 'next-translate/useTranslation';

import cn from 'classnames';
import styles from '../../components/organisms/Order/styles/Order.module.css';

function OrderStep3() {
  const { t } = useTranslation();
  const router = useRouter();
  const formType = router.query.for ?? 'companies';

  const breadcrumbs = [
    {
      title: t('common:menu.home'),
      link: '/'
    },
    {
      title: t('common:menu.order process')
    }
  ];

  function getItemClassNames(isActive) {
    return cn(styles.step3__tab, {
      [styles.step3__tab_active]: isActive
    });
  }

  return (
    <section className={styles.orderContainer}>
      <div className={styles.breadcrumbsContainer}>
        <Breadcrumbs list={breadcrumbs} />
      </div>
      <div className={styles.step3__orderNavigationContainer}>
        <OrderNavigation nextLink='/order/step-4' />
      </div>
      <p className={styles.step3__textContent}>{t('order:step3.main text')}</p>
      <h1 className={styles.step3__title}>{t('order:step3.main title')}</h1>
      <div className={styles.step3__tabs}>
        <Link href='/order/step-3?for=companies' scroll={false}>
          <a className={getItemClassNames(formType === 'companies')}>
            {t('order:step3.for companies')}
          </a>
        </Link>
        <Link href='/order/step-3?for=individuals' scroll={false}>
          <a className={getItemClassNames(formType === 'individuals')}>
            {t('order:step3.for private individuals')}
          </a>
        </Link>
      </div>
      <div className={styles.step3__beforeForm}>
        <p className={styles.step3__textContent}>{t('order:step3.info 1')}</p>
        <p className={styles.step3__textContent}>{t('order:step3.info 2')}</p>
      </div>
      <div className='mb-5'>
        {formType === 'companies' ? <CompaniesForm /> : <IndividualsForm />}
      </div>
    </section>
  );
}

export default OrderStep3;
