import React from "react";
import { Variations } from "./variations";
import { StoreInfo, applyPlaceholderStoreInfo } from "../info";

interface Props {
  variations: Variations;
  storeInfo: StoreInfo;
}

export default function ProductContainer({ variations, storeInfo }: Props) {
  const { productName } = applyPlaceholderStoreInfo(storeInfo);
  switch (variations.productContainer) {
    case 1:
      return <div>{productName}</div>;
    case 2:
      return (
        <div className="shadow overflow-hidden bg-white max-w-3xl mx-auto rounded-sm flex">
          <div className="w-1/3  bg-gray-200"></div>
          <div className="w-2/3 px-10 py-16">
            <h2 className="font-bold text-2xl text-gray-600 leading-tight inline-block">
              {productName}
              <div className="bg-gray-200 h-2 w-16 ml-auto"></div>
            </h2>
          </div>
        </div>
      );
    case 3:
      return <div>{productName}</div>;
  }
  return <div>{productName}</div>;
}
