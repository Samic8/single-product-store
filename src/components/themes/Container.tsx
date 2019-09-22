import React from "react";
import { Variations } from "./variations/variations";
import Background from "./variations/Background";
import Header from "./variations/Header";
import ProductContainer from "./variations/ProductContainer";
import { StoreInfo } from "./info";
import "./variations/variations-colors.css";

interface Props {
  variations: Variations;
  storeInfo: StoreInfo;
}

export default function ThemeContainer({ variations, storeInfo }: Props) {
  return (
    <div className="flex-grow flex flex-col variations-colors">
      <Background variations={variations}>
        <>
          {variations.header && (
            <Header variation={variations.header} storeInfo={storeInfo} />
          )}
          {variations.productContainer && (
            <ProductContainer variations={variations} storeInfo={storeInfo} />
          )}
        </>
      </Background>
    </div>
  );
}
