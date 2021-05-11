import classes from './samples-info.module.css';

function SamplesInfo() {
  return (
    <div className={classes.samplesInfo}>
      You can order a product sample for testing on your equipment.
      {' '}
      <span className={classes.samplesInfo__attention}>
        We ship 1.0 kg for free.
      </span>
      {' '}
      If you need a large batch of goods, we are ready to offer favorable conditions
    </div>
  );
}

export default SamplesInfo;
