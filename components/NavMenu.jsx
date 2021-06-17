import { useState } from "react";
import cn from "classnames";
import Link from "next/link";

import { LINKS } from "../utils/nav-links";
import classes from "./NavMenu.module.css";

const getInitialRollupState = (links) => {
  return links.reduce((acc, link) => {
    if (!link.children) {
      return acc;
    }
    return { ...acc, [link.label.toLowerCase()]: false };
  }, {});
};

const NavMenu = (props) => {
  const { onMenuClose } = props;
  const initialRollupState = getInitialRollupState(LINKS);
  const [rollup, setRollUp] = useState(initialRollupState);

  const renderLink = (link, { withLi = true, nesting = false }) => {
    const linkComponent = (
      <Link href={link.link}>
        <a className={classes.link} onClick={onMenuClose}>
          {link.label}
        </a>
      </Link>
    );

    if (withLi) {
      return (
        <li
          className={cn(classes.linkItem, {
            [classes.linkItem_nesting]: nesting,
          })}
        >
          {linkComponent}
        </li>
      );
    }

    return linkComponent;
  };

  const handleRollupClick = (label) => () => {
    setRollUp({
      ...rollup,
      [label.toLowerCase()]: !rollup[label.toLowerCase()],
    });
  };

  return (
    <nav>
      <ul className={classes.linksList}>
        {LINKS.map((link) => {
          if (link.children) {
            const linkLabel = link.label.toLowerCase();
            const isRolledUp = rollup[linkLabel];
            return (
              <li className={classes.linkItem}>
                {renderLink(link, { withLi: false, nesting: false })}
                <button
                  className={cn(classes.rollupBtn, {
                    [classes.rollupBtn_rolled]: isRolledUp,
                  })}
                  onClick={handleRollupClick(link.label)}
                />
                <ul
                  className={cn(classes.linksList, classes.linksList_nesting, {
                    [classes.hidden]: !rollup[linkLabel],
                  })}
                >
                  {link.children.map((link) =>
                    renderLink(link, { withLi: true, nesting: true })
                  )}
                </ul>
              </li>
            );
          }

          return renderLink(link, { withLi: true, nesting: false });
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
