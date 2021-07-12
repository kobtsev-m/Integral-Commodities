import cn from 'classnames';
import stylesUI from 'pages/order/order-ui.module.css';

function FileField(props) {
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
              <small className={'mt-1'}>
                {isInvalid
                  ? props.errors[props.name]
                  : isSelected
                  ? 'Uploaded'
                  : 'Drop files here'}
              </small>
              <small className={'text-muted mt-1'}>
                {isSelected ? props.data[props.name].name : 'Max size: 10MB'}
              </small>
              <div className={stylesUI.fileInputBtn}>
                <span>Choose</span>
              </div>
            </div>
          </label>
          <input
            type={'file'}
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
