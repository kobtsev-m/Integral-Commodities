import classes from './samples-photo.module.css';

function SamplesPhoto({ photo, description }) {
  return (
    <div className={classes.samplesPhoto}>
      <img
        className={classes.samplesPhoto__image}
        src={(photo && `/images/${photo}`) || '/images/samples.png'}
        alt={`Photo: ${description || 'HDPE B-Y250'}`}
      />
      <span className={classes.samplesPhoto__description}>
        {description || 'Sample photo HDPE B-Y250'}
      </span>
    </div>
  );
}

export default SamplesPhoto;
