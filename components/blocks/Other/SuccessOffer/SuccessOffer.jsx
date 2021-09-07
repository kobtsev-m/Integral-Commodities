import SuccessOfferHeader from './SuccessOfferHeader/SuccessOfferHeader';
import SuccessOffersMessengers from './SuccessOfferMessage/SuccessOfferMessage';
import SuccessOfferInfo from './SuccessOfferInfo/SuccessOfferInfo';
import styles from './SuccessOffer.module.css';

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
