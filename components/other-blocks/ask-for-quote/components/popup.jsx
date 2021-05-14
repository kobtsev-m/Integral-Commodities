import cn from 'classnames';

import styles from './popup.module.css';

function AskForQuotePopup(props) {
  const popupRef = props.popupRef;
  function handlePopupClose() {
    document.documentElement.style.overflowY = 'auto';
    popupRef.current.classList.remove(styles.popup_opened);
  }
  return (
    <div className={styles.popup} ref={popupRef}>
      <div className={styles.popup__content}>
        <button
          className={styles.popup__closeBtn}
          onClick={handlePopupClose}
        />
        <div className={styles.popup__form}>
          <div className={cn('stepform_zh7NMD3', 'rnd_537651699')} />
        </div>
      </div>
    </div>
  );
}

export default AskForQuotePopup;
