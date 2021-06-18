import cn from "classnames";
import classes from "./SliderMenu.module.css";
import { useEffect } from "react";

const SliderMenu = (props) => {
  const { open, title, onClose } = props;

  useEffect(() => {
    if (open) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "";
    }
  }, [open]);

  return (
    <section className={cn(classes.root, { [classes.root_opened]: open })}>
      <div className={classes.header}>
        <button
          className={classes.closeBtn}
          onClick={onClose}
          aria-label="close menu"
        />
        <h2 className={classes.title}>{title}</h2>
      </div>
      {props.children}
      <p className={classes.copyright}>
        &copy; 2021 Integral Commodities. All Rights reserved
      </p>
    </section>
  );
};

export default SliderMenu;
