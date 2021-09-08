import Trans from 'next-translate/Trans';
import styles from './Copyright.module.css';

function Copyright() {
  return (
    <div className={styles.copyright}>
      <span className={styles.copyright__text}>
        &copy; {new Date().getFullYear()} Integral Commodities.{' '}
        <Trans i18nKey='common:footer.all rights reserved' />
      </span>
    </div>
  );
}

export default Copyright;
