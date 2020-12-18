import * as React from "react";

function Wallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 93" fill="none" {...props}>
      <path
        d="M87.5 69.75v3.875c0 4.263-3.75 7.75-8.333 7.75H20.833c-4.625 0-8.333-3.487-8.333-7.75v-54.25c0-4.262 3.708-7.75 8.333-7.75h58.334c4.583 0 8.333 3.488 8.333 7.75v3.875H50c-4.625 0-8.333 3.488-8.333 7.75v31c0 4.263 3.708 7.75 8.333 7.75h37.5zM50 62h41.667V31H50v31zm16.667-9.688c-3.459 0-6.25-2.596-6.25-5.812s2.791-5.813 6.25-5.813c3.458 0 6.25 2.597 6.25 5.813 0 3.216-2.792 5.813-6.25 5.813z"
        fill="#376996"
      />
    </svg>
  );
}

const MemoWallet = React.memo(Wallet);
export default MemoWallet;
