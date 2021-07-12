import styles from './coming-soon.module.css';

function ComingSoon() {
  return (
    <div className={styles.comingSoon}>
      <span className={styles.comingSoon__icon} />
      <h2 className={styles.comingSoon__header}>Coming soon</h2>
    </div>
  );
}

export default ComingSoon;
