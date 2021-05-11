import { useRouter } from "next/router";
import Link from "next/link";
import classes from "./order-navigation.module.css";
import IconNext from "../icons/icon-next";
import classnames from "classnames";

const Step = {
  step1: `Confirm deal`,
  step2: `Confirm General Terms & Conditions`,
  step3: `Provide KYC`,
  step4: `Make a payment`,
  step5: `Track order`,
};

const stepStyles = classes.orderNavigation__item;
const activeStepStyles = classes.orderNavigation__item_active;

function getStepClassNames(isActive) {
  return classnames(stepStyles, {
    [activeStepStyles]: isActive,
  });
}

function OrderNavigation() {
  const router = useRouter();
  const route = router.route;
  const activeRouteTab = route.split("/")[2].split("-").join("");
  return (
    <div className={classes.orderNavigation}>
      <ul className={classes.orderNavigation__list}>
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
