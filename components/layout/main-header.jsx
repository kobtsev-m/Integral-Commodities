import { useState } from "react";
import Link from "next/link";

import Menu from '../menu/menu';

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (event) => {
    document.documentElement.style.overflowY = isMenuOpen ? 'auto' : 'hidden';

    setIsMenuOpen(prevValue => !prevValue);
    event.stopPropagation();
  };

  return (
    <header className="header root__header">
      <div className="header__wrapper">
        <Link href="/">
          <a className="logo logo_place_header" />
        </Link>
        <button
          className="header__menu-button"
          onClick={toggleMenu}
        />
      </div>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default MainHeader;
