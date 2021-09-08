import cn from 'classnames';

import CloseIcon from './CloseIcon/CloseIcon';
import LinkTree from './LinkTree/LinkTree';
import Copyright from './Copyright/Copyright';
import styles from './MenuDesktop.module.css';

function MenuDesktop({ isMenuOpen, toggleMenu }) {
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

export default MenuDesktop;
