import styles from './samples-photo.module.css';

function SamplesPhoto({ photo, description }) {
  return (
    <div className={styles.samplesPhoto}>
      <img
        className={styles.samplesPhoto__image}
        src={(photo && `/images/${photo}`) || '/images/samples.png'}
        alt={`Photo: ${description || 'HDPE B-Y250'}`}
      />
      <span className={styles.samplesPhoto__description}>
        {description || 'Sample photo HDPE B-Y250'}
      </span>
    </div>
  );
}

export default SamplesPhoto;
