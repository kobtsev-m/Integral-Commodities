import SamplesPhoto from './SamplesPhoto/SamplesPhoto';
import SamplesInfo from './SamplesInfo/SamplesInfo';
import SamplesForm from './SamplesForm/SamplesForm';
import styles from './SamplesTab.module.css';

function SamplesTab({ samples }) {
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

export default SamplesTab;
