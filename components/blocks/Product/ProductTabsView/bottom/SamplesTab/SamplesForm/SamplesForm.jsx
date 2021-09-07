import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useTranslation from 'next-translate/useTranslation';

import SamplesFormInput from './SamplesFormInput';
import styles from './SamplesForm.module.css';

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
      <SamplesFormInput
        name='companyName'
        placeholder={t('product:samples.company name')}
        refValue={register({ required: true })}
        error={errors.companyName}
      />
      <SamplesFormInput
        name='companyWebsite'
        placeholder={t('product:samples.company website')}
        refValue={register}
        error={errors.companyWebsite}
      />
      <SamplesFormInput
        name='companyAddress'
        placeholder={t('product:samples.company address')}
        refValue={register({ required: true })}
        error={errors.companyAddress}
      />
      <SamplesFormInput
        name='sampleSizeKg'
        placeholder={t('product:samples.sample size')}
        refValue={register({ required: true })}
        error={errors.sampleSizeKg}
      />
      <SamplesFormInput
        name='usedFor'
        placeholder={t('product:samples.used for')}
        refValue={register({ required: true })}
        error={errors.usedFor}
      />
      <SamplesFormInput
        name='equipmentManufacturer'
        placeholder={t('product:samples.equipment manufacturer')}
        refValue={register}
        error={errors.equipmentManufacturer}
      />
      <SamplesFormInput
        name='email'
        placeholder='example@site.com'
        refValue={register}
        error={errors.eMail}
        description={t('product:samples.email')}
        subDescription={t('product:samples.email help')}
      />
      <SamplesFormInput
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
