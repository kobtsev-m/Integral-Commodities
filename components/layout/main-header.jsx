import Link from "next/link";
import { useState } from "react";
import SliderMenu from "../SliderMenu";
import NavMenu from "../NavMenu/NavMenu";
import useWindowDimensions from "../../hooks/useWindowDemensions";
import Menu from "../menu/menu";

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { width } = useWindowDimensions();

  return (
    <header className={"header root__header"}>
      <div className={"header__wrapper"}>
        <Link href={"/products/polymers"}>
          <span className={"logo logo_place_header"} />
        </Link>
        <button className={"header__menu-button"} onClick={toggleMenu} />
      </div>
      {width <= 768 ? (
        <SliderMenu open={isMenuOpen} title="Menu" onClose={toggleMenu}>
          <NavMenu onMenuClose={toggleMenu} />
        </SliderMenu>
      ) : (
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </header>
  );
}

export default MainHeader;
