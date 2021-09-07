import styles from './CloseIcon.module.css';

function CloseIcon({ toggleMenu }) {
  return (
    <div className={styles.icon} onClick={toggleMenu}>
      <div className={styles.icon__wrapper}>
        <button className={styles.icon__button} />
      </div>
    </div>
  );
}

export default CloseIcon;
