import classes from './application-info.module.css';

function ApplicationInfo({ photo, description }) {
  return (
    <div className={classes.applicationInfo}>
      <img
        className={classes.applicationInfo__photo}
        src={(photo && `/images/${photo}`) || '/images/canisters.png'}
        alt={`Photo: ${description || 'Canisters'}`}
      />
      <span className={classes.applicationInfo__description}>
        {description || 'Canisters'}
      </span>
    </div>
  );
}

export default ApplicationInfo;
