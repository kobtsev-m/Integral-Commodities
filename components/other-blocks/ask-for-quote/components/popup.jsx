import classnames from "classnames";

import classes from "./popup.module.css";

function AskForQuotePopup(props) {
  const popupRef = props.popupRef;
  function handlePopupClose() {
    document.documentElement.style.overflowY = 'auto';
    popupRef.current.classList.remove(classes.popup_opened);
  }
  return (
    <div className={classes.popup} ref={popupRef}>
      <div className={classes.popup__content}>
        <button
          className={classes.popup__closeBtn}
          onClick={handlePopupClose}
        />
        <div className={classes.popup__form}>
          <div className={classnames("stepform_zh7NMD3", "rnd_537651699")} />
        </div>
      </div>
    </div>
  );
}

export default AskForQuotePopup;
