import React from "react";
import { Variations } from "../variations/variations";

interface Props {
  variations: Variations;
  children: React.ReactChild;
}

export default function Background({ variations, children }: Props) {
  switch (variations.background) {
    case 1:
      return (
        <div className="relative flex flex-grow w-full">
          <div className="bg-gray-300 w-1/4"></div>
          <div className="bg-red-300 w-3/4"></div>
          <div className="absolute inset-0">{children}</div>
        </div>
      );
    case 2:
      return (
        <div className="relative flex flex-grow w-full bg-gray-200">
          <div className="absolute inset-0">{children}</div>
        </div>
      );
    case 3:
      return <div>{children}</div>;
  }
  return <div>{children}</div>;
}
