import React from "react";

export default function GradientBox({ content, text }) {
  return (
    <section className="alias-rounded-index w-full shadow overflow-hidden">
      <div className="gradient">{content}</div>
    </section>
  );
}
