import cn from 'classnames';
import styles from './toggle-link.module.css';

function ToggleLink({ linkElement, biggerShift, onClick }) {
  return (
    <div
      className={cn(
        styles.toggleLink,
        biggerShift && styles.toggleLink_biggerShift
      )}
    >
      <span className={styles.toggleLink__text} onClick={onClick}>
        {linkElement.name}
        <div className={styles.toggleLink__textArrow} />
      </span>
    </div>
  );
}

export default ToggleLink;
