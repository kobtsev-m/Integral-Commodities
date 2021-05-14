import Link from 'next/link';
import FooterCard from './components/footer-card';

import cn from 'classnames';
import linkClasses from 'styles/blocks/link.module.css';

export const FooterLink = {
  HDPE: {
    blowMoulding: 'Blown moulding',
    film: 'Film',
    injectionMoulding: 'Injection moulding',
    monofilamentYarn: 'Monofilament / Yarn',
    pipe: 'Pipe'
  },
  LDPE: {
    film: 'Film'
  },
  PP: {
    blowMoulding: 'Blown moulding',
    extrusion: 'Extrusion',
    injectionMoulding: 'Injection moulding',
    fiberYarn: 'Fiber / Yarn'
  },
  Sulphur: {}
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__info">
          {Object.entries(FooterLink).map(([key, value]) => (
            <FooterCard
              key={`footer-card-${key}-${value}`}
              data={value}
              type={key}
            />
          ))}
          <div className="footer__card">
            <h3 className="footer__card-title">Pages</h3>
            <ul className="footer__links-list">
              <li className="footer__list-item">
                <a
                  href="/about"
                  className={cn('footer__link', linkClasses.link)}
                >
                  About
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  href="/order"
                  className={cn('footer__link', linkClasses.link)}
                >
                  Order process
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  href="/about#futures"
                  className={cn('footer__link', linkClasses.link)}
                >
                  Services
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  href="/partners"
                  className={cn('footer__link', linkClasses.link)}
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__card">
            <h3 className={cn('footer__card-title', linkClasses.link)}>
              <Link href="/products/fertilizers">Fertilizers</Link>
            </h3>
            <ul className="footer__links-list">
              <li className="footer__list-item">
                <a
                  href="/products/id/9?tab=offer"
                  className={cn('footer__link', linkClasses.link)}
                >
                  Urea grade B
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  href="/products/id/10?tab=offer"
                  className={cn('footer__link', linkClasses.link)}
                >
                  Potassium chloride
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  href="/products/id/11?tab=offer"
                  className={cn('footer__link', linkClasses.link)}
                >
                  Ammophos
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="footer__representations">
          <div className="footer__card">
            <div className="footer__office-title">
              <img
                className="footer__flag"
                src="./images/flag-uae.svg"
                alt=""
              />
              <h3 className="footer__card-title footer__card-title_type_office">
                Dubai office
              </h3>
            </div>
            <ul className="footer__links-list">
              <li className="footer__list-item">
                <address className="footer__address">
                  Platinum Tower, 3905, JLT
                </address>
              </li>
              <li className="footer__list-item">
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href="tel:+97145667713"
                >
                  T: +971 4 566 7713
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href="mailto:info@integral-commodities.ch"
                >
                  info@integral-commodities.ch
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__card">
            <div className="footer__office-title">
              <img className="footer__flag" src="images/flag-ch.svg" alt="" />
              <h3 className="footer__card-title footer__card-title_type_office">
                Lugano office
              </h3>
            </div>
            <ul className="footer__links-list">
              <li className="footer__list-item">
                <address className="footer__address">Via F. Pelli 13B</address>
              </li>
              <li className="footer__list-item">
                <address className="footer__address">
                  6900 Lugano, Switzerland
                </address>
              </li>
              <li className="footer__list-item">
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href="tel:+41912083157"
                >
                  T: +41912083157
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href="mailto:info@integral-commodities.ch"
                >
                  info@integral-commodities.ch
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__card footer__card_size_double">
            <h3 className="footer__card-title">Local representatives</h3>
            <ul className="footer__countries-list">
              <li className="footer__country">
                <img
                  className="footer__country-image"
                  src="./images/flag-uae.svg"
                  alt=""
                />
                <p className="footer__country-title">UAE</p>
              </li>
              <li className="footer__country">
                <img
                  className="footer__country-image"
                  src="images/flag-uz.svg"
                  alt=""
                />
                <p className="footer__country-title">Uzbekistan</p>
              </li>
              <li className="footer__country">
                <img
                  className="footer__country-image"
                  src="images/flag-tm.svg"
                  alt=""
                />
                <p className="footer__country-title">Turkmenistan</p>
              </li>
              <li className="footer__country">
                <img
                  className="footer__country-image"
                  src="images/flag-tr.svg"
                  alt=""
                />
                <p className="footer__country-title">Turkey</p>
              </li>
              <li className="footer__country">
                <img
                  className="footer__country-image"
                  src="images/flag-kz.svg"
                  alt=""
                />
                <p className="footer__country-title">Kazakhstan</p>
              </li>
              <li className="footer__country">
                <img
                  className="footer__country-image"
                  src="./images/flag-rf.svg"
                  alt=""
                />
                <p className="footer__country-title">
                  Russian&nbsp;Federation
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div className="footer__logo-container">
          <Link href="/products/polymers">
            <span className="logo logo_place_footer"></span>
          </Link>
        </div>
        <div className="footer__copyright-container">
          <p className="footer__copyright">
            © 2021 Integral Commodities. All Rights reserved
          </p>
          <ul className="footer__copyright-list">
            <li className="footer__copyright-item">
              <a
                className={cn('footer__copyright-link', linkClasses.link)}
                href="/documents/terms.pdf"
                target="_blank"
                download
              >
                Terms
              </a>
            </li>
            <li className="footer__copyright-item">
              <a
                className={cn('footer__copyright-link', linkClasses.link)}
                href="/documents/privacy.pdf"
                target="_blank"
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
