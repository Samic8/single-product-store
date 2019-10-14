import React from "react";
import { Variations } from "./variations";
import { StoreInfo, applyPlaceholderStoreInfo } from "../info";
import { getActiveClasses } from "../../../utility/active-classes";

interface Props {
  variations: Variations;
  storeInfo: StoreInfo;
}

export default function Header({ variations, storeInfo }: Props) {
  const { storeName } = applyPlaceholderStoreInfo(storeInfo);

  const shouldUseWhiteText =
    (variations.backgroundColor === 1 && variations.background === 1) ||
    (variations.backgroundColor === 3 && variations.background === 3);
  const textColorClasses = {
    "text-white": shouldUseWhiteText,
    "text-gray-800": !shouldUseWhiteText
  };

  switch (variations.header) {
    case 1:
      return (
        <>
          <div className="py-5 px-6">
            <h1
              className={getActiveClasses([
                "font-bold inline-block text-2xl",
                textColorClasses
              ])}
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
          <h1
            className={getActiveClasses([
              "font-bold inline-block text-2xl",
              textColorClasses
            ])}
          >
            {storeName}
          </h1>
        </div>
      );
  }

  return <div className="py-5 px-6"></div>;
}
