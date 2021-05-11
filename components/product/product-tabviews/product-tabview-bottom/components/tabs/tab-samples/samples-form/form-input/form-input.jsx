import classnames from 'classnames';
import classes from './form-input.module.css';

function FormInput({
  name,
  refValue,
  placeholder,
  error,
  description,
  subDescription,
}) {
  return (
    <div className={classes.formInput}>
      {description && <span className={classes.formInput__description}>{description}</span>}
      {subDescription && <span className={classes.formInput__subDescription}>{subDescription}</span>}
      <input
        className={classnames(classes.formInput__input, { [classes.formInput__input_hasError] : !!error })}
        name={name}
        ref={refValue}
        placeholder={placeholder}
      />
      {error && <span className={classes.formInput__error}>Field doesn't fill or fill incorrect </span>}
    </div>
  );
}

export default FormInput;
