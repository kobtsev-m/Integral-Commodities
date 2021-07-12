import cn from 'classnames';
import stylesUI from 'pages/order/order-ui.module.css';

function TextField(props) {
  return (
    <div className={cn('col-12 col-md-6 px-0 py-2 p-md-2', props.className)}>
      <input
        type={'text'}
        name={props.name}
        className={cn(stylesUI.textInput, {
          [stylesUI.isInvalid]: props.errors?.[props.name]
        })}
        placeholder={props.placeholder + (props.required ? ' (required)' : '')}
        onChange={(e) => props.onChange({ [props.name]: e.target.value })}
        onBlur={() => (props.onBlur ? props.onBlur(props.name) : {})}
      />
    </div>
  );
}

export default TextField;
