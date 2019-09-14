import React from "react";
import SaveSvg from "../../images/save.svg";

interface Props {}

export default function HomepageRightHandSide() {
  return (
    <div className="flex items-start w-full py-2">
      <button className="py-2">
        <SaveSvg />
        <div className="text-sm text-gray-200 font-bold text-center">Save</div>
      </button>
      <div className="bg-teal-100 text-teal-900 rounded-sm px-3 py-2 flex-grow mx-5 text-lg leading-snug">
        <span className="font-bold">Single Product Store</span> is not available
        just yet.
        <div>Save your configuration so its ready to set live at launch</div>
      </div>
    </div>
  );
}
