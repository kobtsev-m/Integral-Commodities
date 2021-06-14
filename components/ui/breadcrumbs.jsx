import Link from "next/link";
import { nanoid } from "nanoid";
import styles from "./breadcrumbs.module.css";

function Breadcrumbs(props) {
  const { list } = props;
  return (
    <div className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbs__list}>
        {list.map(
          (crumb, i) =>
            crumb && (
              <li key={nanoid()} className={styles.breadcrumbs__item}>
                {crumb.link ? (
                  <Link href={crumb.link}>{crumb.title}</Link>
                ) : (
                  <span>{crumb.title}</span>
                )}
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
