import Link from "next/link";
import classes from "./NavLink.module.css";

const NavLink = (props) => {
  const { link, onClick } = props;
  return (
    <Link href={link}>
      <a className={classes.link} onClick={onClick}>
        {props.children}
      </a>
    </Link>
  );
};

export default NavLink;
