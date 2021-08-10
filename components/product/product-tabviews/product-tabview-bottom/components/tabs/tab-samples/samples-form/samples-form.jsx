import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useTranslation from 'next-translate/useTranslation';

import FormInput from './form-input/form-input';
import styles from './samples-form.module.css';

const onSubmit = (data) => {};

function SamplesForm() {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    companyName: yup.string().required(),
    companyWebsite: yup.string().url(),
    companyAddress: yup.string().required(),
    sampleSizeKg: yup.number().required().positive().integer(),
    usedFor: yup.string().required(),
    equipmentManufacturer: yup.string(),
    eMail: yup.string().email(),
    communicationMethod: yup.string()
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <form className={styles.samplesForm} onSubmit={handleSubmit(onSubmit)}>
      <span className={styles.samplesForm__header}>
        {t('product:samples.order sample')}
      </span>
      <FormInput
        name='companyName'
        placeholder={t('product:samples.company name')}
        refValue={register({ required: true })}
        error={errors.companyName}
      />
      <FormInput
        name='companyWebsite'
        placeholder={t('product:samples.company website')}
        refValue={register}
        error={errors.companyWebsite}
      />
      <FormInput
        name='companyAddress'
        placeholder={t('product:samples.company address')}
        refValue={register({ required: true })}
        error={errors.companyAddress}
      />
      <FormInput
        name='sampleSizeKg'
        placeholder={t('product:samples.sample size')}
        refValue={register({ required: true })}
        error={errors.sampleSizeKg}
      />
      <FormInput
        name='usedFor'
        placeholder={t('product:samples.used for')}
        refValue={register({ required: true })}
        error={errors.usedFor}
      />
      <FormInput
        name='equipmentManufacturer'
        placeholder={t('product:samples.equipment manufacturer')}
        refValue={register}
        error={errors.equipmentManufacturer}
      />
      <FormInput
        name='email'
        placeholder='example@site.com'
        refValue={register}
        error={errors.eMail}
        description={t('product:samples.email')}
        subDescription={t('product:samples.email help')}
      />
      <FormInput
        name='communicationMethod'
        placeholder={t('product:samples.communication method help')}
        refValue={register}
        error={errors.communicationMethod}
        description={t('product:samples.communication method')}
      />
      <button className={styles.samplesForm__button}>
        {t('product:samples.ask for sample')}
      </button>
    </form>
  );
}

export default SamplesForm;
