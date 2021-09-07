import styles from './ApplicationTab.module.css';
import { getTransValue } from 'utils/i18n';
import useTranslation from 'next-translate/useTranslation';

function ApplicationTab({ application }) {
  const { t } = useTranslation();

  const getTransDescription = (t, description) => {
    if (!description || description === 'null') {
      return null;
    }
    return getTransValue(
      t,
      ['common:FiltersMobileMenu', 'application'],
      description
    );
  };

  let photo = null;
  let description = null;

  if (application) {
    photo = application[0].value;
    description = application[1].value;
  }

  const transDescription = getTransDescription(t, description);

  return (
    <div className={styles.tabApplication}>
      <div className={styles.tabApplication__wrapper}>
        <div className={styles.applicationInfo}>
          {photo && transDescription && (
            <img
              className={styles.applicationInfo__photo}
              src={`/images/${photo}`}
              alt={`Photo: ${description}`}
            />
          )}
          <span className={styles.applicationInfo__description}>
            {transDescription || t('product:emptyForNow')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ApplicationTab;
