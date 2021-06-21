import Link from "next/link";
import classes from "./footer-mobile.module.css";

const FooterMobile = () => {
  return (
    <footer className={classes.root}>
      <div className={classes.wrapper}>
        <nav className={classes.nav}>
          <div className={classes.linksWrapper}>
            <h3 className={classes.linksHeader}>Polymers</h3>
            <ul className={classes.linksList}>
              <li className={classes.linksItem}>
                <Link href="/products/polymers?type=HDPE">HDPE</Link>
              </li>
              <li className={classes.linksItem}>
                <Link href="/products/polymers?type=LDPE">LDPE</Link>
              </li>
              <li className={classes.linksItem}>
                <Link href="/products/polymers?type=PP">PP</Link>
              </li>
            </ul>
          </div>
          <div className={classes.linksWrapper}>
            <h3 className={classes.linksHeader}>Fertilizers</h3>
            <ul className={classes.linksList}>
              <li className={classes.linksItem}>
                <Link href="/products/id/9?tab=product">Urea “B”</Link>
              </li>
              <li className={classes.linksItem}>
                <Link href="/products/id/10?tab=product">
                  Potassium chloride
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.linksWrapper}>
            <h3 className={classes.linksHeader}>Sulphur</h3>
            <ul className={classes.linksList}>
              <li className={classes.linksItem}>
                <Link href="/products/sulphur">Sulphur lump</Link>
              </li>
            </ul>
          </div>
          <div className={classes.linksWrapper}>
            <h3 className={classes.linksHeader}>Pages</h3>
            <ul className={classes.linksList}>
              <li className={classes.linksItem}>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className={classes.linksItem}>
                <Link href="/order/step-1">
                  <a>Order process</a>
                </Link>
              </li>
              <li className={classes.linksItem}>
                <Link href="/services">
                  <a href="">Services</a>
                </Link>
              </li>
              <li className={classes.linksItem}>
                <Link href="/partners">
                  <a href="">Partners</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={classes.offices}>
          <ul className={classes.officesList}>
            <li className={classes.officesItem}>
              <div className={classes.officeHeader}>
                <img
                  className={classes.officeImage}
                  src="/images/flag-uae.svg"
                  alt=""
                />
                <h3 className={classes.officeTitle}>Dubai office</h3>
              </div>
              <address className={classes.officeContent}>
                Platinum Tower , 3905, JLT
              </address>
              <a className={classes.officeContent} href="tel:+97145667713">
                T: +971 4 566 7713
              </a>
              <a
                className={classes.officeContent}
                href="mailto:info@integral-commodities.ch"
              >
                info@integral-commodities.ch
              </a>
              <a
                className={classes.officeContent}
                href="mailto:sales@integral-commodities.ch"
              >
                sales@integral-commodities.ch
              </a>
            </li>
            <li className={classes.officesItem}>
              <div className={classes.officeHeader}>
                <img
                  className={classes.officeImage}
                  src="/images/flag-ch.svg"
                  alt=""
                />
                <h3 className={classes.officeTitle}>Lugano office</h3>
              </div>
              <address className={classes.officeContent}>
                Via F. Pelli 13 B. 6900 Lugano, Switzerland
              </address>
              <a className={classes.officeContent} href="tel:+41912083157">
                T: +41912083157
              </a>
              <a
                className={classes.officeContent}
                href="mailto:lugano@integral-commodities.ch"
              >
                lugano@integral-commodities.ch
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.locals}>
          <h3 className={classes.localsHeader}>Local representatives</h3>
          <ul className={classes.localsList}>
            <li className={classes.localsItem}>
              <img
                className={classes.localsImage}
                src="/images/flag-uae.svg"
                alt=""
              />
              <p className={classes.localsName}>UAE</p>
            </li>
            <li className={classes.localsItem}>
              <img
                className={classes.localsImage}
                src="/images/flag-uz.svg"
                alt=""
              />
              <p className={classes.localsName}>Uzbekistan</p>
            </li>
            <li className={classes.localsItem}>
              <img
                className={classes.localsImage}
                src="/images/flag-tm.svg"
                alt=""
              />
              <p className={classes.localsName}>Turkmenistan</p>
            </li>
            <li className={classes.localsItem}>
              <img
                className={classes.localsImage}
                src="/images/flag-tr.svg"
                alt=""
              />
              <p className={classes.localsName}>Turkey</p>
            </li>
            <li className={classes.localsItem}>
              <img
                className={classes.localsImage}
                src="/images/flag-kz.svg"
                alt=""
              />
              <p className={classes.localsName}>Kazakhstan</p>
            </li>
            <li className={classes.localsItem}>
              <img
                className={classes.localsImage}
                src="/images/flag-rf.svg"
                alt=""
              />
              <p className={classes.localsName}>Russian Federation</p>
            </li>
          </ul>
        </div>
        <div className={classes.copyright}>
          <div className={classes.copyrightWrapper}>
            <p className={classes.copyrightText}>
              &copy; 2021 Integral Commodities. All Rights reserved
            </p>
            <ul className={classes.copyrightLinks}>
              <li className={classes.copyrightLinksItem}>
                <a className={classes.copyrightLink} href="/">
                  Terms
                </a>
              </li>
              <li className={classes.copyrightLinksItem}>
                <a className={classes.copyrightLink} href="/">
                  Privacy
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
