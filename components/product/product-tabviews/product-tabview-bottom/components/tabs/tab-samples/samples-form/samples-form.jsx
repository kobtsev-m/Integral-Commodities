import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInput from './form-input/form-input';
import classes from './samples-form.module.css';

const schema = yup.object().shape({
  companyName: yup.string().required(),
  companyWebsite: yup.string().url(),
  companyAddress: yup.string().required(),
  sampleSizeKg: yup.number().required().positive().integer(),
  usedFor: yup.string().required(),
  equipmentManufacturer: yup.string(),
  eMail: yup.string().email(),
  communicationMethod: yup.string(),
});

const onSubmit = (data) => {}

function SamplesForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      className={classes.samplesForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className={classes.samplesForm__header}>
        Order sample
      </span>
      <FormInput
        name="companyName"
        placeholder="Company name*"
        refValue={register({ required: true })}
        error={errors.companyName}
      />
      <FormInput
        name="companyWebsite"
        placeholder="Company website"
        refValue={register}
        error={errors.companyWebsite}
      />
      <FormInput
        name="companyAddress"
        placeholder="Company address*"
        refValue={register({ required: true })}
        error={errors.companyAddress}
      />
      <FormInput
        name="sampleSizeKg"
        placeholder="Company size (kg)*"
        refValue={register({ required: true })}
        error={errors.sampleSizeKg}
      />
      <FormInput
        name="usedFor"
        placeholder="Industry / application the material is to be used for*"
        refValue={register({ required: true })}
        error={errors.usedFor}
      />
      <FormInput
        name="equipmentManufacturer"
        placeholder="Equipment manufacturer"
        refValue={register}
        error={errors.equipmentManufacturer}
      />
      <FormInput
        name="eMail"
        placeholder="example@site.com"
        refValue={register}
        error={errors.eMail}
        description="Your E-mail"
        subDescription="We will send shipment confirmation by email"
      />
      <FormInput
        name="communicationMethod"
        placeholder="tel / telegram ID..."
        refValue={register}
        error={errors.communicationMethod}
        description="Preferred method of communication"
      />
      <button className={classes.samplesForm__button}>
        Ask for Sample
      </button>
    </form>
  );
}

export default SamplesForm;
