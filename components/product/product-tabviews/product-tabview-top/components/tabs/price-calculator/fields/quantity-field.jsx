import CustomTextInput from 'components/ui/custom-text-input';

function QuantityField(props) {
  return (
    <div className={'row'}>
      <div className={'col-6'}>
        <CustomTextInput {...props} />
      </div>
      <div className={'col-6 pt-3'}>
        <span>Metric tons</span>
      </div>
    </div>
  );
}

export default QuantityField;
