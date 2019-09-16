import React from "react";
import { HeaderVariations } from "./variations";

interface Props {
  variation: HeaderVariations;
}

export default function Header({ variation }: Props) {
  switch (variation) {
    case 1:
      return <div className="text-white font-bold">0</div>;
    case 2:
      return <div className="text-white font-bold">1</div>;
    case 3:
      return <div className="text-white font-bold">2</div>;
  }
}
