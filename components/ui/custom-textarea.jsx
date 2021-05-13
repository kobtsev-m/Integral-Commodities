import cn from 'classnames';
import classes from './custom-ui.module.css';

function CustomTextarea(props) {
  const { onChange, ...restProps } = props;
  return (
    <textarea
      className={cn(classes.textInput, classes.textarea)}
      onChange={(e) => onChange({ [props.name]: e.target.value })}
      {...restProps}
    />
  );
}

export default CustomTextarea;
