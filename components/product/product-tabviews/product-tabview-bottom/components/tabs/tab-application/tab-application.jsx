import ApplicationInfo from './application-info/application-info';
import styles from './tab-application.module.css';

function TabApplication({ application }) {
  return (
    <div className={styles.tabApplication}>
      <div className={styles.tabApplication__wrapper}>
        {application ? (
          <ApplicationInfo
            photo={application[0].value}
            description={application[1].value}
          />
        ) : (
          <ApplicationInfo photo={null} description={null} />
        )}
      </div>
    </div>
  );
}

export default TabApplication;
