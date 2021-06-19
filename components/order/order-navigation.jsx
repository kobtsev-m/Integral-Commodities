import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./order-navigation.module.css";
import IconNext from "../icons/icon-next";
import cn from "classnames";
import useWindowDimensions from "../../hooks/useWindowDemensions";

const Step = {
  step1: "Confirm deal",
  step2: "Confirm General Terms & Conditions",
  step3: "Provide KYC",
  step4: "Make a payment",
  step5: "Track order",
};

const stepStyles = styles.orderNavigation__item;
const activeStepStyles = styles.orderNavigation__item_active;

function getStepClassNames(isActive) {
  return cn(stepStyles, {
    [activeStepStyles]: isActive,
  });
}

function OrderNavigation() {
  const router = useRouter();
  const route = router.route;
  const activeRouteTab = route.split("/")[2].split("-").join("");

  const { width } = useWindowDimensions();

  if (width <= 768) {
    return (
      <div className={styles.mobileNav}>
        <h3 className={styles.stepNum}>Step {activeRouteTab.slice(4)}</h3>
        <h2 className={styles.stepName}>{Step[activeRouteTab]}</h2>
        <Link href="/order/step-2">
          <a className={styles.nextButton} />
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.orderNavigation}>
      <ul className={styles.orderNavigation__list}>
        {Object.entries(Step).map(([key, value]) => {
          const isActiveTab = activeRouteTab === key;
          let link = `/order/step-${key.slice(-1)}`;
          if (key === "step3") {
            link += "?for=companies";
          }
          return (
            <li
              className={getStepClassNames(isActiveTab)}
              key={`step-${value}`}
            >
              <a href={link}>{value}</a>
              <IconNext color={isActiveTab ? "#02569c" : "#909195"} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OrderNavigation;
