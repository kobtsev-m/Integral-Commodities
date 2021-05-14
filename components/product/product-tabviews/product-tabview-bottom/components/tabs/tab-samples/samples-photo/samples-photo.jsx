import styles from './samples-photo.module.css';

function SamplesPhoto({ photo, description }) {
  return (
    <div className={styles.samplesPhoto}>
      <img
        className={styles.samplesPhoto__image}
        src={(photo && `/images/${photo}`) || '/images/samples.png'}
        alt={`Photo: ${description || 'HDPE B-Y250'}`}
      />
    </div>
  );
}

export default SamplesPhoto;
