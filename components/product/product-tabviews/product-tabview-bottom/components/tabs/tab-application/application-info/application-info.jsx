import styles from './application-info.module.css';
import useTranslation from 'next-translate/useTranslation';
import { getTransValue } from 'utils/i18n';

function ApplicationInfo({ photo, description }) {
  const { t } = useTranslation();

  const getTransDescription = (t, description) => {
    if (!description) {
      return null;
    }
    return getTransValue(t, ['common:filter', 'application'], description);
  };

  return (
    <div className={styles.applicationInfo}>
      {photo && description && (
        <img
          className={styles.applicationInfo__photo}
          src={`/images/${photo}`}
          alt={`Photo: ${description}`}
        />
      )}
      <span className={styles.applicationInfo__description}>
        {getTransDescription(t, description) || t('product:emptyForNow')}
      </span>
    </div>
  );
}

export default ApplicationInfo;
