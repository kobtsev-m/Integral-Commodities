import classes from './thanks-header.module.scss';

function ThanksHeader() {
  return (
    <div className={classes.thanksHeader}>
      <img
        className={classes.thanksHeader__checkImg}
        src="/images/thanks-check.svg"
        alt=""
      />
      <h1 className={classes.thanksHeader__text}>
        Thank you
      </h1>
    </div>
  );
}

export default ThanksHeader;
