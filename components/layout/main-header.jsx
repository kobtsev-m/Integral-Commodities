import Link from 'next/link';
import { useState } from 'react';
import SliderMenu from '../slider-menu/slider-menu';
import NavMenu from '../nav-menu/nav-menu';
import useWindowDimensions from '../../hooks/useWindowDemensions';
import Menu from '../menu/menu';

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const size = useWindowDimensions();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={'header root__header'}>
      <div className={'header__wrapper'}>
        <Link href={'/products/sulphur'}>
          <span className={'logo logo_place_header'} />
        </Link>
        <button className={'header__menu-button'} onClick={toggleMenu} />
      </div>
      {size.width <= 768 ? (
        <SliderMenu open={isMenuOpen} title={'Menu'} onClose={toggleMenu}>
          <NavMenu onMenuClose={toggleMenu} />
        </SliderMenu>
      ) : (
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </header>
  );
}

export default MainHeader;
