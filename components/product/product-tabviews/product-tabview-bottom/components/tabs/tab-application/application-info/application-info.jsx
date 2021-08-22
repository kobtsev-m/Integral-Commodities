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
      <img
        className={styles.applicationInfo__photo}
        src={(photo && `/images/${photo}`) || '/images/canisters.png'}
        alt={`Photo: ${description || 'Canisters'}`}
      />
      <span className={styles.applicationInfo__description}>
        {getDescriptionTrans(description) || 'Canisters'}
      </span>
    </div>
  );
}

export default ApplicationInfo;
