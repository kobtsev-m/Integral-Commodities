import Link from 'next/link';
import { useState } from 'react';
import SliderMenu from '../slider-menu/slider-menu';
import NavMenu from '../nav-menu/nav-menu';
import useWindowDimensions from '../../utils/hooks/useWindowDemensions';
import Menu from '../menu/menu';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const size = useWindowDimensions();
  const { lang } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = () => {
    setLanguage(lang === 'en' ? 'ru' : 'en');
  };

  const getLanguageButtonHtml = () => {
    return lang === 'en' ? (
      <>
        <span style={{ color: '#02569C' }}>ENG</span> / РУС
      </>
    ) : (
      <>
        ENG / <span style={{ color: '#02569C' }}>РУС</span>
      </>
    );
  };

  return (
    <header className='header root__header'>
      <div className='header__wrapper'>
        <Link href='/products/sulphur'>
          <span className='logo logo_place_header' />
        </Link>
        <div className='d-flex align-items-center'>
          <button
            className='btn shadow-none me-5 d-none d-sm-block'
            onClick={changeLanguage}
          >
            {getLanguageButtonHtml()}
          </button>
          <button
            className='btn btn-sm shadow-none me-3 d-block d-sm-none'
            onClick={changeLanguage}
          >
            {getLanguageButtonHtml()}
          </button>
          <button className='header__menu-button' onClick={toggleMenu} />
        </div>
      </div>
      {size.width <= 768 ? (
        <SliderMenu open={isMenuOpen} title='Menu' onClose={toggleMenu}>
          <NavMenu onMenuClose={toggleMenu} />
        </SliderMenu>
      ) : (
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </header>
  );
}

export default MainHeader;
