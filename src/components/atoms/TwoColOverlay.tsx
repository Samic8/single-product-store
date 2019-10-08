import React from "react";
import { getActiveClasses } from "../../utility/active-classes";

export default function TwoColOverlay({ children }) {
  return (
    <table className="w-full bg-grey-800-opacity-05">
      <tbody>{children}</tbody>
    </table>
  );
}

export const TwoColRow = ({ children }) => <tr>{children}</tr>;

export const TwoColTitleCell = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <td
    className={getActiveClasses([
      "pl-4 w-32 text-white text-sm bg-grey-800-opacity-08",
      className
    ])}
  >
    {children}
  </td>
);

export const TwoColContentCell = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <td className={getActiveClasses(["flex items-center text-sm", className])}>
    {children}
  </td>
);
