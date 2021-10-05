import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import stylesUI from 'components/order/styles/OrderUI.module.css';

function FileField(props) {
  const { t } = useTranslation();

  const isInvalid = !!props.errors?.[props.name];
  const isSelected = !!props.data?.[props.name] && !isInvalid;
  const handleChange = (event) => {
    props.onBlur(props.name);
    props.onChange({ [props.name]: event.target.files[0] });
  };
  return (
    <div
      className={cn(
        'col-12 col-md-6 col-lg-4 px-0 py-2 p-md-2',
        props.className
      )}
    >
      <div>
        {props.label && (
          <p className={stylesUI.fileLabel}>
            {props.label}{' '}
            {props.required && <span style={{ color: 'red' }}>*</span>}
          </p>
        )}
        <div className={stylesUI.fileInputWrapper}>
          <label
            htmlFor={`fileInput_${props.name}`}
            className={cn(stylesUI.fileInput, {
              [stylesUI.isSelected]: isSelected,
              [stylesUI.isInvalid]: isInvalid
            })}
          >
            <div className={stylesUI.fileInputContent}>
              <div className={stylesUI.fileInputIcon} />
              <small className='mt-1'>
                {isInvalid
                  ? props.errors[props.name]
                  : isSelected
                  ? t('order:step3.uploaded')
                  : t('order:step3.drop files')}
              </small>
              <small className='text-muted mt-1'>
                {isSelected
                  ? props.data[props.name].name
                  : t('order:step3.max size')}
              </small>
              <div className={stylesUI.fileInputBtn}>
                <span>{t('order:step3.choose')}</span>
              </div>
            </div>
          </label>
          <input
            type='file'
            id={`fileInput_${props.name}`}
            className={stylesUI.hiddenFileInput}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FileField;
