import SuccessOfferHeader from './success-offer-header/success-offer-header';
import SuccessOffersMessengers from './success-offer-messengers/success-offer-messengers';
import SuccessOfferInfo from './success-offer-info/success-offer-info';
import styles from './success-offer.module.css';

function SuccessOffer() {
  return (
    <section className={styles.thanksContainer}>
      <SuccessOfferHeader />
      <SuccessOffersMessengers />
      <SuccessOfferInfo />
    </section>
  );
}

export default SuccessOffer;
