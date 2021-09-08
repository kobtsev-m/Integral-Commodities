import Link from 'next/link';

import FooterCard from './FooterCard';

import cn from 'classnames';
import linkClasses from 'styles/blocks/link.module.css';
import useWindowDimensions from '../../../../utils/hooks/useWindowDemensions';
import FooterMobile from '../mobile/FooterMobile';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

function FooterDesktop() {
  const { t } = useTranslation();
  const size = useWindowDimensions();

  const FooterLink = {
    HDPE: {
      blowMoulding: 'Blow moulding',
      film: 'Film',
      injectionMoulding: 'Injection moulding',
      meltSpinning: 'Melt spinning',
      pipe: 'Pipe'
    },
    LDPE: {
      film: 'Film'
    },
    PP: {
      blowMoulding: 'Blow moulding',
      extrusion: 'Extrusion',
      injectionMoulding: 'Injection moulding',
      meltSpinning: 'Melt spinning'
    },
    Sulphur: {}
  };

  if (!size.width) {
    return null;
  }

  if (size.width <= 768) {
    return <FooterMobile />;
  }

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__info'>
          {Object.entries(FooterLink).map(([key, value]) => (
            <FooterCard
              key={`footer-card-${key}-${value}`}
              data={value}
              type={key}
            />
          ))}
          <div className='footer__card'>
            <h3 className='footer__card-title'>
              <Trans i18nKey='common:menu.pages' />
            </h3>
            <ul className='footer__links-list'>
              <li className='footer__list-item'>
                <Link href='/about-us'>
                  <a className={cn('footer__link', linkClasses.link)}>
                    {t('common:menu.about us')}
                  </a>
                </Link>
              </li>
              <li className='footer__list-item'>
                <Link href='/order'>
                  <a className={cn('footer__link', linkClasses.link)}>
                    {t('common:menu.order process')}
                  </a>
                </Link>
              </li>
              <li className='footer__list-item'>
                <Link href='/about-us#futures'>
                  <a className={cn('footer__link', linkClasses.link)}>
                    {t('common:menu.services')}
                  </a>
                </Link>
              </li>
              <li className='footer__list-item'>
                <Link href='/partners'>
                  <a className={cn('footer__link', linkClasses.link)}>
                    {t('common:menu.partners')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer__card'>
            <h3 className={cn('footer__card-title', linkClasses.link)}>
              <Link href='/products/fertilizers'>
                {t('common:menu.fertilizers')}
              </Link>
            </h3>
            <ul className='footer__links-list'>
              <li className='footer__list-item'>
                <Link href='/products/fertilizers/urea-grade-b-'>
                  <a className={cn('footer__link', linkClasses.link)}>
                    {t('common:fertilizers.urea grade “b”')}
                  </a>
                </Link>
              </li>
              <li className='footer__list-item'>
                <Link href='/products/fertilizers/potassium-chloride'>
                  <a className={cn('footer__link', linkClasses.link)}>
                    {t('common:fertilizers.potassium chloride')}
                  </a>
                </Link>
              </li>
              <li className='footer__list-item'>
                <Link href='/products/fertilizers/ammophos'>
                  <a className={cn('footer__link', linkClasses.link)}>
                    {t('common:fertilizers.ammophos')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__representations'>
          <div className='footer__card'>
            <div className='footer__office-title'>
              <img
                className='footer__flag'
                src='./images/flag-uae.svg'
                alt=''
              />
              <h3 className='footer__card-title footer__card-title_type_office'>
                <Trans i18nKey='common:footer.dubai office' />
              </h3>
            </div>
            <ul className='footer__links-list'>
              <li className='footer__list-item'>
                <address className='footer__address'>
                  Platinum Tower, 3905, JLT
                </address>
              </li>
              <li className='footer__list-item'>
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href='tel:+97145667713'
                >
                  T: +971 4 566 7713
                </a>
              </li>
              <li className='footer__list-item'>
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href='mailto:info@integral-commodities.ch'
                >
                  info@integral-commodities.ch
                </a>
              </li>
              <li className='footer__list-item'>
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href='mailto:sales@integral-commodities.ch'
                >
                  sales@integral-commodities.ch
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__card'>
            <div className='footer__office-title'>
              <img className='footer__flag' src='images/flag-ch.svg' alt='' />
              <h3 className='footer__card-title footer__card-title_type_office'>
                <Trans i18nKey='common:footer.lugano office' />
              </h3>
            </div>
            <ul className='footer__links-list'>
              <li className='footer__list-item'>
                <address className='footer__address'>Via F. Pelli 13B</address>
              </li>
              <li className='footer__list-item'>
                <address className='footer__address'>
                  6900 Lugano, Switzerland
                </address>
              </li>
              <li className='footer__list-item'>
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href='tel:+41912083157'
                >
                  T: +41912083157
                </a>
              </li>
              <li className='footer__list-item'>
                <a
                  className={cn('footer__link', linkClasses.link)}
                  href='mailto:info@integral-commodities.ch'
                >
                  info@integral-commodities.ch
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__card footer__card_size_double'>
            <h3 className='footer__card-title'>Local representatives</h3>
            <ul className='footer__countries-list'>
              <li>
                <a className='footer__country' href='/about-us#dubai'>
                  <img
                    className='footer__country-image'
                    src='./images/flag-uae.svg'
                    alt=''
                  />
                  <p className='footer__country-title'>
                    <Trans i18nKey='common:footer.uae' />
                  </p>
                </a>
              </li>
              <li>
                <a className='footer__country' href='/about-us#uzbekistan'>
                  <img
                    className='footer__country-image'
                    src='./images/flag-uz.svg'
                    alt=''
                  />
                  <p className='footer__country-title'>
                    <Trans i18nKey='common:footer.uzbekistan' />
                  </p>
                </a>
              </li>
              <li>
                <a className='footer__country' href='/about-us#turkmenistan'>
                  <img
                    className='footer__country-image'
                    src='./images/flag-tm.svg'
                    alt=''
                  />
                  <p className='footer__country-title'>
                    <Trans i18nKey='common:footer.turkmenistan' />
                  </p>
                </a>
              </li>
              <li>
                <a className='footer__country' href='/about-us#turkey'>
                  <img
                    className='footer__country-image'
                    src='./images/flag-tr.svg'
                    alt=''
                  />
                  <p className='footer__country-title'>
                    <Trans i18nKey='common:footer.turkey' />
                  </p>
                </a>
              </li>
              <li>
                <a className='footer__country' href='/about-us#kazakhstan'>
                  <img
                    className='footer__country-image'
                    src='./images/flag-kz.svg'
                    alt=''
                  />
                  <p className='footer__country-title'>
                    <Trans i18nKey='common:footer.kazakhstan' />
                  </p>
                </a>
              </li>
              <li>
                <a className='footer__country' href='/about-us#russia'>
                  <img
                    className='footer__country-image'
                    src='./images/flag-rf.svg'
                    alt=''
                  />
                  <p className='footer__country-title'>
                    <Trans i18nKey='common:footer.russia' />
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__logo-container mt-3'>
          <Link href={t('common:homeLink')}>
            <span className='logo logo_place_footer'></span>
          </Link>
        </div>
        <div className='footer__copyright-container'>
          <p className='footer__copyright'>
            © 2021 Integral Commodities.{' '}
            <Trans i18nKey='common:footer.all rights reserved' />
          </p>
          <ul className='footer__copyright-list'>
            <li className='footer__copyright-item'>
              <a
                className={cn('footer__copyright-link', linkClasses.link)}
                href='/documents/terms.pdf'
                target='_blank'
                download
              >
                <Trans i18nKey='common:footer.terms' />
              </a>
            </li>
            <li className='footer__copyright-item'>
              <a
                className={cn('footer__copyright-link', linkClasses.link)}
                href='/documents/privacy.pdf'
                target='_blank'
                download
              >
                <Trans i18nKey='common:footer.privacy' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterDesktop;
