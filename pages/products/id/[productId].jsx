import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import ProductDetails from "../../../components/product/product-details/product-details";
import { getProductById } from "../../../api/api";
import LoadingSpinner from "../../../components/ui/loading";
import classnames from "classnames";
import classes from "../../../components/product/product-details/product-details.module.css";
import Breadcrumbs from "../../../components/ui/breadcrumbs";
import ProductTabviewTop from "../../../components/product/product-tabviews/product-tabview-top/product-tabview-top";

const INFO_FIELDS_TO_FILTER = ["price", "density"];

function ProductPage() {
  const router = useRouter();
  const productId = +router.query.productId;

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title:
        product?.category.slice(0, 1).toUpperCase() +
        product?.category.slice(1),
      link: `/products/${product?.category}`,
    },
    {
      title: getPolymerType(product),
      link: `/products/${product?.category}?type=${getPolymerType(
        product
      )?.toLowerCase()}`,
    },
    {
      title: product?.grade,
    },
  ].filter((item) => !!item.title);

  function getPolymerType(product) {
    return product?.card_data.find((item) => item.key === "Type").value;
  }

  useEffect(() => {
    if (!isNaN(productId)) {
      setIsLoading(true);
      getProductById(productId)
        .then((data) => setProduct(data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [setProduct, productId]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>There is no product!</h2>;
  }

  return (
    <section
      className={classnames(classes.root__productPage, classes.productPage)}
    >
      <Breadcrumbs list={breadcrumbs} />
      <ProductDetails
        product={product}
        fieldsToFilter={INFO_FIELDS_TO_FILTER}
      />

      <ProductTabviewTop product={product} />
    </section>
  );
}

export default ProductPage;
