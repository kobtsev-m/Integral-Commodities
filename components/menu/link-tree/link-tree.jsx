import { useState } from 'react';

import ToggleLink from './toggle-link/toggle-link';
import DefaultLink from './default-link/default-link';
import styles from './link-tree.module.css';

function handleToggle(links, name) {
  const newLinks = [...links];
  const targetElementIdx = newLinks.findIndex(
    (linkElement) => linkElement.name === name
  );

  const targetElement = newLinks[targetElementIdx];
  // Оба всегда будут
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
  const initialLinks = [
    {
      type: 'link',
      link: '/products/polymers',
      name: 'Home',
      depth: 0,
      isShow: true
    },
    {
      type: 'toggle',
      isToggled: false,
      name: 'Polymers',
      depth: 0,
      isShow: true
    },
    {
      type: 'toggle',
      isToggled: false,
      name: 'HDPE',
      depth: 1,
      isShow: false
    },
    {
      type: 'link',
      subtype: 'HDPE',
      procmethod: 'blowmoulding',
      name: 'Blown moulding',
      depth: 2,
      isShow: false
    },
    {
      type: 'link',
      subtype: 'HDPE',
      procmethod: 'film',
      name: 'Film',
      depth: 2,
      isShow: false
    },
    {
      type: 'link',
      subtype: 'HDPE',
      procmethod: 'injectionmoulding',
      name: 'Injection moulding',
      depth: 2,
      isShow: false
    },
    {
      type: 'link',
      subtype: 'HDPE',
      procmethod: 'monofilamentyarn',
      name: 'Monofilament/Yarn',
      depth: 2,
      isShow: false
    },
    {
      type: 'link',
      subtype: 'HDPE',
      procmethod: 'pipe',
      name: 'Pipe',
      depth: 2,
      isShow: false
    },
    {
      type: 'toggle',
      isToggled: false,
      name: 'PP',
      depth: 1,
      isShow: false
    },
    {
      type: 'link',
      subtype: 'PP',
      procmethod: 'fiberyarn',
      name: 'Fiber / Yarn',
      depth: 2,
      isShow: false
    },
    {
      type: 'link',
      subtype: 'PP',
      procmethod: 'extrusion',
      name: 'Extrusion',
      depth: 2,
      isShow: false
    },
    {
      type: 'link',
      subtype: 'PP',
      procmethod: 'injectionmoulding',
      name: 'Injection moulding',
      depth: 2,
      isShow: false
    },
    {
      type: 'link',
      subtype: 'PP',
      procmethod: 'blowmoulding',
      name: 'Blown moulding',
      depth: 2,
      isShow: false
    },
    {
      type: 'toggle',
      isToggled: false,
      name: 'LDPE',
      depth: 1,
      isShow: false
    },
    {
      type: 'link',
      subtype: 'LDPE',
      procmethod: 'film',
      name: 'Film',
      depth: 2,
      isShow: false
    },
    {
      type: 'toggle',
      isToggled: false,
      name: 'Fertilizers',
      depth: 0,
      isShow: true
    },
    {
      type: 'link',
      link: '/products/id/35?tab=offer',
      name: 'Urea grade B',
      depth: 1,
      isShow: false
    },
    {
      type: 'link',
      link: '/products/id/31?tab=offer',
      name: 'Potassium chloride',
      depth: 1,
      isShow: false
    },
    {
      type: 'link',
      link: '/products/id/34?tab=offer',
      name: 'Ammophos',
      depth: 1,
      isShow: false
    },
    {
      type: 'link',
      link: '/products/sulphur',
      name: 'Sulphur',
      depth: 0,
      isShow: true
    },
    {
      type: 'link',
      link: '/about',
      name: 'About us',
      depth: 0,
      isShow: true
    },
    {
      type: 'link',
      link: '/order',
      name: 'Order process',
      depth: 0,
      isShow: true
    },
    {
      type: 'link',
      link: '/about#futures',
      name: 'Services',
      depth: 0,
      isShow: true
    },
    {
      type: 'link',
      link: '/partners',
      name: 'Partners',
      depth: 0,
      isShow: true
    }
  ];
  const [links, setLinks] = useState(initialLinks);

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
