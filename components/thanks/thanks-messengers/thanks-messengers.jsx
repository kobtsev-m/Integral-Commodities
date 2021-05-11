import classes from './thanks-messengers.module.scss';

function ThanksMessengers() {
  return (
    <div className={classes.thanksMessengers}>
      <p className={classes.thanksMessengers__text}>
        Your request has been sent. <span className={classes.thanksMessengers__text_blue}>We will quote within 48 hours</span>.
        If you would like to speak to someone immediatly feel free to <span className={classes.thanksMessengers__text_orange}>write to the messengers</span>
      </p>
      <ul className={classes.thanksMessengersList}>
        <li className={classes.thanksMessengersItem}>
          <a
            className={classes.thanksMessengersItem__link}
            href="https://t.me/Ramada10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.thanksMessengersItem__img}
              src="/images/thanks-telegram.svg"
            />
          </a>
        </li>
        <li className={classes.thanksMessengersItem}>
          <a
            className={classes.thanksMessengersItem__link}
            href="https://wa.me/+79139103271"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.thanksMessengersItem__img}
              src="/images/thanks-whatsapp.svg"
            />
          </a>
        </li>
        <li className={classes.thanksMessengersItem}>
          <a
            className={classes.thanksMessengersItem__link}
            href="https://join.skype.com/invite/gze7oP64fVK1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.thanksMessengersItem__img}
              src="/images/thanks-skype.svg"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ThanksMessengers;
