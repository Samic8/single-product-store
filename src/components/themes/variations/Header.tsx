import React from "react";
import { HeaderVariations } from "./variations";
import { StoreInfo, applyPlaceholderStoreInfo } from "../info";

interface Props {
  variation: HeaderVariations;
  storeInfo: StoreInfo;
}

export default function Header({ variation, storeInfo }: Props) {
  const { storeName } = applyPlaceholderStoreInfo(storeInfo);

  switch (variation) {
    case 1:
      return (
        <div className="text-white font-bold" style={{ fontFamily: "Satisfy" }}>
          {/* TODO figure out how to lazy load this font with gatsby */}
          <link
            href="https://fonts.googleapis.com/css?family=Satisfy&display=swap"
            rel="stylesheet"
          ></link>
          {storeName}
        </div>
      );
    case 2:
      return <div className="text-white font-bold">1</div>;
    case 3:
      return <div className="text-white font-bold">2</div>;
  }
}
