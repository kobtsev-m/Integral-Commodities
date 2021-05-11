import Link from "next/link";
import classnames from "classnames";
import linkClasses from "../../../../styles/blocks/link.module.css";

function FooterCard(props) {
  const { data, type } = props;
  const POLYMER_TYPES = ["hdpe", "pp", "ldpe"];
  const productType = POLYMER_TYPES.includes(type.toLowerCase())
    ? "polymers"
    : type;
  const baseLink = `/products/${productType.toLowerCase()}`;

  let typeHeaderLink = `/products/${productType.toLowerCase()}`;
  if (productType === "polymers") {
    typeHeaderLink += `?type=${type.toLowerCase()}`;
  }

  return (
    <div className="footer__card">
      <h3 className={classnames("footer__card-title", linkClasses.link)}>
        <Link href={typeHeaderLink}>{type}</Link>
      </h3>
      <ul className="footer__links-list">
        {Object.entries(data).map(([key, value]) => {
          let link = `${baseLink}`;
          if (productType === "polymers") {
            link += `?type=${type.toLowerCase()}`;
            link += `&procmethod=${key.toLowerCase()}`;
          }
          return (
            <li
              key={`footer-link-${key}-${value}`}
              className="footer__list-item"
            >
              <Link href={link}>
                <a className={classnames("footer__link", linkClasses.link)}>
                  {value}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterCard;
