import styles from 'components/blocks/Order/styles/Order.module.css';

function FieldsBlockWrapper(props) {
  return (
    <div className={styles.fieldsBlockWrapper}>
      <span className={styles.fieldsBlockLabel}>{props.label}</span>
      <div className={styles.fieldsBlockContent}>{props.children}</div>
    </div>
  );
}

export default FieldsBlockWrapper;
