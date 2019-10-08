import React from "react";
import { Variations } from "./variations";
import { StoreInfo, applyPlaceholderStoreInfo } from "../info";

interface Props {
  variations: Variations;
  storeInfo: StoreInfo;
}

export default function Header({ variations, storeInfo }: Props) {
  const { storeName } = applyPlaceholderStoreInfo(storeInfo);

  switch (variations.header) {
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
      return (
        <div className="py-5 px-6">
          <h1 className="text-white font-bold inline-block text-2xl">
            {storeName}
          </h1>
        </div>
      );
  }

  return <div className="py-5 px-6"></div>;
}
