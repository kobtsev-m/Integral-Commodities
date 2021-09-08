import Link from 'next/link';
import { useState } from 'react';
import MenuSilder from '../Menu/mobile/MenuSlider/MenuSilder';
import MenuMobile from '../Menu/mobile/MenuMobile';
import useWindowDimensions from '../../../utils/hooks/useWindowDemensions';
import MenuDesktop from '../Menu/desktop/MenuDesktop';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const size = useWindowDimensions();
  const { t, lang } = useTranslation();

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
        <Link href={t('common:homeLink')}>
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
        <MenuSilder open={isMenuOpen} title='MenuDesktop' onClose={toggleMenu}>
          <MenuMobile onMenuClose={toggleMenu} />
        </MenuSilder>
      ) : (
        <MenuDesktop isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </header>
  );
}

export default Header;
