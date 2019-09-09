import React from "react";
import GradientBox from "./atoms/GradientBox";
import TwoColOverlay, { TwoColRow } from "./atoms/TwoColOverlay";

interface Props {}

export default function Info(): Props {
  return (
    <GradientBox>
      <TwoColOverlay>
        <TwoColRow
          title={
            <h2 className="text-white font-bold text-sm leading-loose">Info</h2>
          }
          content={<></>}
        />
        <TwoColRow title={"Product"} content={<></>} />
        <TwoColRow title={"Type"} content={<></>} />
        <TwoColRow title={"Price"} content={<></>} />
        <TwoColRow title={"Description"} content={<></>} />
      </TwoColOverlay>
    </GradientBox>
  );
}
