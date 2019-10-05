import React, { useState } from "react";
import SettingsSvg from "../../svgs/settings.svg";
import AirplaySvg from "../../svgs/airplay.svg";
import SaveButton from "../../components/SaveButton";
import { getActiveClasses } from "../../utility/active-classes";
import { useStore } from "./store";

interface Props {}

export default function NavigationBar({  }: Props) {
  const [state, dispatch] = useStore();

  return (
    <div className="fixed flex items-center px-6 bottom-0 left-0 right-0 h-16 bg-purple-900 shadow lg:hidden">
      <SwitchButton
        onClick={() => dispatch({ type: "UPDATE_NAV_BAR", payload: "config" })}
        isActive={state.activeNavBarTab === "config"}
        label={"Config"}
      >
        <SettingsSvg className={"stroke-current"} />
      </SwitchButton>
      <SwitchButton
        onClick={() => dispatch({ type: "UPDATE_NAV_BAR", payload: "preview" })}
        isActive={state.activeNavBarTab === "preview"}
        label={"Preview"}
      >
        <AirplaySvg className={"stroke-current"} />
      </SwitchButton>
      <div className="ml-auto">
        <SaveButton saveIconSize="small" />
      </div>
    </div>
  );
}

function SwitchButton({ isActive, label, children, ...props }) {
  return (
    <button
      className={getActiveClasses([
        "mr-8 flex flex-col items-center relative",
        {
          "text-white": isActive,
          "text-gray-200": !isActive
        }
      ])}
      {...props}
    >
      {children}
      <div className="text-sm font-bold text-center">{label}</div>
      {isActive && <div className="absolute top-full h-1 bg-teal-500 w-full" />}
    </button>
  );
}
