import cn from 'classnames';

import ActiveLink from '../../../active-link/active-link';
import styles from './default-link.module.css';

function DefaultLink({ linkElement, additionalOnClick }) {
  const { subtype, procmethod, link, name, depth } = linkElement;

  let finalLink = '#';
  if (subtype && procmethod) {
    const polymersSubtypes = ['HDPE', 'PP', 'LDPE'];
    const isProductPolymer = polymersSubtypes.includes(subtype.toUpperCase());
    const baseLink = `/products/${isProductPolymer ? 'polymers' : subtype}`;

    finalLink = `${baseLink}?type=${subtype.toLowerCase()}&procmethod=${procmethod.toLowerCase()}`;
  } else if (link) {
    finalLink = link;
  }

  return (
    <div
      className={cn(styles.defaultLink, {
        [depth === 0]: styles.defaultLink_bigger
      })}
    >
      <ActiveLink
        href={finalLink}
        additionalClassName={cn(
          styles.defaultLink__text,
          depth === 0 && styles.defaultLink__text_bigger
        )}
        activeClassName={styles.defaultLink__text_active}
      >
        <a onClick={additionalOnClick}>{name}</a>
      </ActiveLink>
    </div>
  );
}

export default DefaultLink;
