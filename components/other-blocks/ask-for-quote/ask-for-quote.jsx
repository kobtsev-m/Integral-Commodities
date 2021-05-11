import { useEffect, useRef } from "react";

import AskForQuotePopup from "./components/popup";
import classes from "./ask-for-quote.module.css";
import popupClasses from "./components/popup.module.css";

const SCRIPT_NAME =
  '(function(s, t, e, p, f, o, r, m) {\n' +
  '        s[t] = s[t] || {};\n' +
  '        s[t][537651699] = {\n' +
  '            id: "zh7NMD3",\n' +
  '            rnd: 537651699\n' +
  '        };\n' +
  '        e.async = true;\n' +
  '        e.src = p + f;\n' +
  '        document[m](o)[r](e)\n' +
  '    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u008796.stepform.io/api.js?id=zh7NMD3","head","appendChild","querySelector"));';

function AskForQuote() {
  const formRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.textContent = SCRIPT_NAME;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function handleButtonClick() {
    document.documentElement.style.overflowY = 'hidden';
    formRef.current.classList.toggle(popupClasses.popup_opened);
  }

  return (
    <>
      <div className={classes.ask}>
        <img
          className={classes.ask__image}
          src="../../images/icon-attention.svg"
          alt="attention"
        />
        <p className={classes.ask__text}>
          We deliver worldwide door-to-door and offer volume based, contract
          based and other discounts. Please complete the brief form to receive a
          custom quote within 24 hours.
        </p>
        <button
          type="button"
          className={classes.ask__link}
          onClick={handleButtonClick}
        >
          Ask for quote
        </button>
      </div>
      <AskForQuotePopup popupRef={formRef} />
    </>
  );
}

export default AskForQuote;
