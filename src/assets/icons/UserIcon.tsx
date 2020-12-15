import * as React from "react";

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 23 23" fill="none" {...props}>
      <path
        d="M18.624 19.405v-1.781a3.562 3.562 0 00-3.563-3.563H7.937a3.562 3.562 0 00-3.563 3.563v1.781M11.499 10.499a3.562 3.562 0 100-7.125 3.562 3.562 0 000 7.125z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoUserIcon = React.memo(UserIcon);
export default MemoUserIcon;
