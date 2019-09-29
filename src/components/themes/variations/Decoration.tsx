import React from "react";

import { Variations } from "./variations";
import DecoSvg from "../decorations/pattern.svg";
import Deco2Svg from "../decorations/pattern2.svg";

// TODO: Make standard props and extend in each variation
interface Props {
  variations: Variations;
  [key: string]: any;
}

export default function Pattern({ variations, ...props }: Props) {
  if (!variations.decoration) return <></>;

  switch (variations.decoration) {
    case 1:
      return <DecoSvg {...props} />;
    case 2:
      return <Deco2Svg {...props} />;
  }
}
