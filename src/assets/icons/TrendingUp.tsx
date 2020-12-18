import * as React from "react";

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M95.833 25L56.25 64.583 35.417 43.75 4.167 75"
        stroke="#376996"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.833 25h25v25"
        stroke="#376996"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoTrendingUp = React.memo(TrendingUp);
export default MemoTrendingUp;
