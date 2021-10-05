import cn from 'classnames';

import moment from 'moment';
import Trans from 'next-translate/Trans';

import styles from './LatestOffers.module.css';

function LatestOffers({ offers }) {
  const sortedDates = offers
    .map((o) => o.date_of_validity)
    .sort((a, b) => {
      const date1 = moment(a, 'DD.MM.YYYY');
      const date2 = moment(b, 'DD.MM.YYYY');
      if (moment(date1).isBefore(moment(date2), 'd')) {
        return 1;
      } else if (moment(date1).isAfter(moment(date2), 'd')) {
        return -1;
      }
      return 0;
    });

  const firstOffer = sortedDates[offers.length - 1];
  const lastOffer = sortedDates[0];
  const earliestOfferDate = moment(firstOffer, 'DD.MM.YYYY').format('DD.MM');
  const latestOfferDate = moment(lastOffer, 'DD.MM.YYYY').format('DD.MM');

  if (!offers || !offers.length) {
    return (
      <h2 className='mt-4'>
        <Trans i18nKey='common:noLatestOffers' />
      </h2>
    );
  }

  return (
    <section className={styles.currentOffers}>
      <header className={styles.currentOffers__header}>
        <h2 className={styles.currentOffers__title}>
          <Trans i18nKey='common:latestOffersTitle' />
        </h2>
        <p className={styles.dates}>
          <Trans i18nKey='common:offerFields.dates' />
          {`: ${earliestOfferDate} – ${latestOfferDate}`}
        </p>
      </header>
      <table
        className={styles.currentOffers__table}
        style={{ marginRight: -10 }}
      >
        <thead className={styles.currentOffers__tableHead}>
          <tr className={styles.currentOffers__tableHeaderRow}>
            <th
              className={cn(
                styles.currentOffers__tableHeaderCell,
                styles.mobHiddenCol
              )}
            >
              <Trans i18nKey='common:offerFields.date of offer' />
            </th>
            <th
              className={cn(
                styles.currentOffers__tableHeaderCell,
                styles.headerCell_grade
              )}
            >
              <Trans i18nKey='common:offerFields.grade' />
            </th>
            <th className={styles.currentOffers__tableHeaderCell}>
              <Trans i18nKey='common:offerFields.place of delivery' />
            </th>
            <th
              className={styles.currentOffers__tableHeaderCell}
              style={{ textAlign: 'center' }}
            >
              <Trans i18nKey='common:offerFields.terms of delivery' />
            </th>
            <th
              className={cn(
                styles.currentOffers__tableHeaderCell,
                styles.mobHiddenCol
              )}
              style={{ textAlign: 'center' }}
            >
              <Trans i18nKey='common:offerFields.quantity/mt' />
            </th>
            <th
              className={cn(
                styles.currentOffers__tableHeaderCell,
                styles.mobHiddenCol
              )}
              style={{ textAlign: 'center' }}
            >
              <Trans i18nKey='common:offerFields.payment terms' />
            </th>
            <th className={styles.currentOffers__tableHeaderCell}>
              <Trans i18nKey='common:offerFields.price/mt' />
            </th>
          </tr>
        </thead>
        <tbody className={styles.currentOffers__tableBody}>
          {offers.slice(0, 7).map((offer, i) => (
            <tr className={styles.currentOffers__tableRow} key={`row-${i}`}>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.currentOffers__tableCell_center,
                  styles.mobHiddenCol
                )}
              >
                {offer.date_of_validity}
              </td>
              <td className={styles.currentOffers__tableCell}>
                {offer.grade}
              </td>
              <td className={styles.currentOffers__tableCell}>
                {offer.place_of_delivery}
              </td>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.currentOffers__tableCell_center
                )}
                style={{ textAlign: 'center' }}
              >
                {offer.terms_of_delivery}
              </td>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.currentOffers__tableCell_center,
                  styles.mobHiddenCol
                )}
                style={{ textAlign: 'center' }}
              >
                {offer.quantity}
              </td>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.mobHiddenCol
                )}
                style={{ textAlign: 'center' }}
              >
                <div className='p-3'>{offer.terms_of_payment}</div>
              </td>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.currentOffers__tableCell_center,
                  styles.currentOffers__tableCell_price
                )}
              >
                {offer.price}
                <Trans i18nKey='common:currency.dollar' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default LatestOffers;
