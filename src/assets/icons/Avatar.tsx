import * as React from "react";

function Avatar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 70 70" fill="none" {...props}>
      <circle cx={35} cy={35} r={35} fill="#DC262A" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.385 60.107C53.082 66.23 44.481 70 35 70c-9.482 0-18.083-3.77-24.386-9.894 3.834-6.02 10.568-10.023 18.22-10.023h12.333c7.65 0 14.384 4.003 18.218 10.024zM35 43.917c-7.65 0-13.875-6.226-13.875-13.875 0-7.65 6.225-13.875 13.875-13.875s13.875 6.225 13.875 13.875S42.65 43.917 35 43.917z"
        fill="#F1F1F1"
      />
    </svg>
  );
}

const MemoAvatar = React.memo(Avatar);
export default MemoAvatar;
