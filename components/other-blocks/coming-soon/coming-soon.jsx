import classes from "./coming-soon.module.css";

function ComingSoon() {
  return (
    <div className={classes.comingSoon}>
      <span className={classes.comingSoon__icon} />
      <h2 className={classes.comingSoon__header}>Coming soon</h2>
    </div>
  );
}

export default ComingSoon;
