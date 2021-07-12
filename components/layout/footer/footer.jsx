import Link from 'next/link';

import FooterCard from './components/footer-card';

import cn from 'classnames';
import linkClasses from 'styles/blocks/link.module.css';
import useWindowDimensions from '../../../utils/hooks/useWindowDemensions';
import FooterMobile from '../footer-mobile';

export const FooterLink = {
  HDPE: {
    blowMoulding: 'Blow moulding',
    film: 'Film',
    injectionMoulding: 'Injection moulding',
    monofilamentYarn: 'Monofilament / Yarn',
    pipe: 'Pipe'
  },
  LDPE: {
    film: 'Film'
  },
  PP: {
    blowMoulding: 'Blow moulding',
    extrusion: 'Extrusion',
    injectionMoulding: 'Injection moulding',
    fiberYarn: 'Fiber / Yarn'
  },
  Sulphur: {}
};

function Footer() {
  const size = useWindowDimensions();

  if (!size.width) {
    return null;
  }
  if (size.width <= 768) {
    return <FooterMobile />;
  }
  return (
    <footer className={'footer'}>
      <div className={'footer__container'}>
        <div className={'footer__info'}>
          {Object.entries(FooterLink).map(([key, value]) => (
            <FooterCard
              key={`footer-card-${key}-${value}`}
              data={value}
              type={key}
            />
          ))}
          <div className={'footer__card'}>
            <h3 className={'footer__card-title'}>Pages</h3>
            <ul className={'footer__links-list'}>
              <li className={'footer__list-item'}>
                <a
                  href={'/about-us'}
                  className={cn('footer__link', linkClasses.link)}
                >
                  About
                </a>
              </li>
              <li className={'footer__list-item'}>
                <a
                  href={'/order'}
                  className={cn('footer__link', linkClasses.link)}
                >
                  Order process
                </a>
              </li>
              <li className={'footer__list-item'}>
                <a
                  href={'/about-us#futures'}
                  className={cn('footer__link', linkClasses.link)}
                >
                  Services
                </a>
              </li>
              <li className={'footer__list-item'}>
                <a
                  href={'/partners'}
                  className={cn('footer__link', linkClasses.link)}
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div className={'footer__card'}>
            <h3 className={cn('footer__card-title', linkClasses.link)}>
              <Link href={'/products/fertilizers'}>Fertilizers</Link>
            </h3>
          </div>
        </div>
        <div className={'footer__representations'}>
          <div className={'footer__card'}>
            <div className={'footer__office-title'}>
              <img
                className={'footer__flag'}
                src={'./images/flag-uae.svg'}
                alt={''}
              />
              <h3
                className={'footer__card-title footer__card-title_type_office'}
              >
                Dubai office
              </h3>
            </div>
            <ul className={'footer__links-list'}>
              <li className={'footer__list-item'}>
                <address className={'footer__address'}>
                  Platinum Tower, 3905, JLT
                </address>
              </li>
              <li className={'footer__list-item'}>
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href={'tel:+97145667713'}
                >
                  T: +971 4 566 7713
                </a>
              </li>
              <li className={'footer__list-item'}>
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href={'mailto:info@integral-commodities.ch'}
                >
                  info@integral-commodities.ch
                </a>
              </li>
              <li className={'footer__list-item'}>
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href={'mailto:sales@integral-commodities.ch'}
                >
                  sales@integral-commodities.ch
                </a>
              </li>
            </ul>
          </div>
          <div className={'footer__card'}>
            <div className={'footer__office-title'}>
              <img
                className={'footer__flag'}
                src={'images/flag-ch.svg'}
                alt={''}
              />
              <h3
                className={'footer__card-title footer__card-title_type_office'}
              >
                Lugano office
              </h3>
            </div>
            <ul className={'footer__links-list'}>
              <li className={'footer__list-item'}>
                <address className={'footer__address'}>
                  Via F. Pelli 13B
                </address>
              </li>
              <li className={'footer__list-item'}>
                <address className={'footer__address'}>
                  6900 Lugano, Switzerland
                </address>
              </li>
              <li className={'footer__list-item'}>
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href={'tel:+41912083157'}
                >
                  T: +41912083157
                </a>
              </li>
              <li className={'footer__list-item'}>
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href={'mailto:info@integral-commodities.ch'}
                >
                  info@integral-commodities.ch
                </a>
              </li>
            </ul>
          </div>
          <div className={'footer__card footer__card_size_double'}>
            <h3 className={'footer__card-title'}>Local representatives</h3>
            <ul className={'footer__countries-list'}>
              <li>
                <a className={'footer__country'} href="/about-us#dubai">
                  <img
                    className={'footer__country-image'}
                    src={'./images/flag-uae.svg'}
                    alt={''}
                  />
                  <p className={'footer__country-title'}>UAE</p>
                </a>
              </li>
              <li>
                <a className={'footer__country'} href="/about-us#uzbekistan">
                  <img
                    className={'footer__country-image'}
                    src={'./images/flag-uz.svg'}
                    alt={''}
                  />
                  <p className={'footer__country-title'}>Uzbekistan</p>
                </a>
              </li>
              <li>
                <a className={'footer__country'} href="/about-us#turkmenistan">
                  <img
                    className={'footer__country-image'}
                    src={'./images/flag-tm.svg'}
                    alt={''}
                  />
                  <p className={'footer__country-title'}>Turkmenistan</p>
                </a>
              </li>
              <li>
                <a className={'footer__country'} href="/about-us#turkey">
                  <img
                    className={'footer__country-image'}
                    src={'./images/flag-tr.svg'}
                    alt={''}
                  />
                  <p className={'footer__country-title'}>Turkey</p>
                </a>
              </li>
              <li>
                <a className={'footer__country'} href="/about-us#kazakhstan">
                  <img
                    className={'footer__country-image'}
                    src={'./images/flag-kz.svg'}
                    alt={''}
                  />
                  <p className={'footer__country-title'}>Kazakhstan</p>
                </a>
              </li>
              <li>
                <a className={'footer__country'} href="/about-us#russia">
                  <img
                    className={'footer__country-image'}
                    src={'./images/flag-rf.svg'}
                    alt={''}
                  />
                  <p className={'footer__country-title'}>Russian Federation</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={'footer__logo-container mt-3'}>
          <Link href={'/products/sulphur'}>
            <span className={'logo logo_place_footer'}></span>
          </Link>
        </div>
        <div className={'footer__copyright-container'}>
          <p className={'footer__copyright'}>
            © 2021 Integral Commodities. All Rights reserved
          </p>
          <ul className={'footer__copyright-list'}>
            <li className={'footer__copyright-item'}>
              <a
                className={cn('footer__copyright-link', linkClasses.link)}
                href={'/documents/terms.pdf'}
                target={'_blank'}
                download
              >
                Terms
              </a>
            </li>
            <li className={'footer__copyright-item'}>
              <a
                className={cn('footer__copyright-link', linkClasses.link)}
                href={'/documents/privacy.pdf'}
                target={'_blank'}
                download
              >
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
