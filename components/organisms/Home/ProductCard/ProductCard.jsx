import Link from 'next/link';

import ProductCardTitle from './ProductCardHeader/ProductCardHeader';
import ProductCardInfo from './ProductCardInfo/ProductCardInfo';
import ProductCardPrice from './ProductCardPrice/ProductCardPrice';
import useTranslation from 'next-translate/useTranslation';
import { slugifyLink } from 'utils/nav-links';

import cn from 'classnames';
import styles from './ProductCard.module.css';

const FIELDS_TO_FILTER = ['Price'];

function ProductCard({ product }) {
  const { category, grade, price, unit, card_data: cardData } = product;
  const { t } = useTranslation();

  if (!cardData.find((item) => item.key === 'Application')) {
    cardData.push({ key: 'Application', value: product.application });
  }

  const link = `/products/${category}/${slugifyLink(t, product)}`;

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
          <ProductCardInfo
            fields={cardData}
            fieldsToFilter={FIELDS_TO_FILTER}
          />
          <ProductCardPrice unit={unit} price={price} />
        </a>
      </Link>
    </li>
  );
}

export default ProductCard;
