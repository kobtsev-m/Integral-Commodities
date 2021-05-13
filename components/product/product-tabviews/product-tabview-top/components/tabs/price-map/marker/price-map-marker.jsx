import styles from '../price-map.module.css';

function Marker(props) {
  const { color, price } = props;
  return (
    <div className={styles.marker} style={{ color }}>
      <span>${price}</span>
    </div>
  );
}

export default Marker;
