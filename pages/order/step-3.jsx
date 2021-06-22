import styles from "./step-1.module.css";
import Button from "../../components/ui/button";
import OrderNavigation from "../../components/order/order-navigation";
import Breadcrumbs from "../../components/ui/breadcrumbs";
import { useEffect } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

function OrderStep3() {
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Order process",
    },
  ];

  const router = useRouter();

  const formType = router.query.for;

  const Script = {
    COMPANIES: {
      script:
        '!function(t,e,o,c,n,p,d,i){t[e]=t[e]||{},t[e][527808154]={id:"9xWwMjx",rnd:527808154},o.async=!0,o.src=c+"//u008796.stepform.io/api.js?id=9xWwMjx",document.querySelector("head").appendChild(o)}(window,"stepFORM_params",document.createElement("script"),"https:"===document.location.protocol?"https:":"http:");',
      divClass: "stepform_9xWwMjx rnd_527808154",
    },
    INDIVIDUALS: {
      script:
        '!function(t,e,c,o,p,n,d,i){t[e]=t[e]||{},t[e][527808703]={id:"Wb4pcV4",rnd:527808703},c.async=!0,c.src=o+"//u008796.stepform.io/api.js?id=Wb4pcV4",document.querySelector("head").appendChild(c)}(window,"stepFORM_params",document.createElement("script"),"https:"===document.location.protocol?"https:":"http:");',
      divClass: "stepform_Wb4pcV4 rnd_527808703",
    },
  };

  useEffect(() => {
    document.getElementById("offer")?.remove();

    if (formType) {
      const script = document.createElement("script");
      script.id = "kyc";
      script.textContent = Script[formType.toUpperCase()].script;
      document.body.appendChild(script);
    }
  }, [formType]);

  const tabStyles = styles.step3__tab;
  const activeTabStyles = styles.step3__tab_active;

  function getItemClassNames(isActive) {
    return cn(tabStyles, {
      [activeTabStyles]: isActive,
    });
  }

  return (
    <section className={styles.orderContainer}>
      <div className={styles.breadcrumbsContainer}>
        <Breadcrumbs list={breadcrumbs} />
      </div>
      <div className={styles.step3__orderNavigationContainer}>
        <OrderNavigation nextLink="/order/step-4" />
      </div>
      <p
        className={styles.step3__textContent}
        style={{ marginTop: 80, marginBottom: 90 }}
      >
        We recommend you to provide KYC information now, to enable you to trade
        with us once you are ready to place an order.
      </p>
      <h1 className={styles.step3__title}>Counterparty form</h1>
      <div className={styles.step3__tabs}>
        <a
          className={getItemClassNames(formType === "companies")}
          href="/order/step-3?for=companies"
        >
          For companies
        </a>
        <a
          className={getItemClassNames(formType === "individuals")}
          href="/order/step-3?for=individuals"
        >
          For private individuals
        </a>
      </div>
      <div className={styles.step3__beforeForm}>
        <p className={styles.step3__textContent}>
          The information requested in this questionnaire is required to enable
          our company to trade with you.
        </p>
        <p className={styles.step3__textContent}>
          Please ensure that all relevant sections are completed or marked with
          N/A if not applicable
        </p>
      </div>
      <div style={{ marginBottom: 110 }}>
        {formType && (
          <div className={Script[formType.toUpperCase()].divClass} />
        )}
      </div>
    </section>
  );
}

export default OrderStep3;
