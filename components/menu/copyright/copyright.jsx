import classes from './copyright.module.css';

function Copyright() {
  return (
    <div className={classes.copyright}>
      <span className={classes.copyright__text}>
        &copy; {new Date().getFullYear()} Integral Commodities. All Rights reserved
      </span>
    </div>
  );
}

export default Copyright;
