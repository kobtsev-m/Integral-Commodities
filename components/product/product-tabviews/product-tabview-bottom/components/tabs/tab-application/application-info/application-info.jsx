import styles from './application-info.module.css';

function ApplicationInfo({ photo, description }) {
  return (
    <div className={styles.applicationInfo}>
      <img
        className={styles.applicationInfo__photo}
        src={(photo && `/images/${photo}`) || '/images/canisters.png'}
        alt={`Photo: ${description || 'Canisters'}`}
      />
      <span className={styles.applicationInfo__description}>
        {description || 'Canisters'}
      </span>
    </div>
  );
}

export default ApplicationInfo;
