import Link from 'next/link';
import classes from './FooterMobile.module.css';
import useTranslation from 'next-translate/useTranslation';

const FooterMobile = () => {
  const { t } = useTranslation();
  return (
    <footer className={classes.root}>
      <div className={classes.wrapper}>
        <nav className={classes.nav}>
          <div className={classes.linksWrapper}>
            <h3 className={classes.linksHeader}>
              {t('common:menu.polymers')}
            </h3>
            <ul className={classes.linksList}>
              <li className={classes.linksItem}>
                <Link href='/products/polymers?type=HDPE'>
                  {t('common:menu.hdpe')}
                </Link>
              </li>
              <li className={classes.linksItem}>
                <Link href='/products/polymers?type=LDPE'>
                  {t('common:menu.ldpe')}
                </Link>
              </li>
              <li className={classes.linksItem}>
                <Link href='/products/polymers?type=PP'>
                  {t('common:menu.pp')}
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.linksWrapper}>
            <h3 className={classes.linksHeader}>
              {t('common:menu.fertilizers')}
            </h3>
            <ul className={classes.linksList}>
              <li className={classes.linksItem}>
                <Link href='/products/id/9?tab=product'>
                  {t('common:fertilizers.urea grade “b”')}
                </Link>
              </li>
              <li className={classes.linksItem}>
                <Link href='/products/id/10?tab=product'>
                  {t('common:fertilizers.potassium chloride')}
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.linksWrapper}>
            <h3 className={classes.linksHeader}>{t('common:menu.sulphur')}</h3>
            <ul className={classes.linksList}>
              <li className={classes.linksItem}>
                <Link href='/products/sulphur'>
                  {t('common:sulphur.sulphur')}
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.linksWrapper}>
            <h3 className={classes.linksHeader}>{t('common:menu.pages')}</h3>
            <ul className={classes.linksList}>
              <li className={classes.linksItem}>
                <Link href='/about-us'>{t('common:menu.about us')}</Link>
              </li>
              <li className={classes.linksItem}>
                <Link href='/order/step-1'>
                  {t('common:menu.order process')}
                </Link>
              </li>
              <li className={classes.linksItem}>
                <Link href='/about-us#futures'>
                  {t('common:menu.services')}
                </Link>
              </li>
              <li className={classes.linksItem}>
                <Link href='/partners'>{t('common:menu.partners')}</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={classes.offices}>
          <ul className={classes.officesList}>
            <li className={classes.officesItem}>
              <a href='/about-us#dubai'>
                <div className={classes.officeHeader}>
                  <img
                    className={classes.officeImage}
                    src='/images/flag-uae.svg'
                    alt=''
                  />
                  <h3 className={classes.officeTitle}>
                    {t('common:footer.dubai office')}
                  </h3>
                </div>
              </a>
              <address className={classes.officeContent}>
                Platinum Tower , 3905, JLT
              </address>
              <a className={classes.officeContent} href='tel:+97145667713'>
                T: +971 4 566 7713
              </a>
              <a
                className={classes.officeContent}
                href='mailto:info@integral-commodities.ch'
              >
                info@integral-commodities.ch
              </a>
              <a
                className={classes.officeContent}
                href='mailto:sales@integral-commodities.ch'
              >
                sales@integral-commodities.ch
              </a>
            </li>
            <li className={classes.officesItem}>
              <a href='/about-us#lugano'>
                <div className={classes.officeHeader}>
                  <img
                    className={classes.officeImage}
                    src='/images/flag-ch.svg'
                    alt=''
                  />
                  <h3 className={classes.officeTitle}>
                    {t('common:footer.lugano office')}
                  </h3>
                </div>
              </a>
              <address className={classes.officeContent}>
                Via F. Pelli 13 B. 6900 Lugano, Switzerland
              </address>
              <a className={classes.officeContent} href='tel:+41912083157'>
                T: +41912083157
              </a>
              <a
                className={classes.officeContent}
                href='mailto:lugano@integral-commodities.ch'
              >
                lugano@integral-commodities.ch
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.locals}>
          <h3 className={classes.localsHeader}>Local representatives</h3>
          <ul className={classes.localsList}>
            <li>
              <a className={classes.localsItem} href='/about-us#dubai'>
                <img
                  className={classes.localsImage}
                  src='/images/flag-uae.svg'
                  alt=''
                />
                <p className={classes.localsName}>{t('common:footer.uae')}</p>
              </a>
            </li>
            <li>
              <a className={classes.localsItem} href='/about-us#uzbekistan'>
                <img
                  className={classes.localsImage}
                  src='/images/flag-uz.svg'
                  alt=''
                />
                <p className={classes.localsName}>
                  {t('common:footer.uzbekistan')}
                </p>
              </a>
            </li>
            <li>
              <a className={classes.localsItem} href='/about-us#turkmenistan'>
                <img
                  className={classes.localsImage}
                  src='/images/flag-tm.svg'
                  alt=''
                />
                <p className={classes.localsName}>
                  {t('common:footer.turkmenistan')}
                </p>
              </a>
            </li>
            <li>
              <a className={classes.localsItem} href='/about-us#turkey'>
                <img
                  className={classes.localsImage}
                  src='/images/flag-tr.svg'
                  alt=''
                />
                <p className={classes.localsName}>
                  {t('common:footer.turkey')}
                </p>
              </a>
            </li>
            <li>
              <a className={classes.localsItem} href='/about-us#kazakhstan'>
                <img
                  className={classes.localsImage}
                  src='/images/flag-kz.svg'
                  alt=''
                />
                <p className={classes.localsName}>
                  {t('common:footer.kazakhstan')}
                </p>
              </a>
            </li>
            <li>
              <a className={classes.localsItem} href='/about-us#russia'>
                <img
                  className={classes.localsImage}
                  src='/images/flag-rf.svg'
                  alt=''
                />
                <p className={classes.localsName}>
                  {t('common:footer.russia')}
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.copyright}>
          <div className={classes.copyrightWrapper}>
            <p className={classes.copyrightText}>
              &copy; 2021 Integral Commodities.{' '}
              {t('common:footer.all rights reserved')}
            </p>
            <ul className={classes.copyrightLinks}>
              <li className={classes.copyrightLinksItem}>
                <a
                  className={classes.copyrightLink}
                  href='/documents/terms.pdf'
                  target='_blank'
                  download
                >
                  {t('common:footer.terms')}
                </a>
              </li>
              <li className={classes.copyrightLinksItem}>
                <a
                  className={classes.copyrightLink}
                  href='/documents/privacy.pdf'
                  target='_blank'
                  download
                >
                  {t('common:footer.privacy')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
