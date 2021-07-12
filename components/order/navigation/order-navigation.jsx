import Link from 'next/link';
import { useRouter } from 'next/router';
import IconNext from 'components/icons/icon-next';
import useWindowDimensions from 'utils/hooks/useWindowDemensions';

import cn from 'classnames';
import styles from './order-navigation.module.css';

const Step = {
  step1: 'Confirm deal',
  step2: 'Confirm General Terms & Conditions',
  step3: 'Provide KYC',
  step4: 'Make a payment',
  step5: 'Track order'
};

function OrderNavigation(props) {
  const router = useRouter();
  const activeRouteTab = router.route.split('/')[2].split('-').join('');

  const size = useWindowDimensions();

  const getStepClassNames = (isActive) => {
    return cn(styles.orderNavigation__item, {
      [styles.orderNavigation__item_active]: isActive
    });
  };

  return size.width && size.width <= 768 ? (
    <div className={styles.mobileNav}>
      <h3 className={styles.stepNum}>Step {activeRouteTab.slice(4)}</h3>
      <h2 className={styles.stepName}>{Step[activeRouteTab]}</h2>
      <Link href={props.nextLink}>
        <a className={styles.nextButton} />
      </Link>
    </div>
  ) : (
    <div className={styles.orderNavigation}>
      <ul className={styles.orderNavigation__list}>
        {Object.entries(Step).map(([key, value]) => {
          const isActiveTab = activeRouteTab === key;
          const link = `/order/step-${key.slice(-1)}`;
          return (
            <li
              className={getStepClassNames(isActiveTab)}
              key={`step-${value}`}
            >
              <Link href={link}>{value}</Link>
              <IconNext color={isActiveTab ? '#02569c' : '#909195'} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OrderNavigation;
