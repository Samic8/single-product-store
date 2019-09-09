import React from "react";

export default function GradientBox({ children }) {
  return (
    <section className="alias-rounded-index w-full shadow overflow-hidden">
      <div className="gradient">{children}</div>
    </section>
  );
}
