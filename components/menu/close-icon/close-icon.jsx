import classes from './close-icon.module.css';

function CloseIcon({ toggleMenu }) {
  return (
    <div
      className={classes.icon}
      onClick={toggleMenu}
    >
      <div className={classes.icon__wrapper}>
        <button className={classes.icon__button} />
      </div>
    </div>
  );
}

export default CloseIcon;
