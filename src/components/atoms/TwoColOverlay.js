import React from "react";

export default function TwoColOverlay({ children }) {
  return <table className="w-full bg-grey-800-opacity-05">{children}</table>;
}

export function TwoColRow({ title, content }) {
  return (
    <tr>
      <td className="pl-4 w-26 text-white text-sm bg-grey-800-opacity-08 align-top">
        {title}
      </td>
      <td className="pl-4 pb-1 flex items-center">{content}</td>
    </tr>
  );
}
