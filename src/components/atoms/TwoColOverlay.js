import React from "react";

export default function TwoColOverlay({ children }) {
  return <table className="w-full bg-grey-800-opacity-05">{children}</table>;
}

export function TwoColRow({ title, content }) {
  return (
    <tr className="">
      <td className="pl-4 w-26 text-white text-sm bg-grey-800-opacity-08">
        Background
      </td>
      <td className="pl-4 py-3 flex items-center">{content}</td>
    </tr>
  );
}
