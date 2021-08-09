import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import cn from 'classnames';

import { LINKS } from '../../utils/nav-links';
import classes from './nav-menu.module.css';
import NavLink from './nav-link';
import { nanoid } from 'nanoid';

const getInitialState = (links, label) => {
  return links.reduce((acc, l) => {
    if (l.children) {
      return getInitialState(l.children, l.label);
    }
    if (!label || acc[label]) {
      return acc;
    }
    return { ...acc, [label]: false };
  }, {});
};

const NavMenu = (props) => {
  const { onMenuClose } = props;
  const [rollup, setRollUp] = useState(getInitialState(LINKS));

  const { t } = useTranslation();

  const recursivelyRenderLinks = (links, isNested = false, label) => {
    let isGloballyNested = false;
    return (() => {
      if (isNested) {
        isGloballyNested = true;
      }
      return (
        <ul
          className={cn(classes.linksList, {
            [classes.linksList_nesting]: isNested,
            [classes.hidden]: isNested && !rollup[label]
          })}
        >
          {links.map((l) => {
            const { link, label, children } = l;
            const linkComponent = (
              <NavLink
                link={link}
                onClick={onMenuClose}
                blancLink={l.blancLink}
              >
                {t(`common:menu.${label.toLowerCase()}`)}
              </NavLink>
            );

            if (children) {
              return (
                <li
                  key={nanoid()}
                  className={cn(classes.linkItem, {
                    [classes.linkItem_nesting]: isGloballyNested
                  })}
                >
                  {linkComponent}
                  <button
                    className={cn(classes.rollupBtn, {
                      [classes.rollupBtn_rolled]: rollup[label]
                    })}
                    onClick={() =>
                      setRollUp({ ...rollup, [label]: !rollup[label] })
                    }
                  />
                  {recursivelyRenderLinks(children, true, label)}
                </li>
              );
            }

            return (
              <li
                key={nanoid()}
                className={cn(classes.linkItem, {
                  [classes.linkItem_nesting]: isGloballyNested
                })}
              >
                {linkComponent}
              </li>
            );
          })}
        </ul>
      );
    })();
  };

  return <nav>{recursivelyRenderLinks(LINKS)}</nav>;
};

export default NavMenu;
