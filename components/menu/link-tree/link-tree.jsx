import { useState } from "react";

import ToggleLink from "./toggle-link/toggle-link";
import DefaultLink from "./default-link/default-link";
import styles from "./link-tree.module.css";

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
      if (currentDepth === targetDepth + 1 && "isToggled" in currentElement)
        currentElement.isToggled = false;
    } else {
      currentElement.isShow = false;
      if ("isToggled" in currentElement) currentElement.isToggled = false;
    }
  }

  return newLinks;
}

function LinkTree({ toggleMenu }) {
  const initialLinks = [
    {
      type: "link",
      link: "/products/polymers",
      name: "Home",
      depth: 0,
      isShow: true,
    },
    {
      type: "toggle",
      isToggled: false,
      name: "Polymers",
      depth: 0,
      isShow: true,
    },
    {
      type: "link",
      link: "/products/polymers?type=HDPE",
      name: "HDPE",
      depth: 1,
      isShow: false,
    },
    {
      type: "link",
      link: "/products/polymers?type=PP",
      name: "PP",
      depth: 1,
      isShow: false,
    },
    {
      type: "link",
      link: "/products/polymers?type=LDPE",
      name: "LDPE",
      depth: 1,
      isShow: false,
    },
    {
      type: "toggle",
      link: "/products/fertilizers",
      name: "Fertilizers",
      depth: 0,
      isShow: true,
    },
    {
      type: "link",
      link: "/products/sulphur",
      name: "Sulphur",
      depth: 0,
      isShow: true,
    },
    {
      type: "link",
      link: "/about",
      name: "About us",
      depth: 0,
      isShow: true,
    },
    {
      type: "link",
      link: "/order",
      name: "Order process",
      depth: 0,
      isShow: true,
    },
    {
      type: "link",
      link: "/about#futures",
      name: "Services",
      depth: 0,
      isShow: true,
    },
    {
      type: "link",
      link: "/partners",
      name: "Partners",
      depth: 0,
      isShow: true,
    },
  ];
  const [links, setLinks] = useState(initialLinks);

  return (
    <div className={styles.linkTree}>
      {links.map(
        (link, index) =>
          link.isShow && (
            <div key={index} style={{ paddingLeft: `${40 * link.depth}px` }}>
              {"isToggled" in link ? (
                <ToggleLink
                  linkElement={link}
                  biggerShift={
                    link.isToggled && links[index + 1].type === "link"
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
