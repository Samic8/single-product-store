import React from "react";
import { Variations } from "./variations";
import { StoreInfo, applyPlaceholderStoreInfo } from "../info";
import Decoration from "./Decoration";
import { getActiveClasses } from "../../../utility/active-classes";

interface Props {
  variations: Variations;
  storeInfo: StoreInfo;
}

export default function ProductContainer({ variations, storeInfo }: Props) {
  const appliedStoreInfo = applyPlaceholderStoreInfo(storeInfo);
  switch (variations.productContainer) {
    case 1:
      return (
        <CenteredContainer
          variations={variations}
          classes={{ image: "rounded shadow-sm" }}
          storeInfo={appliedStoreInfo}
        />
      );
    case 2:
      return (
        <CenteredContainer
          variations={variations}
          classes={{ root: "shadow overflow-hidden bg-white" }}
          storeInfo={appliedStoreInfo}
        />
      );
    case 3:
      return <div>{appliedStoreInfo.productName}</div>;
  }
  return <></>;
}

const CenteredContainer = ({
  storeInfo: { productName, price, description, image },
  classes = {},
  variations
}: {
  storeInfo: StoreInfo;
  classes?: { root?: string; image?: string };
  variations: Variations;
}) => (
  <div
    className={getActiveClasses([
      "max-w-3xl mx-auto rounded-sm flex",
      classes.root
    ])}
  >
    <img
      src={image.previewUrl}
      className={getActiveClasses(["w-2/5 bg-gray-200 z-10", classes.image])}
    />
    <div className="w-3/5 px-10 py-16 relative">
      <h2 className="font-bold text-2xl leading-tight inline-block">
        {productName}
        <div className="bg-gray-200 h-2 w-16 ml-auto"></div>
      </h2>
      <div className="text-3xl">{price}</div>
      <p className="text-md leading-tight mt-2">{description}</p>
      {/* TODO better focus state? */}
      <button className="rounded-xl bg-gray-500 py-3 px-6 text-white font-bold mt-4 hocus:bg-gray-600">
        Buy
      </button>
      <Decoration
        variations={variations}
        className="absolute"
        style={{ bottom: "20px", right: "-20px" }}
      />
      <Decoration
        variations={variations}
        className="absolute z-0"
        style={{ top: "-30px", left: "-50px" }}
      />
    </div>
  </div>
);
