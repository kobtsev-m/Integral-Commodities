import classes from "./breadcrumbs.module.css";

function Breadcrumbs(props) {
  const { list } = props;
  return (
    <div className={classes.breadcrumbs}>
      <ul className={classes.breadcrumbs__list}>
        {list.map((crumb, i) => (
          <li className={classes.breadcrumbs__item} key={`crumb-${i}`}>
            {crumb.link ? (
              <a href={crumb.link}>{crumb.title}</a>
            ) : (
              <span>{crumb.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
