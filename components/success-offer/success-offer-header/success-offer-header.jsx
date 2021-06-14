import styles from "./success-offer-header.module.css";

function SuccessOfferHeader() {
  return (
    <div className={styles.thanksHeader}>
      <img
        className={styles.thanksHeader__checkImg}
        src={"/images/thanks-check.svg"}
        alt={""}
      />
      <h1 className={styles.thanksHeader__text}>Thank you</h1>
    </div>
  );
}

export default SuccessOfferHeader;
