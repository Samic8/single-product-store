import React from "react";
import SwipeableViews from "react-swipeable-views";

import NavigationBar from "./NavigationBar";
import HomepageLeftHandSide from "../layout/HomepageLeftHandSide";
import HomepageRightHandSide from "../layout/HomepageRightHandSide";
import { useStore } from "./store";

interface Props {}

export default function MainContent({  }: Props) {
  const [state, dispatch] = useStore();
  const index = state.activeNavBarTab === 'config' ? 0 : 1;
  const onChangeIndex = (updatedIndex) => {
    dispatch({
    type: 'UPDATE_NAV_BAR',
    payload: updatedIndex === 0 ? 'config' : 'preview',
  })}
  return (
    <>
      <div className='sm:hidden'>
        <SwipeableViews
          index={index}
          onChangeIndex={onChangeIndex}
        >
          <HomepageLeftHandSide
            className="mx-auto"
          />
          <HomepageRightHandSide/>
        </SwipeableViews>
      </div>
      <div className="hidden sm:flex w-full relative">
        <HomepageLeftHandSide
          className="mx-auto mx-0"
        />
        <HomepageRightHandSide
          className="flex"
        />
      </div>
      <NavigationBar />
    </>
  );
}
