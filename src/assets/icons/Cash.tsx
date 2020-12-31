import * as React from "react";

function Cash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 54 69" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.857 22.544H38.47v-4.089h5.215c1.335 0 2.412-1.34 2.412-2.988v-5.48C46.096 8.334 45.019 7 43.685 7h-14.24c-1.334 0-2.406 1.337-2.406 2.988v5.48c0 1.65 1.072 2.987 2.407 2.987h5.316v4.089H9.027a2.59 2.59 0 00-2.585 2.588L0 58.58V69h54V58.58l-6.554-33.448a2.602 2.602 0 00-.761-1.832 2.579 2.579 0 00-1.828-.756zM15.442 53.56h-3.977v-4.057h3.977v4.057zm-3.98-7.75v-4.058h3.976v4.057h-3.977zm11.696 7.808H19.18v-4.115h3.978v4.115zm0-7.87h-4.04V41.81h4.04v3.938zm7.715 7.862h-4.039V49.5h4.04v4.111zm-4.039-7.862v-3.996h4.04v3.995h-4.04zm4.04-7.75H11.464v-7.751h19.408v7.75zm11.51 0H34.6v-3.954h7.785v3.953z"
        fill="#D6161A"
      />
      <rect x={9} width={8} height={11} rx={2} fill="#D6161A" />
      <path
        d="M14.5 19.302a2 2 0 01-3 0l-6.823-7.728c-1.14-1.291-.224-3.324 1.499-3.324h13.648c1.723 0 2.64 2.033 1.5 3.324l-6.825 7.728z"
        fill="#D6161A"
      />
    </svg>
  );
}

const MemoCash = React.memo(Cash);
export default MemoCash;
