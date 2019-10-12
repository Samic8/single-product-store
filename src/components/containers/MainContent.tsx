import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";

import NavigationBar from "./NavigationBar";
import HomepageLeftHandSide from "../layout/HomepageLeftHandSide";
import HomepageRightHandSide from "../layout/HomepageRightHandSide";
import { useStore } from "./store";

interface Props {}

export default function MainContent({  }: Props) {
  const [state, dispatch] = useStore();
  const [viewType, setViewType] = useState<"desktop" | "mobile">("desktop");
  const index = state.activeNavBarTab === "config" ? 0 : 1;
  const onChangeIndex = updatedIndex => {
    dispatch({
      type: "UPDATE_NAV_BAR",
      payload: updatedIndex === 0 ? "config" : "preview"
    });
  };

  useEffect(() => {
    const checkWidth = () => {
      const mql = window.matchMedia(`(max-width: 1024px)`);
      const newViewType = mql.matches ? "mobile" : "desktop";
      setViewType(newViewType);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <>
      {viewType === "mobile" && (
        <SwipeableViews index={index} onChangeIndex={onChangeIndex}>
          <HomepageLeftHandSide className="mx-auto" />
          <HomepageRightHandSide />
        </SwipeableViews>
      )}
      {viewType === "desktop" && (
        <div className="flex w-full relative">
          <HomepageLeftHandSide className="mx-auto mx-0" />
          <HomepageRightHandSide className="flex" />
        </div>
      )}
      <NavigationBar />
    </>
  );
}
