import cn from 'classnames';
import styles from './custom-ui.module.css';

function CustomTextarea(props) {
  const { onChange, ...restProps } = props;
  return (
    <textarea
      className={cn(styles.textInput, styles.textarea)}
      onChange={(e) => onChange({ [props.name]: e.target.value })}
      {...restProps}
    />
  );
}

export default CustomTextarea;
