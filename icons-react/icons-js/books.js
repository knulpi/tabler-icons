import * as React from "react";

function IconBooks({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-books" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={5} y={4} width={4} height={16} rx={1} /><rect x={9} y={4} width={4} height={16} rx={1} /><path d="M5 8h4" /><path d="M9 16h4" /><g transform="rotate(-13 27.054 -55.827)"><rect width={4} height={16} rx={1} /><path d="M0 4h4" /><path d="M0 12h4" /></g></svg>;
}

export default IconBooks;