import styles from './success-offer-info.module.css';

function SuccessOfferInfo() {
  return (
    <div className={styles.thanksInfo}>
      <p className={styles.thanksInfo__text}>
        Please click{' '}
        <a className={styles.thanksInfo__link} href='/order'>
          here
        </a>{' '}
        to learn about the Order Process and submit information now, to avoid
        delays with the order when you are ready to place it.
        <br />
        <br />
        For example, we recommend you to send us KYC and bank information (in
        case you prefer to pay by the letter of credit) as soon as you can so
        we perform the required checks in advance.
      </p>
    </div>
  );
}

export default SuccessOfferInfo;
