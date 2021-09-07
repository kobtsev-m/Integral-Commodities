import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import useTranslation from 'next-translate/useTranslation';
import NavLink from './NavLink/NavLink';
import { getMobileLinks } from 'utils/nav-links';

import cn from 'classnames';
import styles from './MenuMobile.module.css';

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

const MenuMobile = (props) => {
  const { onMenuClose } = props;
  const [rollup, setRollUp] = useState([]);
  const { t, lang } = useTranslation();

  useEffect(() => {
    setRollUp(getInitialState(getMobileLinks(t)));
  }, [lang]);

  const recursivelyRenderLinks = (links, isNested = false, label) => {
    let isGloballyNested = false;
    return (() => {
      if (isNested) {
        isGloballyNested = true;
      }
      return (
        <ul
          className={cn(styles.linksList, {
            [styles.linksList_nesting]: isNested,
            [styles.hidden]: isNested && !rollup[label]
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
                  className={cn(styles.linkItem, {
                    [styles.linkItem_nesting]: isGloballyNested
                  })}
                >
                  {linkComponent}
                  <button
                    className={cn(styles.rollupBtn, {
                      [styles.rollupBtn_rolled]: rollup[label]
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
                className={cn(styles.linkItem, {
                  [styles.linkItem_nesting]: isGloballyNested
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
  return <nav>{recursivelyRenderLinks(getMobileLinks(t))}</nav>;
};

export default MenuMobile;
