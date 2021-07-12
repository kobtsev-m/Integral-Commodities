import { useRouter } from 'next/router';

function getTabClasses(isActive, productType) {
  const styles = ['products__tab-button'];
  if (isActive) {
    styles.push('products__tab-button_active');
    styles.push(`products__tab-button_type_${productType}`);
  }

  return styles.join(' ');
}

function ProductListTab(props) {
  const { tab, isActive } = props;
  const router = useRouter();

  return (
    <li className="products__tab">
      <button
        className={getTabClasses(isActive, router.query.categoryName)}
        onClick={() => router.push(`/products/${tab.toLowerCase()}`)}
      >
        {tab}
      </button>
    </li>
  );
}

export default ProductListTab;
