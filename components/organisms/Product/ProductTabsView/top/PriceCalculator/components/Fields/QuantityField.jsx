import CustomTextInput from 'components/atoms/Form/CustomTextInput';
import Trans from 'next-translate/Trans';

function QuantityField(props) {
  return (
    <div className='row'>
      <div className='col-6'>
        <CustomTextInput {...props} />
      </div>
      <div className='col-6 pt-3'>
        <span>
          <Trans i18nKey='calculator:fields.metric tons' />
        </span>
      </div>
    </div>
  );
}

export default QuantityField;
