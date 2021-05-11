import { useState, useEffect } from "react";
import { getAnalogsByProductId } from "../../api/api";
import LoadingSpinner from "../ui/loading";
import classes from "./latest-offers/latest-offers.module.css";
import classnames from "classnames";

function ProductAnalogs(props) {
  const { product } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [analogs, setAnalogs] = useState();
  const [isRolledUp, setIsRolledUp] = useState(true);

  const getAnalogsToRender = (analogs, isRolledUp) => {
    if (isRolledUp) {
      return analogs.slice(0, 5);
    }

    return analogs;
  };

  useEffect(() => {
    setIsLoading(true);
    getAnalogsByProductId(product.id).then((data) => {
      setIsLoading(false);
      setAnalogs(data);
    });
  }, [setAnalogs]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!analogs || !analogs.length) {
    return <h2 className={classes.analogs__noAnalogs}>There is no analogs</h2>;
  }

  return (
    <div style={{ marginTop: 80 }}>
      <table className={classes.currentOffers__table}>
        <thead className={classes.currentOffers__tableHead}>
          <tr className={classes.analogs__tableHeaderRow}>
            <th className={classes.analogs__headerCell}>Grade</th>
            <th className={classes.analogs__headerCell}>Producer</th>
            <th className={classes.analogs__headerCell}>MFR (190 С0, 5 Kg)</th>
            <th className={classes.analogs__headerCell}>Density</th>
            <th className={classes.analogs__headerCell}>VST</th>
          </tr>
        </thead>
        <tbody className={classes.currentOffers__tableBody}>
          {getAnalogsToRender(analogs, isRolledUp).map((offer, i) => (
            <tr className={classes.currentOffers__tableRow} key={`row-${i}`}>
              <td
                className={classnames(
                  classes.currentOffers__tableCell,
                  classes.analogs__cell
                )}
              >
                {offer.grade}
              </td>
              <td
                className={classnames(
                  classes.currentOffers__tableCell,
                  classes.analogs__cell
                )}
              >
                {offer.producer}
              </td>
              <td
                className={classnames(
                  classes.currentOffers__tableCell,
                  classes.analogs__cell
                )}
              >
                {offer.mfr}
              </td>
              <td
                className={classnames(
                  classes.currentOffers__tableCell,
                  classes.analogs__cell
                )}
              >
                {offer.density}
              </td>
              <td
                className={classnames(
                  classes.currentOffers__tableCell,
                  classes.analogs__cell
                )}
              >
                {offer.vst}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.showMoreButtonContainer}>
        <button
          className={classes.showMoreButton}
          onClick={() => setIsRolledUp((prevState) => !prevState)}
        >
          {isRolledUp ? `Show more...` : `Show less`}
        </button>
      </div>
    </div>
  );
}

export default ProductAnalogs;
