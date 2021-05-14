import styles from './copyright.module.css';

function Copyright() {
  return (
    <div className={styles.copyright}>
      <span className={styles.copyright__text}>
        &copy; {new Date().getFullYear()} Integral Commodities. All Rights
        reserved
      </span>
    </div>
  );
}

export default Copyright;
