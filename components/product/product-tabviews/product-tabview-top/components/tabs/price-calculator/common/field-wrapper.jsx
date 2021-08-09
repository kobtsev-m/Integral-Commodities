import styles from '../price-calculator.module.css';

function FieldWrapper(props) {
  return (
    <div>
      <span className={styles.fieldWrapper__title}>{props.title}</span>
      <div className='mt-3'>{props.children}</div>
    </div>
  );
}

export default FieldWrapper;
