import React from "react";

export default function GradientBox({ content, text }) {
  return (
    <section className="alias-rounded-index w-80 shadow overflow-hidden">
      <div className="gradient py-8">{content}</div>
      <h1 className="text-center text-purple-900 block py-4 leading-none bg-gray-100 font-bold text-xl">
        {text}
      </h1>
    </section>
  );
}
