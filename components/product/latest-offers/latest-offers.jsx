import cn from 'classnames';

import styles from './latest-offers.module.css';

function LatestOffers(props) {
  const { offers } = props;

  if (!offers || !offers.length) {
    return <h2 className={'mt-4'}>There is no latest offers!</h2>;
  }

  return (
    <section className={styles.currentOffers}>
      <header className={styles.currentOffers__header}>
        <h2
          className={styles.currentOffers__title}
          style={{
            paddingLeft: 10,
            marginTop: 80,
            marginBottom: 50,
            fontWeight: 'normal'
          }}
        >
          Latest offers
        </h2>
      </header>
      <table
        className={styles.currentOffers__table}
        style={{ marginRight: -10 }}
      >
        <thead className={styles.currentOffers__tableHead}>
          <tr className={styles.currentOffers__tableHeaderRow}>
            <th className={styles.currentOffers__tableHeaderCell}>
              Date of offer
            </th>
            <th className={styles.currentOffers__tableHeaderCell}>Grade</th>
            <th className={styles.currentOffers__tableHeaderCell}>
              Place of delivery
            </th>
            <th
              className={styles.currentOffers__tableHeaderCell}
              style={{ textAlign: 'center' }}
            >
              Terms of Delivery
            </th>
            <th
              className={styles.currentOffers__tableHeaderCell}
              style={{ textAlign: 'center' }}
            >
              Quantity/MT
            </th>
            <th className={styles.currentOffers__tableHeaderCell}>
              Payment terms
            </th>
            <th className={styles.currentOffers__tableHeaderCell}>Price/MT</th>
          </tr>
        </thead>
        <tbody className={styles.currentOffers__tableBody}>
          {offers.map((offer, i) => (
            <tr className={styles.currentOffers__tableRow} key={`row-${i}`}>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.currentOffers__tableCell_center
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
                  styles.currentOffers__tableCell_center
                )}
                style={{ textAlign: 'center' }}
              >
                {offer.quantity}
              </td>
              <td className={styles.currentOffers__tableCell}>
                {offer.terms_of_payment}
              </td>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.currentOffers__tableCell_center
                )}
              >
                ${offer.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default LatestOffers;
