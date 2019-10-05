import React from "react";
import { Variations } from "../variations/variations";
import { getActiveClasses } from "../../../utility/active-classes";

interface Props {
  variations: Variations;
  children: React.ReactChild;
}

export default function Background({ variations, children }: Props) {
  const backgroundOneColorVariations = {
    1: "bg-red-300",
    2: "bg-teal-500",
    3: "bg-purple-500"
  };

  const backgroundTwoColorVariations = {
    1: "bg-gray-200",
    2: "bg-teal-500",
    3: "bg-purple-500"
  };

  switch (variations.background) {
    case 1:
      return (
        <div className="relative flex flex-grow w-full min-h-screen">
          {/* TODO: Pixel value is a bit magic, maybe make a constant of the image width and share here  */}
          <div
            className={backgroundOneColorVariations[variations.backgroundColor]}
            style={{ width: "calc(50% - 220px)" }}
          ></div>
          <div
            className="bg-white"
            style={{ width: "calc(50% + 220px)" }}
          ></div>
          <div className="absolute inset-0">{children}</div>
        </div>
      );
    case 2:
      return (
        <div
          className={getActiveClasses([
            "relative flex flex-grow w-full",
            backgroundTwoColorVariations[variations.backgroundColor]
          ])}
        >
          <div className="absolute inset-0">{children}</div>
        </div>
      );
    case 3:
      return <div>{children}</div>;
  }
  return <div>{children}</div>;
}
