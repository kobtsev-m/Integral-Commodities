import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from 'hooks/useActions';
import ProductDetails from 'components/product/ProductDetails/ProductDetails';
import LoadingSpinner from 'components/common/Loaders/Spinner';
import Breadcrumbs from 'components/common/Breadcrumbs/Breadcrumbs';
import ProductTabviewTop from 'components/product/ProductTabsViewTop/ProductTabsViewTop';
import useTranslation from 'next-translate/useTranslation';

import cn from 'classnames';
import styles from 'components/product/ProductDetails/ProductDetails.module.css';

const INFO_FIELDS_TO_FILTER = ['price', 'density'];

function ProductPage() {
  const router = useRouter();
  const productGrade = router.query.productGrade;
  const { t, lang } = useTranslation();

  const { activeProduct, isActiveProductLoading } = useSelector(
    (state) => state.products
  );
  const { fetchActiveProduct } = useActions();

  useEffect(() => {
    if (!!productGrade) {
      fetchActiveProduct(productGrade, lang, t);
    }
  }, [productGrade, lang]);

  const getBreadcrumbs = (product) => {
    const homeBreadcrumb = {
      title: t('common:menu.home'),
      link: t('common:homeLink')
    };
    const categoryBreadcrumb = {
      title: t(`common:menu.${product?.category}`),
      link: `/products/${product?.category}`
    };
    const polymerType = product?.card_data.find(
      (item) => item.key === 'Type'
    ).value;
    let polymerBreadcrumb = null;
    if (polymerType) {
      const polymerTypeSingle = polymerType?.toUpperCase().split(', ')[0];
      polymerBreadcrumb = {
        title: polymerType,
        link: `/products/${product?.category}?type=${polymerTypeSingle}`
      };
    }
    const gradeBreadcrumb = {
      title: product.grade
    };
    return [
      homeBreadcrumb,
      categoryBreadcrumb,
      polymerBreadcrumb,
      gradeBreadcrumb
    ];
  };

  return (
    <section className={cn(styles.root__productPage, styles.productPage)}>
      {isActiveProductLoading ? (
        <LoadingSpinner />
      ) : !activeProduct ? (
        <h2 className='text-center'>{t('common:noProducts')}</h2>
      ) : (
        <>
          <Breadcrumbs list={getBreadcrumbs(activeProduct)} />
          <ProductDetails
            product={activeProduct}
            fieldsToFilter={INFO_FIELDS_TO_FILTER}
          />
          <ProductTabviewTop product={activeProduct} />
        </>
      )}
    </section>
  );
}

export default ProductPage;
