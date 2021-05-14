import { useState, useEffect } from 'react';
import { getAnalogsByProductIdApi } from 'api/api';
import LoadingSpinner from 'components/ui/loading';
import styles from './latest-offers/latest-offers.module.css';
import cn from 'classnames';

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
    getAnalogsByProductIdApi(product.id).then((data) => {
      setIsLoading(false);
      setAnalogs(data);
    });
  }, [setAnalogs]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!analogs || !analogs.length) {
    return <h2 className={styles.analogs__noAnalogs}>There is no analogs</h2>;
  }

  return (
    <div style={{ marginTop: 80 }}>
      <table className={styles.currentOffers__table}>
        <thead className={styles.currentOffers__tableHead}>
          <tr className={styles.analogs__tableHeaderRow}>
            <th className={styles.analogs__headerCell}>Grade</th>
            <th className={styles.analogs__headerCell}>Producer</th>
            <th className={styles.analogs__headerCell}>MFR (190 С0, 5 Kg)</th>
            <th className={styles.analogs__headerCell}>Density</th>
            <th className={styles.analogs__headerCell}>VST</th>
          </tr>
        </thead>
        <tbody className={styles.currentOffers__tableBody}>
          {getAnalogsToRender(analogs, isRolledUp).map((offer, i) => (
            <tr className={styles.currentOffers__tableRow} key={`row-${i}`}>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.analogs__cell
                )}
              >
                {offer.grade}
              </td>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.analogs__cell
                )}
              >
                {offer.producer}
              </td>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.analogs__cell
                )}
              >
                {offer.mfr}
              </td>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.analogs__cell
                )}
              >
                {offer.density}
              </td>
              <td
                className={cn(
                  styles.currentOffers__tableCell,
                  styles.analogs__cell
                )}
              >
                {offer.vst}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.showMoreButtonContainer}>
        <button
          className={styles.showMoreButton}
          onClick={() => setIsRolledUp((prevState) => !prevState)}
        >
          {isRolledUp ? `Show more...` : `Show less`}
        </button>
      </div>
    </div>
  );
}

export default ProductAnalogs;
