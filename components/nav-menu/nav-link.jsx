import Link from 'next/link';
import classes from './nav-link.module.css';

const NavLink = (props) => {
  const { link, onClick, blancLink } = props;

  if (blancLink) {
    return (
      <a className={classes.link} href={link}>
        {props.children}
      </a>
    );
  }

  return (
    <Link href={link}>
      <a className={classes.link} onClick={onClick}>
        {props.children}
      </a>
    </Link>
  );
};

export default NavLink;
