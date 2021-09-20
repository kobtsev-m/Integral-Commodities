import Trans from 'next-translate/Trans';
import styles from './FaqTab.module.css';

function FaqTab() {
  return (
    <div className={styles.faqTab}>
      <span className={styles.faqText}>
        <Trans i18nKey='product:emptyForNow' />
      </span>
    </div>
  );
}

export default FaqTab;
