import React from "react";

export default function ConnectedLine({ children, className }) {
  return (
    <div className={`relative ${className}`}>
      <div className="z-10">{children}</div>
      <span className="z-0 w-1 h-24 bg-purple-200 absolute top-full left-1/2"></span>
    </div>
  );
}
