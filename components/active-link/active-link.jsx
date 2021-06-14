import Link from "next/link";
import React, { Children } from "react";
import { useRouter } from "next/router";

function ActiveLink({
  children,
  additionalClassName,
  activeClassName,
  ...props
}) {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = additionalClassName || "";

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
}

export default ActiveLink;
