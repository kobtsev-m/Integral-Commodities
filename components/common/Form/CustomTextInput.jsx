import cn from 'classnames';
import styles from './CustomUI.module.css';

function CustomTextInput(props) {
  const { name, className, onChange, onBlur, error, ...restProps } = props;

  const handleChange = (event) => {
    onChange({
      [name]:
        props.type === 'number'
          ? event.target.valueAsNumber
          : event.target.value
    });
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event.target.name);
    }
  };
  return (
    <div className={styles.textInputWrapper}>
      <input
        type={props.type ?? 'text'}
        name={name}
        className={cn(styles.textInput, className, {
          [styles.isInvalid]: !!error
        })}
        onChange={handleChange}
        onBlur={handleBlur}
        {...restProps}
      />
      {error && (
        <div className={cn(styles.errorSpan, styles.below)}>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default CustomTextInput;
