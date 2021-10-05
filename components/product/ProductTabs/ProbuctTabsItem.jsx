import { useRouter } from 'next/router';
import Trans from 'next-translate/Trans';

function getTabClasses(isActive, productType) {
  const styles = ['products__tab-button'];
  if (isActive) {
    styles.push('products__tab-button_active');
    styles.push(`products__tab-button_type_${productType}`);
  }

  return styles.join(' ');
}

function ProbuctTabsItem(props) {
  const { tab, isActive } = props;
  const router = useRouter();
  return (
    <li className='products__tab'>
      <button
        className={getTabClasses(isActive, router.query.categoryName)}
        onClick={() => router.push(`/products/${tab.toLowerCase()}`)}
      >
        <Trans i18nKey={`common:menu.${tab.toLowerCase()}`} />
      </button>
    </li>
  );
}

export default ProbuctTabsItem;
