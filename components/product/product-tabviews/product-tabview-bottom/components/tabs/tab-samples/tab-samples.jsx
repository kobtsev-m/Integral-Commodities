import SamplesPhoto from './samples-photo/samples-photo';
import SamplesInfo from './samples-info/samples-info';
import SamplesForm from './samples-form/samples-form';
import styles from './tab-samples.module.css';

function TabSamples({ samples }) {
  const [photoObj, descObj] = samples;

  const { value: photoValue } = photoObj;
  const { value: descValue } = descObj;

  return (
    <div className={styles.tabSamples}>
      <SamplesPhoto photo={photoValue} description={descValue} />
      <SamplesInfo />
      <SamplesForm />
    </div>
  );
}

export default TabSamples;
