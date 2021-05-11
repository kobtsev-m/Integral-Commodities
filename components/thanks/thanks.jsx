import ThanksHeader from "./thanks-header/thanks-header";
import ThanksMessengers from "./thanks-messengers/thanks-messengers";
import ThanksInfo from "./thanks-info/thanks-info";
import classes from './thanks.module.scss';

function Thanks() {
  return (
    <section className={classes.thanksContainer}>
      <ThanksHeader />
      <ThanksMessengers />
      <ThanksInfo />
    </section>
  );
}

export default Thanks;
