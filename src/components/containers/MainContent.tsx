import React from "react";
import NavigationBar from "./NavigationBar";
import HomepageLeftHandSide from "../layout/HomepageLeftHandSide";
import HomepageRightHandSide from "../layout/HomepageRightHandSide";
import { getActiveClasses } from "../../utility/active-classes";
import { useStore } from "./store";

interface Props {}

export default function MainContent({  }: Props) {
  const [state] = useStore();
  return (
    <div className="flex w-full relative">
      <HomepageLeftHandSide
        className={getActiveClasses([
          "lg:block mx-auto lg:mx-0 alias-max-w-index-wide px-6",
          state.activeNavBarTab !== "config" ? "hidden" : ""
        ])}
      />
      <HomepageRightHandSide
        className={getActiveClasses([
          "lg:flex",
          state.activeNavBarTab !== "preview" ? "hidden" : ""
        ])}
      />
      <NavigationBar />
    </div>
  );
}
