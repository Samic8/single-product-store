import React from "react";
import { Variations } from "./variations";
import { StoreInfo, applyPlaceholderStoreInfo } from "../info";
import DecoSvg from "../decorations/pattern.svg";
import { getActiveClasses } from "../../../utility/active-classes";

interface Props {
  variations: Variations;
  storeInfo: StoreInfo;
}

export default function ProductContainer({ variations, storeInfo }: Props) {
  const appliedStoreInfo = applyPlaceholderStoreInfo(storeInfo);
  switch (variations.productContainer) {
    case 1:
      return <Container variations={variations} storeInfo={appliedStoreInfo} />;
    case 2:
      return (
        <Container
          variations={variations}
          storeInfo={appliedStoreInfo}
          classes={{ root: "shadow overflow-hidden bg-white" }}
        />
      );
    case 3:
      return <div>{appliedStoreInfo.productName}</div>;
  }
  return <></>;
}

const Container = ({
  storeInfo: { moreInfo },
  classes = {},
  variations
}: {
  storeInfo: StoreInfo;
  classes?: { root?: string };
  variations: Variations;
}) => (
  <div
    className={getActiveClasses([
      "max-w-3xl mx-auto rounded-sm flex relative mt-32 text-gray-600",
      classes.root
    ])}
  >
    <ul className="mx-16 my-8">
      {!!moreInfo &&
        moreInfo.map(({ text, icon }, index) => (
          <li
            key={text + icon}
            className={getActiveClasses({ ["mt-8"]: index > 0 })}
          >
            <div>{icon}</div>
            <p className="text-base mt-3">{text}</p>
          </li>
        ))}
    </ul>
    {variations.decoration === 1 && (
      <>
        <DecoSvg className="absolute z-0" style={{ top: "0", left: "-80px" }} />
        <DecoSvg
          className="absolute"
          style={{ bottom: "50%", right: "-20px" }}
        />
      </>
    )}
  </div>
);
