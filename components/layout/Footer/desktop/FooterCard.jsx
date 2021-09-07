import Link from 'next/link';

import cn from 'classnames';
import linkClasses from 'styles/blocks/link.module.css';
import useTranslation from 'next-translate/useTranslation';

const POLYMER_TYPES = ['HDPE', 'PP', 'LDPE'];

function FooterCard({ data, type }) {
  const { t } = useTranslation();

  const productType = POLYMER_TYPES.includes(type) ? 'polymers' : type;
  const baseLink = `/products/${productType.toLowerCase()}`;

  const headerLink = `${baseLink}${
    productType === 'polymers' ? `?type=${type}` : ''
  }`;

  const listLinks = Object.values(data).map((value) => {
    const link = `${baseLink}${
      productType === 'polymers' ? `?type=${type}&procmethod=${value}` : ''
    }`;
    return [value, link];
  });

  return (
    <div className='footer__card'>
      <h3 className={cn('footer__card-title', linkClasses.link)}>
        <Link href={headerLink}>{t(`common:menu.${type.toLowerCase()}`)}</Link>
      </h3>
      <ul className='footer__links-list'>
        {listLinks.map(([value, link], i) => (
          <li key={i} className='footer__list-item'>
            <Link href={link}>
              <a className={cn('footer__link', linkClasses.link)}>
                {t(`common:filter.processing method.${value.toLowerCase()}`)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterCard;
