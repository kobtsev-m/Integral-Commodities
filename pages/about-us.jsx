import { useRef } from 'react';
import Trans from 'next-translate/Trans';
import useWindowDimensions from '../utils/hooks/useWindowDemensions';

function AboutPage() {
  const milestonesBoxRef = useRef();

  const handleMilestonesArrowClick = (side) => {
    const xDiff = side === 'left' ? -250 : 250;
    const newScrollPosition = milestonesBoxRef.current.scrollLeft + xDiff;
    milestonesBoxRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section className='features'>
        <ul className='features__list'>
          <li className='features__item features__item_has-two-columns feature'>
            <span className='feature__question'>
              <Trans i18nKey='about:why.title' />
            </span>
            <span className='feature__answer feature__answer_size-48'>
              <Trans i18nKey='about:why.text' />
            </span>
          </li>
          <li className='features__item feature'>
            <span className='feature__question'>
              <Trans i18nKey='about:what.title' />
            </span>
            <span className='feature__answer feature__answer_size-36'>
              <Trans i18nKey='about:what.text' />
            </span>
            <div className='feature__illustration'>
              <img
                className='feature__illustration-item'
                src='./images/recycle-hdpe.svg'
                alt=''
              />
              <img
                className='feature__illustration-item'
                src='./images/recycle-pp.svg'
                alt=''
              />
              <img
                className='feature__illustration-item'
                src='./images/recycle-ldpe.svg'
                alt=''
              />
            </div>
          </li>
          <li className='features__item feature'>
            <span className='feature__question'>
              <Trans i18nKey='about:how.title' />
            </span>
            <span className='feature__answer feature__answer_size-36'>
              <Trans i18nKey='about:how.text' />
            </span>
          </li>
        </ul>
      </section>
      <section className='achievement'>
        <div className='achievement__wrapper'>
          <img
            className='achievement__logo'
            src='./images/achievement-logo.svg'
            alt=''
          />
          <p className='achievement__text'>
            <Trans i18nKey='about:noteBlock' />
          </p>
          <img
            className='achievement__decoration'
            src='./images/achievement-decoration.svg'
            alt=''
          />
        </div>
      </section>
      <section className='milestones'>
        <h2 className='milestones__header'>
          <Trans i18nKey='about:keyMilestones.title' />
        </h2>
        <img
          className='milestones__arrow milestones__arrow_left'
          src='./images/milestones-left-arrow.svg'
          alt=''
          onClick={() => handleMilestonesArrowClick('left')}
        />
        <div ref={milestonesBoxRef} className='milestones__list'>
          <div className='milestones__item milestone'>
            {/* <h3 className="milestone__header">Endtime event</h3> */}
            <span className='milestone__date'>2021</span>
            <p className='milestone__text'>
              <Trans i18nKey='about:keyMilestones.2021' />
            </p>
          </div>
          <div className='milestones__item milestone'>
            <span className='milestone__date'>2019</span>
            <p className='milestone__text'>
              <Trans i18nKey='about:keyMilestones.2019' />
            </p>
          </div>
          <div className='milestones__item milestone'>
            <span className='milestone__date'>2018</span>
            <p className='milestone__text'>
              <Trans i18nKey='about:keyMilestones.2018' />
            </p>
          </div>
          <div className='milestones__item milestone'>
            <span className='milestone__date'>2017</span>
            <p className='milestone__text'>
              <Trans i18nKey='about:keyMilestones.2017 1' />
            </p>
          </div>
          <div className='milestones__item milestone'>
            <span className='milestone__date'>2017</span>
            <p className='milestone__text'>
              <Trans i18nKey='about:keyMilestones.2017 2' />
            </p>
          </div>
          <div className='milestones__item milestone'>
            <span className='milestone__date'>2016</span>
            <p className='milestone__text'>
              <Trans i18nKey='about:keyMilestones.2016' />
            </p>
          </div>
          <div className='milestones__item milestone'>
            <span className='milestone__date'>2015</span>
            <p className='milestone__text'>
              <Trans i18nKey='about:keyMilestones.2015' />
            </p>
          </div>
          <div className='milestones__item milestone'>
            <span className='milestone__date'>2008</span>
            <p className='milestone__text'>
              <Trans i18nKey='about:keyMilestones.2008' />
            </p>
          </div>
        </div>
        <img
          className='milestones__arrow milestones__arrow_right'
          src='./images/milestones-right-arrow.svg'
          alt=''
          onClick={() => handleMilestonesArrowClick('right')}
        />
      </section>
      <section className='futures'>
        <h2 className='futures__header'>
          <a name='futures'>
            <Trans i18nKey='about:futureReleases.title' />
          </a>
        </h2>
        <div className='futures__list'>
          <div className='futures__item futures__item_little future-card future-card_little'>
            <img
              className='future-card__icon future-card__icon_little'
              src='./images/future-tracking.svg'
              alt=''
            />
            <p className='future-card__text future-card__text_little'>
              <Trans i18nKey='about:futureReleases.tracking' />
            </p>
          </div>
          <div className='futures__item futures__item_little future-card future-card_little'>
            <img
              className='future-card__icon future-card__icon_little'
              src='./images/future-search.svg'
              alt=''
            />
            <p className='future-card__text future-card__text_little'>
              <Trans i18nKey='about:futureReleases.find service' />
            </p>
          </div>
          <div className='futures__item futures__item_little future-card future-card_little'>
            <img
              className='future-card__icon future-card__icon_little'
              src='./images/future-online.svg'
              alt=''
            />
            <p className='future-card__text future-card__text_little'>
              <Trans i18nKey='about:futureReleases.online payment' />
            </p>
          </div>
          <div className='futures__item futures__item_little future-card future-card_little'>
            <img
              className='future-card__icon future-card__icon_little'
              src='./images/future-reordering.svg'
              alt=''
            />
            <p className='future-card__text future-card__text_little'>
              <Trans i18nKey='about:futureReleases.re-ordering' />
            </p>
          </div>
          <div className='futures__item futures__item_little future-card future-card_little'>
            <img
              className='future-card__icon future-card__icon_little'
              src='./images/future-subscription.svg'
              alt=''
            />
            <p className='future-card__text future-card__text_little'>
              <Trans i18nKey='about:futureReleases.subscription' />
            </p>
          </div>
          <div className='futures__item futures__item_little future-card future-card_little'>
            <img
              className='future-card__icon future-card__icon_little'
              src='./images/future-search.svg'
              alt=''
            />
            <p className='future-card__text future-card__text_little'>
              <Trans i18nKey='about:futureReleases.find analog' />
            </p>
          </div>
        </div>
      </section>
      <section className='events'>
        <div className='events__wrapper'>
          <h2 className='events__header'>
            <Trans i18nKey='about:caspianWeek.title' />
          </h2>
          <h3 className='events__name'>Caspian Week</h3>
          <ul className='events__list'>
            <li className='events__item event'>
              <span className='event__date'>2021</span>
              <div className='event__text-wrapper'>
                <p className='event__text'>
                  <Trans i18nKey='about:caspianWeek.2021' />
                </p>
                <a
                  href='https://caspianweek.com/caspian-week-a-strategic-partner-of-the-annual-global-meeting-held'
                  className='event__link'
                  target='_blank'
                >
                  <Trans i18nKey='about:caspianWeek.more' /> →
                </a>
              </div>
            </li>
            <li className='events__item event'>
              <span className='event__date'>2020</span>
              <div className='event__text-wrapper'>
                <p className='event__text'>
                  <Trans i18nKey='about:caspianWeek.2020' />
                </p>
                <a
                  href='https://caspianweek.com/agenda'
                  className='event__link'
                  target='_blank'
                >
                  <Trans i18nKey='about:caspianWeek.more' /> →
                </a>
              </div>
            </li>
          </ul>
          <a
            href='https://caspianweek.com'
            className='events_button'
            target='_blank'
          >
            <Trans i18nKey='about:caspianWeek.button' />
          </a>
        </div>
      </section>
      <section className='offices'>
        <h2 className='offices__header'>
          <Trans i18nKey='about:offices.title' />
        </h2>
        <ul className='offices__list'>
          <li
            className='offices__item offices__item_has-two-columns office'
            style={{ backgroundImage: 'url(/images/switzerland-map.svg)' }}
          >
            <a
              name='lugano'
              style={{
                visibility: 'hidden',
                position: 'absolute',
                top: -10,
                left: 0
              }}
            />
            <div className='office__info office-description'>
              <img
                className='office-description__flag'
                src='/images/flag-ch.svg'
                alt=''
              />
              <h2 className='office-description__name'>
                <Trans i18nKey='about:offices.lugano' components={[<br />]} />
              </h2>
              <p className='office-description__contacts'>
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
              className='office__map'
              src='/images/switzerland-map.svg'
              alt=''
            />
          </li>
          <li
            className='offices__item offices__item_has-two-columns office'
            style={{ backgroundImage: 'url(/images/uae-map.svg)' }}
          >
            <a
              name='dubai'
              style={{
                visibility: 'hidden',
                position: 'absolute',
                top: -10,
                left: 0
              }}
            />
            <div className='office__info office-description'>
              <img
                className='office-description__flag'
                src='/images/flag-uae.svg'
                alt=''
              />
              <h2 className='office-description__name'>
                <Trans i18nKey='about:offices.dubai' components={[<br />]} />
              </h2>
              <p className='office-description__contacts'>
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
            <img className='office__map' src='/images/uae-map.svg' alt='' />
          </li>
          <li
            className='offices__item offices__item_has-two-columns office'
            style={{ backgroundImage: 'url(/images/turkmenistan-map.svg)' }}
          >
            <a
              name='turkmenistan'
              style={{
                visibility: 'hidden',
                position: 'absolute',
                top: -10,
                left: 0
              }}
            />
            <div className='office__info office-description'>
              <img
                className='office-description__flag'
                src='/images/flag-tm.svg'
                alt=''
              />
              <h2 className='office-description__name'>
                <Trans
                  i18nKey='about:offices.ashgabat'
                  components={[<br />]}
                />
              </h2>
              <p className='office-description__contacts'>
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
              className='office__map'
              src='/images/turkmenistan-map.svg'
              alt=''
            />
          </li>
          <li
            className='offices__item offices__item_has-two-columns office'
            style={{ backgroundImage: 'url(/images/turkey-map.svg)' }}
          >
            <a
              name='turkey'
              style={{
                visibility: 'hidden',
                position: 'absolute',
                top: -10,
                left: 0
              }}
            />
            <div className='office__info office-description'>
              <img
                className='office-description__flag'
                src='/images/flag-tr.svg'
                alt=''
              />
              <h2 className='office-description__name'>
                <Trans i18nKey='about:offices.mersin' components={[<br />]} />
              </h2>
              <p className='office-description__contacts'>
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
            <img className='office__map' src='/images/turkey-map.svg' alt='' />
          </li>
          <li
            className='offices__item offices__item_has-two-columns office'
            style={{ backgroundImage: 'url(/images/uzbekistan-map.svg)' }}
          >
            <a
              name='uzbekistan'
              style={{
                visibility: 'hidden',
                position: 'absolute',
                top: -10,
                left: 0
              }}
            />
            <div className='office__info office-description'>
              <img
                className='office-description__flag'
                src='/images/flag-uz.svg'
                alt=''
              />
              <h2 className='office-description__name'>
                <Trans
                  i18nKey='about:offices.tashkent'
                  components={[<br />]}
                />
              </h2>
              <p className='office-description__contacts'>
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
              className='office__map'
              src='/images/uzbekistan-map.svg'
              alt=''
            />
          </li>
          <li
            className='offices__item offices__item_has-two-columns office'
            style={{ backgroundImage: 'url(/images/kazakhstan-map.svg)' }}
          >
            <a
              name='kazakhstan'
              style={{
                visibility: 'hidden',
                position: 'absolute',
                top: -10,
                left: 0
              }}
            />
            <div className='office__info office-description'>
              <img
                className='office-description__flag'
                src='/images/flag-kz.svg'
                alt=''
              />
              <h2 className='office-description__name'>
                <Trans i18nKey='about:offices.aktau' components={[<br />]} />
              </h2>
              <p className='office-description__contacts'>
                Kazakhstan, Aktau
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
              className='office__map'
              src='/images/kazakhstan-map.svg'
              alt=''
            />
          </li>
          <li
            className='offices__item offices__item_has-two-columns office'
            style={{ backgroundImage: 'url(/images/russia-map.svg)' }}
          >
            <a
              name='russia'
              style={{
                visibility: 'hidden',
                position: 'absolute',
                top: -10,
                left: 0
              }}
            />
            <div className='office__info office-description'>
              <img
                className='office-description__flag'
                src='/images/flag-rf.svg'
                alt=''
              />
              <h2 className='office-description__name'>
                <Trans
                  i18nKey='about:offices.novosibirsk'
                  components={[<br />]}
                />
              </h2>
              <p className='office-description__contacts'>
                Novosibirsk region,
                <br />
                Akademgorodok,
                <br />
                Musa Jalil 11
                <br />
                <br />
                T: +7 983 321 95 21
                <br />
                commercial@integral-vostok.ru
              </p>
            </div>
            <img className='office__map' src='/images/russia-map.svg' alt='' />
          </li>
        </ul>
      </section>
    </>
  );
}

export default AboutPage;
