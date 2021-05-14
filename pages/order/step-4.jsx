import styles from './step-1.module.css';
import Button from '../../components/ui/button';
import OrderNavigation from '../../components/order/order-navigation';
import Breadcrumbs from '../../components/ui/breadcrumbs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

function OrderStep3() {
  const breadcrumbs = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Order process'
    }
  ];

  const router = useRouter();

  const formType = router.query.for;

  const scriptText =
    '(function(s, t, e, p, f, o, r, m) { s[t] = s[t] || {}; s[t][527808932] = { id: "cBt7XDC", rnd: 527808932 }; e.async = true; e.src = p + f; document[m](o)[r](e) }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=cBt7XDC","head","appendChild","querySelector"));';

  useEffect(() => {
    // if (formType) {
    const script = document.createElement('script');
    script.id = 'kyc';
    script.textContent = scriptText;
    document.body.appendChild(script);
    // }
  }, [formType]);

  const tabStyles = styles.step3__tab;
  const activeTabStyles = styles.step3__tab_active;

  function getItemClassNames(isActive) {
    return cn(tabStyles, {
      [activeTabStyles]: isActive
    });
  }

  return (
    <section className={styles.orderContainer}>
      <div style={{ marginTop: 65 }}>
        <Breadcrumbs list={breadcrumbs} />
      </div>
      <div className={styles.step3__orderNavigationContainer}>
        <OrderNavigation />
      </div>
      <p
        className={styles.step3__textContent}
        style={{ marginTop: 80, marginBottom: 90 }}
      >
        Please select one of the following payment methods:
      </p>
      <div className="stepform_cBt7XDC rnd_527808932"></div>
    </section>
  );
}

export default OrderStep3;
