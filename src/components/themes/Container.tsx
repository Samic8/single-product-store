import React from "react";
import { HeaderVariations } from "./variations/variations";
import Header from "./variations/Header";

interface Props {
  headerVariation: HeaderVariations;
}

export default function ThemeContainer({ headerVariation }: Props) {
  return <div>{headerVariation && <Header variation={headerVariation} />}</div>;
}