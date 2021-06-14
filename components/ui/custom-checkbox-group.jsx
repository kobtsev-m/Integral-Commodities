import { useState, useEffect } from "react";
import styles from "./custom-ui.module.css";

function CustomCheckboxGroup(props) {
  const [checkboxes, setCheckboxes] = useState([]);

  useEffect(() => {
    setCheckboxes(
      props.values.map((value) => ({
        value: value,
        isChecked: value === props.defaultValue,
      }))
    );
  }, []);

  const handleChange = (changedIdx) => {
    const checkboxesNew = checkboxes.map((checkbox, i) => ({
      ...checkbox,
      isChecked: changedIdx == i,
    }));
    setCheckboxes(checkboxesNew);
    props.onChange({ [props.name]: checkboxes[changedIdx].value });
  };

  return (
    <div className={"row w-100"}>
      {checkboxes.map((checkbox, i) => (
        <div key={i} className={props.className} style={props.style}>
          <input
            type={"checkbox"}
            className={styles.checkboxInput}
            id={`${props.name}_${i}`}
            value={checkbox.value}
            checked={checkbox.isChecked}
            onChange={() => handleChange(i)}
          />
          <label htmlFor={`${props.name}_${i}`}>{checkbox.value}</label>
        </div>
      ))}
    </div>
  );
}

export default CustomCheckboxGroup;
