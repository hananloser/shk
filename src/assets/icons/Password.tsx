import * as React from "react";

function Password(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 19 19" fill="none" {...props}>
      <path
        d="M14.808 1.42a2.677 2.677 0 00-2.678 2.678v10.71a2.678 2.678 0 102.678-2.678H4.098a2.677 2.677 0 102.677 2.678V4.098a2.678 2.678 0 10-2.677 2.677h10.71a2.678 2.678 0 000-5.355z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PasswordIcon = React.memo(Password);
export default PasswordIcon;
