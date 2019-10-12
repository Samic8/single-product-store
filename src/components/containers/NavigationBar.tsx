import React from "react";
import SettingsSvg from "../../svgs/settings.svg";
import AirplaySvg from "../../svgs/airplay.svg";
import SaveButton from "../../components/SaveButton";
import {NotificationDot} from "../../components/atoms/NotificationDot"
import { getActiveClasses } from "../../utility/active-classes";
import { useStore } from "./store";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

interface Props {}

export default function NavigationBar({  }: Props) {
  const [state, dispatch] = useStore();

  return (
    <div className="fixed z-20 flex items-center px-6 bottom-0 left-0 right-0 h-16 bg-purple-900 shadow lg:hidden">
      <Tabs
        value={state.activeNavBarTab}
        onChange={(e, newVal) =>
          dispatch({ type: "UPDATE_NAV_BAR", payload: newVal })
        }
        aria-label="simple tabs example"
        TabIndicatorProps={{ className: "h-1 bg-teal-500" }}
      >
        <Tab
          value="config"
          label="Config"
          disableTouchRipple
          icon={<SettingsSvg className={"stroke-current mb-0"} />}
          classes={{
            root: "min-h-0 pt-0 pb-1 px-4 outline-none min-w-0",
            wrapper: getActiveClasses([
              {
                "text-white capitalize mb-0": true,
                "text-gray-200": false
              }
            ])
          }}
        />
        <Tab
          value="preview"
          label="Preview"
          disableTouchRipple
          icon={<>
            <NotificationDot
              shouldHide={!state.hasUnseenChanges}
              style={{ top: "5px", right: "-5px" }}
            />
            <AirplaySvg className={"stroke-current mb-0"} />
          </>}
          classes={{
            root: "min-h-0 min-w-0 pt-0 pb-1 px-4 outline-none",
            wrapper: getActiveClasses([
              {
                "text-white capitalize mb-0": true,
                "text-gray-200": false
              }
            ])
          }}
        />
      </Tabs>
      <div className="ml-auto px-4 mb-1">
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
