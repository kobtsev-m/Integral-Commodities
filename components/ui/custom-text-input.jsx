import cn from 'classnames';
import classes from './custom-ui.module.css';

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
    <div className={classes.textInputWrapper}>
      <input
        type={props.type ?? 'text'}
        name={name}
        className={cn(classes.textInput, className, {
          [classes.isInvalid]: !!error
        })}
        onChange={handleChange}
        onBlur={handleBlur}
        {...restProps}
      />
      {error && (
        <div className={cn(classes.errorSpan, classes.below)}>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default CustomTextInput;
