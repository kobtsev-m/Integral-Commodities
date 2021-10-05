import cn from 'classnames';
import stylesUI from 'components/order/styles/OrderUI.module.css';

function CustomSubmit({ formErrors, isFormValid }) {
  return (
    <div className='row mt-5'>
      <div className='position-relative d-flex justify-content-center'>
        <button
          type='submit'
          className={cn(stylesUI.btn, {
            [stylesUI.blue]: isFormValid(),
            [stylesUI.red]: !isFormValid()
          })}
        >
          Send
        </button>
        {!isFormValid() && (
          <div className={cn(stylesUI.errorSpan, stylesUI.above)}>
            {Object.keys(formErrors).length}
            {Object.keys(formErrors).length > 1
              ? ' Fields were filled incorrect'
              : ' field was filled incorrect'}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomSubmit;
