import classnames from "classnames";

import classes from "./latest-offers.module.css";

function LatestOffers(props) {
  const { offers } = props;

  if (!offers || !offers.length) {
    return <h2>There is no latest offers!</h2>;
  }

  return (
    <section className={classes.currentOffers}>
      <header className={classes.currentOffers__header}>
        <h2
          className={classes.currentOffers__title}
          style={{
            paddingLeft: 10,
            marginTop: 80,
            marginBottom: 50,
            fontWeight: "normal",
          }}
        >
          Latest offers
        </h2>
      </header>
      <table
        className={classes.currentOffers__table}
        style={{ marginRight: -10 }}
      >
        <thead className={classes.currentOffers__tableHead}>
          <tr className={classes.currentOffers__tableHeaderRow}>
            <th className={classes.currentOffers__tableHeaderCell}>
              Date of offer
            </th>
            <th className={classes.currentOffers__tableHeaderCell}>Grade</th>
            <th className={classes.currentOffers__tableHeaderCell}>
              Place of delivery
            </th>
            <th
              className={classes.currentOffers__tableHeaderCell}
              style={{ textAlign: "center" }}
            >
              Terms of Delivery
            </th>
            <th
              className={classes.currentOffers__tableHeaderCell}
              style={{ textAlign: "center" }}
            >
              Quantity/MT
            </th>
            <th className={classes.currentOffers__tableHeaderCell}>
              Payment terms
            </th>
            <th className={classes.currentOffers__tableHeaderCell}>Price/MT</th>
          </tr>
        </thead>
        <tbody className={classes.currentOffers__tableBody}>
          {offers.map((offer, i) => (
            <tr className={classes.currentOffers__tableRow} key={`row-${i}`}>
              <td
                className={classnames(
                  classes.currentOffers__tableCell,
                  classes.currentOffers__tableCell_center
                )}
              >
                {offer.date_of_validity}
              </td>
              <td className={classes.currentOffers__tableCell}>
                {offer.grade}
              </td>
              <td className={classes.currentOffers__tableCell}>
                {offer.place_of_delivery}
              </td>
              <td
                className={classnames(
                  classes.currentOffers__tableCell,
                  classes.currentOffers__tableCell_center
                )}
                style={{ textAlign: "center" }}
              >
                {offer.terms_of_delivery}
              </td>
              <td
                className={classnames(
                  classes.currentOffers__tableCell,
                  classes.currentOffers__tableCell_center
                )}
                style={{ textAlign: "center" }}
              >
                {offer.quantity}
              </td>
              <td className={classes.currentOffers__tableCell}>
                {offer.terms_of_payment}
              </td>
              <td
                className={classnames(
                  classes.currentOffers__tableCell,
                  classes.currentOffers__tableCell_center
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
