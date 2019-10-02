import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HomepageLeftHandSide from "../components/layout/HomepageLeftHandSide";
import HomepageRightHandSide from "../components/layout/HomepageRightHandSide";
import { Store } from "../components/containers/store";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { getActiveClasses } from "../utility/active-classes";

// TODO: Move bottom mobile bar into component
import SettingsSvg from "../svgs/settings.svg";
import AirplaySvg from "../svgs/airplay.svg";
import SaveButton from "../components/SaveButton";

const client = new ApolloClient({
  uri: "https://d0ttz70vr6.execute-api.us-east-1.amazonaws.com/dev/graphql"
});

function IndexPage() {
  const [isShowing, setIsShowing] = useState<"config" | "preview">("config");

  return (
    <ApolloProvider client={client}>
      <Store.Provider>
        <Layout>
          <SEO
            keywords={[
              "single",
              "product",
              "store",
              "online store",
              "single product",
              "single product store",
              "easy online store"
            ]}
            title="Single Product Store."
          />
          <div className="flex w-full relative">
            <HomepageLeftHandSide
              className={getActiveClasses([
                "sm:block",
                isShowing !== "config" ? "hidden" : ""
              ])}
            />
            <HomepageRightHandSide
              className={getActiveClasses([
                "sm:flex",
                isShowing !== "preview" ? "hidden" : ""
              ])}
            />
            <div className="fixed flex items-center px-6 bottom-0 left-0 right-0 h-16 bg-purple-900 shadow sm:hidden">
              <SwitchButton
                onClick={() => setIsShowing("config")}
                isActive={isShowing === "config"}
                label={"Config"}
              >
                <SettingsSvg className={"stroke-current"} />
              </SwitchButton>
              <SwitchButton
                onClick={() => setIsShowing("preview")}
                isActive={isShowing === "preview"}
                label={"Preview"}
              >
                <AirplaySvg className={"stroke-current"} />
              </SwitchButton>
              <div className="ml-auto">
                <SaveButton saveIconSize="small" />
              </div>
            </div>
          </div>
        </Layout>
      </Store.Provider>
    </ApolloProvider>
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

export default IndexPage;
