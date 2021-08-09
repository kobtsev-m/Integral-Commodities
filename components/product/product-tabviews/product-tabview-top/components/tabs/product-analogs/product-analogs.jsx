import { useState, useEffect } from 'react';
import { getAnalogsByProductIdApi } from 'api/api';
import LoadingSpinner from 'components/ui/loading';

import cn from 'classnames';
import styles from 'components/product/latest-offers/latest-offers.module.css';
import useWindowDimensions from '../../../../../../../utils/hooks/useWindowDemensions';
import Trans from 'next-translate/Trans';

function ProductAnalogs({ product }) {
  const [isLoading, setIsLoading] = useState(false);
  const [analogs, setAnalogs] = useState();
  const [isRolledUp, setIsRolledUp] = useState(true);

  const { width } = useWindowDimensions();

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
    <div>
      <table className={styles.currentOffers__table}>
        <thead className={styles.currentOffers__tableHead}>
          <tr className={styles.analogs__tableHeaderRow}>
            <th className={styles.analogs__headerCell}>
              <Trans i18nKey='common:productFields.grade' />
            </th>
            <th className={styles.analogs__headerCell}>
              <Trans i18nKey='common:productFields.producer' />
            </th>
            <th className={styles.analogs__headerCell}>
              <Trans i18nKey='common:productFields.mfr (5)' />
            </th>
            {width > 768 && (
              <th className={styles.analogs__headerCell}>
                <Trans i18nKey='common:productFields.density' />
              </th>
            )}
            <th className={styles.analogs__headerCell}>
              <Trans i18nKey='common:productFields.vst' />
            </th>
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
              {width > 768 && (
                <td
                  className={cn(
                    styles.currentOffers__tableCell,
                    styles.analogs__cell
                  )}
                >
                  {offer.density}
                </td>
              )}
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
          <Trans i18nKey={`common:${isRolledUp ? 'showMore' : 'showLess'}`} />
        </button>
      </div>
    </div>
  );
}

export default ProductAnalogs;
