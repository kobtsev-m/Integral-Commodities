import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

function Breadcrumbs(props) {
  const { list } = props;
  return (
    <>
      <ul className={styles.breadcrumbs__list}>
        {list.map(
          (crumb, i) =>
            crumb && (
              <li key={i} className={styles.breadcrumbs__item}>
                {crumb.link ? (
                  <Link href={crumb.link}>{crumb.title}</Link>
                ) : (
                  <span>{crumb.title}</span>
                )}
              </li>
            )
        )}
      </ul>
    </>
  );
}

export default Breadcrumbs;
