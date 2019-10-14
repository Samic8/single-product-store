import React from "react";
import ThemeContainer from "../themes/Container";
import SaveButton from "../SaveButton";
import { getActiveClasses } from "../../utility/active-classes";
import { useStore } from "../containers/store";

interface Props {
  className?: string;
}

export default function HomepageRightHandSide({ className }: Props) {
  const [{ selectedVariations, storeInfo }, dispatch] = useStore();
  return (
    <section
      className={getActiveClasses([
        "flex-grow flex flex-col lg:flex",
        className
      ])}
    >
      <div className="flex items-start w-full lg:py-2">
        <div className="hidden lg:block">
          <SaveButton />
        </div>
        <div
          className="bg-teal-100 text-teal-900 lg:rounded-sm px-3 py-2 flex-grow lg:mx-5 text-lg leading-snug cursor-pointer"
          onClick={() => dispatch({ type: "TOGGLE_SAVE_MODAL", payload: true })}
        >
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
