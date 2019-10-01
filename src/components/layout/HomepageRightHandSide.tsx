import React from "react";
import { Store } from "../../components/containers/store";
import ThemeContainer from "../themes/Container";
import SaveButton from "../SaveButton";
import { getActiveClasses } from "../../utility/active-classes";

interface Props {
  className?: string;
}

export default function HomepageRightHandSide({ className }: Props) {
  const { selectedVariations, storeInfo } = React.useContext(Store.State);

  return (
    <section
      className={getActiveClasses(["flex-grow flex flex-col", className])}
    >
      <div className="flex items-start w-full py-2">
        <SaveButton />
        <div className="bg-teal-100 text-teal-900 rounded-sm px-3 py-2 flex-grow mx-5 text-lg leading-snug">
          <span className="font-bold">Single Product Store</span> is not
          available just yet.
          <div>Save your configuration so its ready to set live at launch</div>
        </div>
      </div>
      <ThemeContainer
        variations={selectedVariations}
        storeInfo={storeInfo}
      ></ThemeContainer>
    </section>
  );
}
