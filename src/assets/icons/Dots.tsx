import * as React from "react";

function Dots(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 6 20" fill="current" className='fill-current' {...props}>
      <circle cx={2.55} cy={2.55} r={2.55} fill="#ffffff" />
      <circle cx={2.55} cy={9.55} r={2.55} fill="#ffffff" />
      <circle cx={2.55} cy={16.55} r={2.55} fill="#ffffff" />
    </svg>
  );
}

const MemoDots = React.memo(Dots);
export default MemoDots;
