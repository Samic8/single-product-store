import React from "react";

export default function TwoColOverlay({children}) {
  return (
    <table className="w-full bg-grey-800-opacity-05">
      {children}
    </table>
  );
}

export function TwoColRow({title, content}) {
  return (
    <tr className="">
      <td className="pl-4 w-26 text-white text-sm">Background</td>
      <td className="pb-3">{content}</td>
    </tr>
  )
}
