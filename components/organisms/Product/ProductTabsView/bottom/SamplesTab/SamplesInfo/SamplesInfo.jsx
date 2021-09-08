import Trans from 'next-translate/Trans';
import styles from './SamplesInfo.module.css';

function SamplesInfo() {
  return (
    <div className={styles.samplesInfo}>
      <Trans
        i18nKey='product:samples.info'
        components={[<span className={styles.samplesInfo__attention} />]}
      />
    </div>
  );
}

export default SamplesInfo;
