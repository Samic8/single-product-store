import React from "react";

export default function InsetBox({ children, className }) {
  return (
    <div className={`bg-purple-600 shadow-inset-combo ${className}`}>
      {children}
    </div>
  );
}
