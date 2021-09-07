import Trans from 'next-translate/Trans';
import styles from './ComingSoon.module.css';

function ComingSoon() {
  return (
    <div className={styles.comingSoon}>
      <span className={styles.comingSoon__icon} />
      <h2 className={styles.comingSoon__header}>
        <Trans i18nKey='order:comingSoon' />
      </h2>
    </div>
  );
}

export default ComingSoon;
