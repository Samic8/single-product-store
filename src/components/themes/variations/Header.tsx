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
        <>
          {/* TODO figure out how to lazy load this font with gatsby */}
          <link
            href="https://fonts.googleapis.com/css?family=Satisfy&display=swap"
            rel="stylesheet"
          ></link>
          <div className="py-5 px-6">
            <h1
              className="text-white font-bold inline-block text-2xl"
              style={{ fontFamily: "Satisfy", transform: "rotate(-5deg)" }}
            >
              {storeName}
            </h1>
          </div>
        </>
      );
    case 2:
      return <div className="text-white font-bold">1</div>;
    case 3:
      return <div className="text-white font-bold">2</div>;
  }
}
