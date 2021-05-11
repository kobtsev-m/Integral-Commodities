import classnames from 'classnames';

import CloseIcon from './close-icon/close-icon';
import LinkTree from './link-tree/link-tree';
import Copyright from './copyright/copyright';
import classes from './menu.module.css';

function Menu({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <div className={classnames(classes.menu, isMenuOpen && classes.menu_show)}>
        <div
          className={classes.menu__background}
          onClick={toggleMenu}
        />
      </div>
      <nav className={classnames(classes.menu__wrapper, isMenuOpen && classes.menu__wrapper_visible)}>
        <CloseIcon toggleMenu={toggleMenu} />
        <LinkTree toggleMenu={toggleMenu} />
        <Copyright />
      </nav>
    </>
  );
}

export default Menu;
