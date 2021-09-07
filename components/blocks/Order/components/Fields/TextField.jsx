import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import stylesUI from 'components/blocks/Order/styles/OrderUI.module.css';

function TextField(props) {
  const { t } = useTranslation();
  const getPlaceholder = () => {
    return (
      props.placeholder +
      (props.required ? ' ' + t('order:step3.required') : '')
    );
  };
  return (
    <div className={cn('col-12 col-md-6 px-0 py-2 p-md-2', props.className)}>
      <input
        type='text'
        name={props.name}
        className={cn(stylesUI.textInput, {
          [stylesUI.isInvalid]: props.errors?.[props.name]
        })}
        placeholder={getPlaceholder()}
        onChange={(e) => props.onChange({ [props.name]: e.target.value })}
        onBlur={() => (props.onBlur ? props.onBlur(props.name) : {})}
      />
    </div>
  );
}

export default TextField;
