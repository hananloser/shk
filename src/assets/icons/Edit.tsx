import * as React from "react";

function Edit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M1.54 16.915L.039 23.4A1.63 1.63 0 001.62 25.38c.113.011.227.011.34 0l6.526-1.503 12.53-12.483-6.993-6.977L1.541 16.915zM24.956 5.144L20.288.477a1.637 1.637 0 00-2.31 0L15.385 3.07l6.985 6.985 2.595-2.594a1.637 1.637 0 00-.008-2.318z"
        fill="#FF8125"
      />
    </svg>
  );
}

const MemoEdit = React.memo(Edit);
export default MemoEdit;
