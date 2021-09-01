import styles from './application-info.module.css';
import useTranslation from 'next-translate/useTranslation';
import { getTransValue } from 'utils/i18n';

function ApplicationInfo({ photo, description }) {
  const { t } = useTranslation();

  const getTransDescription = (t, description) => {
    if (!description || description === 'null') {
      return null;
    }
    return getTransValue(t, ['common:filter', 'application'], description);
  };

  const transDescription = getTransDescription(t, description);

  return (
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
  );
}

export default ApplicationInfo;
