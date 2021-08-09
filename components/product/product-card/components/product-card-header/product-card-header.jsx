import Trans from 'next-translate/Trans';
import router from 'next/router';
import styles from '../../product-card.module.css';

function ProductCardTitle(props) {
  const { children } = props;
  const category = router.query.categoryName;
  return (
    <h3 className={styles.product__title}>
      <Trans i18nKey='common:productFields.grade' />:{' '}
      <span className={styles.product__titleValue}>
        {['fertilizers', 'sulphur'].includes(category) ? (
          <Trans i18nKey={`common:${category}.${children.toLowerCase()}`} />
        ) : (
          children
        )}
      </span>
    </h3>
  );
}

export default ProductCardTitle;
