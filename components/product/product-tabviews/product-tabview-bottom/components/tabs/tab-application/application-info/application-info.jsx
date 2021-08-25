import styles from './application-info.module.css';
import useTranslation from 'next-translate/useTranslation';

function ApplicationInfo({ photo, description }) {
  const { t } = useTranslation();

  const getDescriptionTrans = (description) => {
    if (!description) {
      return null;
    }
    return description
      .split(', ')
      .map((item) =>
        t(`common:filter.application.${item.toLowerCase()}`, Object, {
          fallback: 'null'
        })
      )
      .filter((item) => item !== 'null')
      .join(', ');
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
        {getDescriptionTrans(description) || t('product:emptyForNow')}
      </span>
    </div>
  );
}

export default ApplicationInfo;
