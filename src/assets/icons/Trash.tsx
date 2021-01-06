import * as React from "react";

function Trash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 22 26" fill="none" {...props}>
      <path
        d="M21.214 1.9h-5.893L14.86.985a1.175 1.175 0 00-1.056-.65H8.191a1.17 1.17 0 00-1.05.65l-.462.913H.786a.788.788 0 00-.556.229.779.779 0 00-.23.552v1.563c0 .207.083.406.23.552a.788.788 0 00.556.23h20.428a.788.788 0 00.556-.23.78.78 0 00.23-.552V2.68a.78.78 0 00-.23-.552.788.788 0 00-.556-.229zM2.613 23.14c.037.594.301 1.153.738 1.561a2.365 2.365 0 001.614.636h12.07c.6 0 1.177-.228 1.614-.636.437-.408.701-.967.738-1.562L20.43 6.587H1.57l1.041 16.552z"
        fill="#DC262A"
      />
    </svg>
  );
}

const MemoTrash = React.memo(Trash);
export default MemoTrash;
