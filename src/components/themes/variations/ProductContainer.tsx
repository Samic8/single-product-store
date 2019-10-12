import React from "react";
import { Image } from "cloudinary-react";

import { Variations } from "./variations";
import { StoreInfo, applyPlaceholderStoreInfo } from "../info";
import Decoration from "./Decoration";
import { getActiveClasses } from "../../../utility/active-classes";
import PlaceholderProductImage from "../../../images/product-image.jpg";

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
  storeInfo: { productName, price, description, imageId },
  classes = {},
  variations
}: {
  storeInfo: StoreInfo;
  classes?: { root?: string; image?: string };
  variations: Variations;
}) => {
  const imageClasses = `h-sm md:h-auto md:w-2/5 z-10 ${classes.image}`;

  const ImageComponent = ({ className = "" }) => (
    <div
      className={getActiveClasses([
        imageClasses,
        className,
        "self-start overflow-hidden",
        {
          "rounded-lg shadow": variations.productContainer === 1,
          "rounded-lg md:rounded-none": variations.productContainer === 2
        }
      ])}
    >
      {imageId && (
        <Image
          className="object-cover w-full"
          cloudName="irevdev"
          publicId={imageId}
          width="300"
          crop="scale"
        />
      )}
      {!imageId && (
        <img className="object-cover w-full" src={PlaceholderProductImage} />
      )}
    </div>
  );

  const shouldUseWhiteText =
    variations.backgroundColor === 3 &&
    variations.background === 3 &&
    variations.productContainer === 1;
  const textColorClasses = {
    "text-white": shouldUseWhiteText,
    "text-gray-800": !shouldUseWhiteText
  };

  return (
    <div
      className={getActiveClasses([
        "max-w-3xl mx-6 md:mx-auto rounded-sm flex md:flex-row flex-col",
        classes.root,
        textColorClasses
      ])}
    >
      <ImageComponent className="hidden md:block" />
      <div
        className={getActiveClasses(["md:w-3/5 px-4 md:px-10 py-16 relative"])}
      >
        <h2 className="font-bold text-2xl leading-tight inline-block">
          {productName}
          <div className="bg-gray-200 h-2 w-16 ml-auto"></div>
        </h2>
        <ImageComponent className="block md:hidden my-4" />
        <div className="text-3xl">{price}</div>
        <p className="text-lg leading-tight mt-2 max-w-sm">{description}</p>
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
};
