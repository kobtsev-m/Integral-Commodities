import cn from 'classnames';
import Trans from 'next-translate/Trans';
import styles from './form-input.module.css';

function FormInput({
  name,
  refValue,
  placeholder,
  error,
  description,
  subDescription
}) {
  return (
    <div className={styles.formInput}>
      {description && (
        <span className={styles.formInput__description}>{description}</span>
      )}
      {subDescription && (
        <span className={styles.formInput__subDescription}>
          {subDescription}
        </span>
      )}
      <input
        className={cn(styles.formInput__input, {
          [styles.formInput__input_hasError]: !!error
        })}
        name={name}
        ref={refValue}
        placeholder={placeholder}
      />
      {error && (
        <span className={styles.formInput__error}>
          <Trans i18nKey='product:samples.error text' />
        </span>
      )}
    </div>
  );
}

export default FormInput;
