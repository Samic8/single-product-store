import React from "react";
import { HeaderVariations } from "./variations/variations";
import Header from "./variations/Header";
import { StoreInfo } from "./info";

interface Props {
  headerVariation: HeaderVariations;
  storeInfo: StoreInfo;
}

export default function ThemeContainer({ headerVariation, storeInfo }: Props) {
  return (
    <div>
      {headerVariation && (
        <Header variation={headerVariation} storeInfo={storeInfo} />
      )}
    </div>
  );
}
