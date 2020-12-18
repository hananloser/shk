import * as React from "react";

function TrendingDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 93" fill="none" {...props}>
      <path
        d="M95.833 69.75L56.25 32.937 35.417 52.314 4.167 23.25"
        stroke="#376996"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.833 69.75h25V46.5"
        stroke="#376996"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoTrendingDown = React.memo(TrendingDown);
export default MemoTrendingDown;
