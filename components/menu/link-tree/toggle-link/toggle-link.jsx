import cn from 'classnames';
import Trans from 'next-translate/Trans';
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
        <Trans i18nKey={`common:menu.${linkElement.name.toLowerCase()}`} />
        <div className={styles.toggleLink__textArrow} />
      </span>
    </div>
  );
}

export default ToggleLink;
