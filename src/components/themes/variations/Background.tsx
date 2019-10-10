import React from "react";
import { Variations } from "../variations/variations";
import { getActiveClasses } from "../../../utility/active-classes";

interface Props {
  variations: Variations;
  children: React.ReactChild;
}

export default function Background({ variations, children }: Props) {
  const mainBackgroundColorVariations = {
    1: {
      1: "bg-red-300",
      2: "bg-blue-800",
      3: "bg-purple-500"
    },
    2: {
      1: "bg-yellow-100",
      2: "bg-gray-100",
      3: "bg-gray-800"
    },
    3: {
      1: "bg-white",
      2: "bg-yellow-100",
      3: "bg-gray-800"
    }
  };

  if (!variations.background || !variations.backgroundColor) return null;

  const mainBackgroundColor =
    mainBackgroundColorVariations[variations.background][
      variations.backgroundColor
    ];

  switch (variations.background) {
    case 1:
      return (
        <>
          <div className="relative flex flex-grow w-full min-h-screen md:flex hidden">
            {/* TODO: Pixel value is a bit magic, maybe make a constant of the image width and share here  */}
            <div
              className={mainBackgroundColor}
              style={{ width: "calc(50% - 220px)" }}
            ></div>
            <div
              className="bg-white"
              style={{ width: "calc(50% + 220px)" }}
            ></div>
            <div className="absolute inset-0">{children}</div>
          </div>
          <div className="relative flex flex-grow w-full min-h-screen md:hidden">
            {/* TODO: Pixel value is a bit magic, maybe make a constant of the image width and share here  */}
            <div
              className={mainBackgroundColor}
              style={{ width: "calc(85%)" }}
            ></div>
            <div className="bg-white" style={{ width: "calc(15%)" }}></div>
            <div className="absolute inset-0">{children}</div>
          </div>
        </>
      );
    case 2:
      return <div>{children}</div>;
    case 3:
      return (
        <div
          className={getActiveClasses([
            "relative flex flex-grow w-full",
            mainBackgroundColor
          ])}
        >
          <div className="absolute inset-0">{children}</div>
        </div>
      );
  }
  return <div>{children}</div>;
}
