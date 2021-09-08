import { useEffect, useState } from 'react';

import ToggleLink from './ToggleLink/ToggleLink';
import DefaultLink from './DefaultLink/DefaultLink';
import styles from './LinkTree.module.css';
import useTranslation from 'next-translate/useTranslation';
import { getDesktopLinks } from 'utils/nav-links';

function handleToggle(links, name) {
  const newLinks = [...links];
  const targetElementIdx = newLinks.findIndex(
    (linkElement) => linkElement.name === name
  );

  const targetElement = newLinks[targetElementIdx];
  const { isToggled: targetIsToggled, depth: targetDepth } = targetElement;

  const targetCurrentIsToggled = !targetIsToggled;
  targetElement.isToggled = targetCurrentIsToggled;

  for (let i = targetElementIdx + 1; i < newLinks.length; i++) {
    const currentElement = newLinks[i];
    const { depth: currentDepth } = currentElement;

    if (currentDepth <= targetDepth) break;

    if (targetCurrentIsToggled) {
      if (currentDepth === targetDepth + 1) currentElement.isShow = true;
      if (currentDepth === targetDepth + 1 && 'isToggled' in currentElement)
        currentElement.isToggled = false;
    } else {
      currentElement.isShow = false;
      if ('isToggled' in currentElement) currentElement.isToggled = false;
    }
  }

  return newLinks;
}

function LinkTree({ toggleMenu }) {
  const [links, setLinks] = useState([]);
  const { t, lang } = useTranslation();

  useEffect(() => {
    setLinks(getDesktopLinks(t));
  }, [lang]);

  return (
    <div className={styles.linkTree}>
      {links.map(
        (link, index) =>
          link.isShow && (
            <div key={index} style={{ paddingLeft: `${40 * link.depth}px` }}>
              {'isToggled' in link ? (
                <ToggleLink
                  linkElement={link}
                  biggerShift={
                    link.isToggled && links[index + 1].type === 'link'
                  }
                  onClick={() => setLinks(handleToggle(links, link.name))}
                />
              ) : (
                <DefaultLink
                  linkElement={link}
                  additionalOnClick={toggleMenu}
                />
              )}
            </div>
          )
      )}
    </div>
  );
}

export default LinkTree;
