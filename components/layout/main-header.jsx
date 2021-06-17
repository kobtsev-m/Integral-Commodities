import Link from "next/link";
import { useState } from "react";
import Menu from "components/menu/menu";
import SliderMenu from "../SliderMenu";
import NavMenu from "../NavMenu";

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={"header root__header"}>
      <div className={"header__wrapper"}>
        <Link href={"/products/polymers"}>
          <span className={"logo logo_place_header"} />
        </Link>
        <button className={"header__menu-button"} onClick={toggleMenu} />
      </div>
      <SliderMenu open={isMenuOpen} title="Menu" onClose={toggleMenu}>
        <NavMenu onMenuClose={toggleMenu} />
      </SliderMenu>
    </header>
  );
}

export default MainHeader;
