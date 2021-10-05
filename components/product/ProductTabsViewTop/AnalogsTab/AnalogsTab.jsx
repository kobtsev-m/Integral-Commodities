import { useState } from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { getTransValue } from 'utils/i18n.utils';
import { useWindowDimensions } from 'hooks/useWindowDemensions';

import cn from 'classnames';
import styles from 'components/home/LatestOffers/LatestOffers.module.css';

function AnalogsTab({ analogs }) {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  const [isRolledUp, setIsRolledUp] = useState(true);

  const getAnalogsToRender = (analogs, isRolledUp) => {
    if (isRolledUp) {
      return analogs.slice(0, 5);
    }
    return analogs;
  };

  if (!analogs?.length) {
    return (
      <h2 className={styles.analogs__noAnalogs}>
        <Trans i18nKey='common:noAnalogs' />
      </h2>
    );
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
              <>
                <th className={styles.analogs__headerCell}>
                  <Trans i18nKey='common:productFields.density' />
                </th>
                <th className={styles.analogs__headerCell}>
                  <Trans i18nKey='common:productFields.vst' />
                </th>
              </>
            )}
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
                {getTransValue(
                  t,
                  'common:FiltersMobileMenu.producer',
                  offer.producer
                )}
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
                <>
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
                </>
              )}
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

export default AnalogsTab;
