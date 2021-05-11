import React from "react";

function IconNext(props) {
  const { size, marginLeft, marginRight, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      fill="none"
      viewBox="0 0 14 12"
      style={{
        marginLeft: marginLeft || 16,
        marginRight: marginRight || 0,
        fill: color || "#02569C",
        width: size ? size.width : 14,
        height: size ? size.height : 12,
        minWidth: size ? size.width : 14,
        minHeight: size ? size.height : 12,
      }}
    >
      <path
        fillRule="evenodd"
        d="M7.495.239a.811.811 0 00-.248.575.787.787 0 00.248.575l4.467 4.3-4.467 4.3a.812.812 0 00-.248.575.788.788 0 00.248.575.849.849 0 00.597.239.875.875 0 00.598-.239l5.062-4.875A.812.812 0 0014 5.69a.787.787 0 00-.248-.575L8.69.239A.847.847 0 008.092 0a.872.872 0 00-.597.239z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M13 5.813a.798.798 0 00-.247-.575.86.86 0 00-.597-.238H1.187a.86.86 0 00-.596.238.798.798 0 00-.247.574c0 .216.089.423.247.575a.86.86 0 00.597.238h10.968a.86.86 0 00.597-.238.798.798 0 00.247-.574z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconNext;
