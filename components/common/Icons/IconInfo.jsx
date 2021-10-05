import React from 'react';

function IconInfo(props) {
  const { size, marginRight, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      fill="none"
      viewBox="0 0 27 27"
      style={{
        marginRight: marginRight || 14,
        fill: color || '#02569C',
        width: size ? size.width : 26,
        height: size ? size.height : 26,
        minWidth: size ? size.width : 26,
        minHeight: size ? size.height : 26
      }}
    >
      <path d="M13.125 0a13.125 13.125 0 100 26.25 13.125 13.125 0 000-26.25zm1.64 7.656a1.64 1.64 0 11-3.274 0 1.64 1.64 0 013.272 0h.003zm-1.64 3.282a1.093 1.093 0 011.094 1.093v6.563a1.094 1.094 0 01-2.188 0V12.03a1.094 1.094 0 011.094-1.094z" />
    </svg>
  );
}

export default IconInfo;
