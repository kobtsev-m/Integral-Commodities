import Link from 'next/link';
import { useRouter } from 'next/router';

import Breadcrumbs from 'components/ui/breadcrumbs';
import OrderNavigation from 'components/order/navigation/order-navigation';
import CompaniesForm from 'components/order/forms/companies-form';
import IndividualsForm from 'components/order/forms/individuals-form';

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

function OrderStep3(props) {
  const router = useRouter();
  const formType = router.query.for ?? 'companies';

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
        <OrderNavigation nextLink={'/order/step-4'} />
      </div>
      <p className={styles.step3__textContent}>
        We recommend you to provide KYC information now, to enable you to trade
        with us once you are ready to place an order.
      </p>
      <h1 className={styles.step3__title}>Counterparty form</h1>
      <div className={styles.step3__tabs}>
        <Link href={'/order/step-3?for=companies'} scroll={false}>
          <a className={getItemClassNames(formType === 'companies')}>
            For companies
          </a>
        </Link>
        <Link href={'/order/step-3?for=individuals'} scroll={false}>
          <a className={getItemClassNames(formType === 'individuals')}>
            For private individuals
          </a>
        </Link>
      </div>
      <div className={styles.step3__beforeForm}>
        <p className={styles.step3__textContent}>
          The information requested in this questionnaire is required to enable
          our company to trade with you.
        </p>
        <p className={styles.step3__textContent}>
          Please ensure that all relevant sections are completed or marked with
          N/A if not applicable
        </p>
      </div>
      <div className={'mb-5'}>
        {formType === 'companies' ? <CompaniesForm /> : <IndividualsForm />}
      </div>
    </section>
  );
}

export default OrderStep3;
