import Link from 'next/link';

import ProductCardTitle from './components/product-card-header/product-card-header';
import ProductCardInfoList from './components/product-card-info-list/product-card-info-list';
import ProductCardPrice from './components/product-card-price/product-card-price';
import { slugifyLink } from 'utils/nav-links';

import cn from 'classnames';
import styles from './product-card.module.css';

const FIELDS_TO_FILTER = ['Price'];

function ProductCard({ product }) {
  const { category, grade, price, card_data: prodData } = product;

  if (!prodData.find((item) => item.key === 'Application')) {
    prodData.push({ key: 'Application', value: product.application });
  }

  const link = `/products/${category}/${slugifyLink(product)}`;

  return (
    <li>
      <Link href={link}>
        <a
          className={cn(styles.product__link, {
            [styles.product__link_category_sulphur]:
              product.category === 'sulphur',
            [styles.product__link_category_fertilizers]:
              product.category === 'fertilizers'
          })}
        >
          <ProductCardTitle>{grade}</ProductCardTitle>
          <ProductCardInfoList
            fields={prodData}
            fieldsToFilter={FIELDS_TO_FILTER}
          />
          <ProductCardPrice>{price}</ProductCardPrice>
        </a>
      </Link>
    </li>
  );
}

export default ProductCard;
