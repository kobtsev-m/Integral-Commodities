import cn from 'classnames';

import CloseIcon from './close-icon/close-icon';
import LinkTree from './link-tree/link-tree';
import Copyright from './copyright/copyright';
import styles from './menu.module.css';

function Menu({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <div className={cn(styles.menu, isMenuOpen && styles.menu_show)}>
        <div className={styles.menu__background} onClick={toggleMenu} />
      </div>
      <nav
        className={cn(
          styles.menu__wrapper,
          isMenuOpen && styles.menu__wrapper_visible
        )}
      >
        <CloseIcon toggleMenu={toggleMenu} />
        <LinkTree toggleMenu={toggleMenu} />
        <Copyright />
      </nav>
    </>
  );
}

export default Menu;
