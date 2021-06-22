import useWindowDimensions from "../hooks/useWindowDemensions";

function AboutPage() {
  const { width } = useWindowDimensions();
  const shouldShowFutureDesc = width > 768;

  return (
    <>
      <section className="features">
        <ul className="features__list">
          <li className="features__item features__item_has-two-columns feature">
            <span className="feature__question">Why</span>
            <span className="feature__answer feature__answer_size-48">
              To make regional products easily accessible for international
              buyers
            </span>
          </li>
          <li className="features__item feature">
            <span className="feature__question">What</span>
            <span className="feature__answer feature__answer_size-36">
              Polymers and fertilizers originating from the Caspian Region
            </span>
            <div className="feature__illustration">
              <img
                className="feature__illustration-item"
                src="./images/recycle-hdpe.svg"
                alt=""
              />
              <img
                className="feature__illustration-item"
                src="./images/recycle-pp.svg"
                alt=""
              />
              <img
                className="feature__illustration-item"
                src="./images/recycle-ldpe.svg"
                alt=""
              />
            </div>
          </li>
          <li className="features__item feature">
            <span className="feature__question">How</span>
            <span className="feature__answer feature__answer_size-36">
              Making it possible to find full information, negotiate, complete
              and track orders online
            </span>
          </li>
        </ul>
      </section>
      <section className="achievement">
        <div className="achievement__wrapper">
          <img
            className="achievement__logo"
            src="./images/achievement-logo.svg"
            alt=""
          />
          <p className="achievement__text">
            In 2018 Integral Commodities SA became one of the largest exporters
            of Polymers (PP, PE), Fertilisers (Urea, Potash), Sulphur and Carbon
            Black originating from the Greater Caspian Region.
          </p>
          <img
            className="achievement__decoration"
            src="./images/achievement-decoration.svg"
            alt=""
          />
        </div>
      </section>
      <section className="milestones">
        <h2 className="milestones__header">Key milestones</h2>
        <div className="milestones__list">
          <img
            className="milestones__arrow milestones__arrow_left"
            src="./images/milestones-left-arrow.svg"
            alt=""
          />
          <div className="milestones__item milestone">
            <h3 className="milestone__header">Endtime event</h3>
            <span className="milestone__date">2021</span>
            <p className="milestone__text">
              Here we talk about the key event of the company in a couple of
              short pre-offers.
            </p>
          </div>
          <div className="milestones__item milestone">
            <h3 className="milestone__header">Endtime event</h3>
            <span className="milestone__date">2021</span>
            <p className="milestone__text">
              Here we talk about the key event of the company in a couple of
              short pre-offers.
            </p>
          </div>
          <div className="milestones__item milestone">
            <h3 className="milestone__header">Endtime event</h3>
            <span className="milestone__date">2020</span>
            <p className="milestone__text">
              Here we talk about the key event of the company in a couple of
              short pre-offers.
            </p>
          </div>
          <img
            className="milestones__arrow milestones__arrow_right"
            src="./images/milestones-right-arrow.svg"
            alt=""
          />
        </div>
      </section>
      <section className="futures">
        <h2 className="futures__header">
          <a name="futures">Future releases</a>
        </h2>
        <div className="futures__list">
          <div className="futures__item futures__item_big future-card future-card_big">
            <img
              className="future-card__icon future-card__icon_big"
              src="./images/future-tracking.svg"
              alt=""
            />
            <p className="future-card__text future-card__text_big">
              Tracking the shipment online in user account
            </p>
          </div>
          {shouldShowFutureDesc && (
            <div className="futures__item futures__item_big future-desc">
              <p className="future-desc__text">
                here we talk about the key event of the company in a couple of
                short pre-offers. Very succinctly and link to the article, if
                there is one
              </p>
            </div>
          )}
          <div className="futures__item futures__item_little future-card future-card_little">
            <img
              className="future-card__icon future-card__icon_little"
              src="./images/future-subscription.svg"
              alt=""
            />
            <p className="future-card__text future-card__text_little">
              Subscription to news about product launches, availability, price
            </p>
          </div>
          <div className="futures__item futures__item_little future-card future-card_little">
            <img
              className="future-card__icon future-card__icon_little"
              src="./images/future-search.svg"
              alt=""
            />
            <p className="future-card__text future-card__text_little">
              Find analog of your grade raw materials
            </p>
          </div>
          <div className="futures__item futures__item_little future-card future-card_little">
            <img
              className="future-card__icon future-card__icon_little"
              src="./images/future-search.svg"
              alt=""
            />
            <p className="future-card__text future-card__text_little">
              Find analog of your grade raw materials
            </p>
          </div>
          <div className="futures__item futures__item_little future-card future-card_little">
            <img
              className="future-card__icon future-card__icon_little"
              src="./images/future-search.svg"
              alt=""
            />
            <p className="future-card__text future-card__text_little">
              Find analog of your grade raw materials
            </p>
          </div>
          <div className="futures__item futures__item_little future-card future-card_little">
            <img
              className="future-card__icon future-card__icon_little"
              src="./images/future-subscription.svg"
              alt=""
            />
            <p className="future-card__text future-card__text_little">
              Subscription to news about product launches, availability, price
            </p>
          </div>
        </div>
      </section>
      <section className="events">
        <div className="events__wrapper">
          <h2 className="events__header">Organizer</h2>
          <h3 className="events__name">Caspian Week</h3>
          <ul className="events__list">
            <li className="events__item event">
              <span className="event__date">2021</span>
              <div className="event__text-wrapper">
                <p className="event__text">
                  THE 2020 EDITION WILL BREAK NEW GROUND IN COVERING A BROAD
                  ARRAY OF TOPICS INCLUDING INNOVATION IN MANUFACTURING,
                  TRANSPORTATION AND FINANCE, CYBER SECURITY AND AI, AND
                  FIGHTING ILLICIT TRADE AS WELL AS NEW DEVELOPMENTS IN
                  HEALTHCARE, FINANCIAL INCLUSION AND EDUCATION.
                </p>
                <span className="event__link">more →</span>
              </div>
            </li>
            <li className="events__item event">
              <span className="event__date">2020</span>
              <div className="event__text-wrapper">
                <p className="event__text">
                  THE 2020 EDITION WILL BREAK NEW GROUND IN COVERING A BROAD
                  ARRAY OF TOPICS INCLUDING INNOVATION IN MANUFACTURING,
                  TRANSPORTATION AND FINANCE, CYBER SECURITY AND AI, AND
                  FIGHTING ILLICIT TRADE AS WELL AS NEW DEVELOPMENTS IN
                  HEALTHCARE, FINANCIAL INCLUSION AND EDUCATION.
                </p>
                <span className="event__link">more →</span>
              </div>
            </li>
          </ul>
          <button className="events_button">
            Go to official site Caspian Week
          </button>
        </div>
      </section>
      <section className="offices">
        <h2 className="offices__header">Offices</h2>
        <ul className="offices__list">
          <li
            className="offices__item offices__item_has-two-columns office"
            style={{ backgroundImage: "url(/images/switzerland-map.svg)" }}
          >
            <a
              name="lugano"
              style={{
                visibility: "hidden",
                position: "absolute",
                top: -10,
                left: 0,
              }}
            />
            <div className="office__info office-description">
              <img
                className="office-description__flag"
                src="/images/flag-ch.svg"
                alt=""
              />
              <h2 className="office-description__name">
                Lugano
                <br />
                Switzerland
              </h2>
              <p className="office-description__contacts">
                Via F. Pelli 13B, 6900
                <br />
                Lugano, Switzerland
                <br />
                <br />
                T: +41912083157
                <br />
                F: +41912083167
                <br />
                lugano@integral-commodities.ch
              </p>
            </div>
            <img
              className="office__map"
              src="/images/switzerland-map.svg"
              alt=""
            />
          </li>
          <li
            className="offices__item offices__item_has-two-columns office"
            style={{ backgroundImage: "url(/images/uae-map.svg)" }}
          >
            <a
              name="dubai"
              style={{
                visibility: "hidden",
                position: "absolute",
                top: -10,
                left: 0,
              }}
            />
            <div className="office__info office-description">
              <img
                className="office-description__flag"
                src="/images/flag-uae.svg"
                alt=""
              />
              <h2 className="office-description__name">
                Dubai
                <br />
                UAE
              </h2>
              <p className="office-description__contacts">
                Platinum Tower,
                <br />
                3905, JLT, Dubai,
                <br />
                United Arab Emirates
                <br />
                <br />
                T: +971 4 566 7713
                <br />
                F: +41912083167
                <br />
                dubai@integral-commodities.ch
              </p>
            </div>
            <img className="office__map" src="/images/uae-map.svg" alt="" />
          </li>
          <li
            className="offices__item offices__item_has-two-columns office"
            style={{ backgroundImage: "url(/images/turkmenistan-map.svg)" }}
          >
            <a
              name="turkmenistan"
              style={{
                visibility: "hidden",
                position: "absolute",
                top: -10,
                left: 0,
              }}
            />
            <div className="office__info office-description">
              <img
                className="office-description__flag"
                src="/images/flag-tm.svg"
                alt=""
              />
              <h2 className="office-description__name">
                Ashgabat
                <br />
                Turkmenistan
              </h2>
              <p className="office-description__contacts">
                Archabil avenue 17,
                <br />
                office № 1, 744036,
                <br />
                Ashgabat, Turkmenistan
                <br />
                <br />
                T: +971 4 566 7713
                <br />
                ashgabat@integral-commodities.ch
              </p>
            </div>
            <img
              className="office__map"
              src="/images/turkmenistan-map.svg"
              alt=""
            />
          </li>
          <li
            className="offices__item offices__item_has-two-columns office"
            style={{ backgroundImage: "url(/images/turkey-map.svg)" }}
          >
            <a
              name="turkey"
              style={{
                visibility: "hidden",
                position: "absolute",
                top: -10,
                left: 0,
              }}
            />
            <div className="office__info office-description">
              <img
                className="office-description__flag"
                src="/images/flag-tr.svg"
                alt=""
              />
              <h2 className="office-description__name">
                Mersin
                <br />
                Turkey
              </h2>
              <p className="office-description__contacts">
                Kalekoy mahallesi,
                <br />
                32027 sokak,
                <br />
                Star apartman, №35
                <br />
                Mersin, Turkey
                <br />
                <br />
                T: +90 552 294 62 77
                <br />
                mersin@integral-commodities.ch
              </p>
            </div>
            <img className="office__map" src="/images/turkey-map.svg" alt="" />
          </li>
          <li
            className="offices__item offices__item_has-two-columns office"
            style={{ backgroundImage: "url(/images/uzbekistan-map.svg)" }}
          >
            <a
              name="uzbekistan"
              style={{
                visibility: "hidden",
                position: "absolute",
                top: -10,
                left: 0,
              }}
            />
            <div className="office__info office-description">
              <img
                className="office-description__flag"
                src="/images/flag-uz.svg"
                alt=""
              />
              <h2 className="office-description__name">
                Tashkent
                <br />
                Uzbekistan
              </h2>
              <p className="office-description__contacts">
                Tashkent, Uzbekistan
                <br />
                Mukimiy 162/30, Chilanzar district
                <br />
                <br />
                T: +998 99 935 90 90
                <br />
                tashkent@integral-commodities.ch
              </p>
            </div>
            <img
              className="office__map"
              src="/images/uzbekistan-map.svg"
              alt=""
            />
          </li>
          <li
            className="offices__item offices__item_has-two-columns office"
            style={{ backgroundImage: "url(/images/kazakhstan-map.svg)" }}
          >
            <a
              name="kazakhstan"
              style={{
                visibility: "hidden",
                position: "absolute",
                top: -10,
                left: 0,
              }}
            />
            <div className="office__info office-description">
              <img
                className="office-description__flag"
                src="/images/flag-kz.svg"
                alt=""
              />
              <h2 className="office-description__name">
                Aktau
                <br />
                Kazakhstan
              </h2>
              <p className="office-description__contacts">
                Kazakhstan, Aktu
                <br />
                microdistrict 14, 61
                <br />
                <br />
                T: +77750001388
                <br />
                aktau@integral-commodities.ch
              </p>
            </div>
            <img
              className="office__map"
              src="/images/kazakhstan-map.svg"
              alt=""
            />
          </li>
          <li
            className="offices__item offices__item_has-two-columns office"
            style={{ backgroundImage: "url(/images/russia-map.svg)" }}
          >
            <a
              name="russia"
              style={{
                visibility: "hidden",
                position: "absolute",
                top: -10,
                left: 0,
              }}
            />
            <div className="office__info office-description">
              <img
                className="office-description__flag"
                src="/images/flag-rf.svg"
                alt=""
              />
              <h2 className="office-description__name">
                Novosibirsk
                <br />
                Russia
              </h2>
              <p className="office-description__contacts">
                Novosibirsk region,
                <br />
                Akademgorodok,
                <br />
                Musa Jalil 11
                <br />
                <br />
                nsk@integral-commodities.ch
              </p>
            </div>
            <img className="office__map" src="/images/russia-map.svg" alt="" />
          </li>
        </ul>
      </section>
    </>
  );
}

export default AboutPage;
