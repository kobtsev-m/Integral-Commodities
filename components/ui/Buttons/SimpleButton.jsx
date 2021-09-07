import Link from 'next/link';
import styles from './SimpleButton.module.css';

function SimpleButton(props) {
  if (props.usualLink) {
    return (
      <a href={props.link} className={styles.btn}>
        {props.children}
      </a>
    );
  }

  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default SimpleButton;
