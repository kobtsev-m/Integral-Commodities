import classnames from 'classnames';
import classes from './toggle-link.module.css';

function ToggleLink({ linkElement, biggerShift, onClick }) {
  return (
    <div className={classnames(classes.toggleLink, biggerShift && classes.toggleLink_biggerShift)}>
      <span
        className={classes.toggleLink__text}
        onClick={onClick}
      >
        {linkElement.name}
        <div className={classes.toggleLink__textArrow} />
      </span>
    </div>
  );
}

export default ToggleLink;
