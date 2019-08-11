import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InsetBox from "../components/atoms/InsetBox";
import ConnectedLine from "../components/atoms/ConnectedLine";
import StoreMockupSvg from "../images/store-mockup.svg";
import StoreInfoSvg from "../images/store-info.svg";
import StoreSuccessSvg from "../images/store-success.svg";
import GradientBox from "../components/atoms/GradientBox";
import { InlineFunctions } from "terser";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="flex flex-col items-center">
        <ConnectedLine>
          <InsetBox className="px-4 py-8 mt-10 max-w-sm">
            <h2 className="text-white text-2xl text-center font-bold">
              The simplest way to sell something online.
            </h2>
          </InsetBox>
        </ConnectedLine>
        <ul>
          <ListItem
            content={<StoreMockupSvg />}
            text={"Choose a Theme"}
          ></ListItem>
          <ListItem
            content={<StoreInfoSvg />}
            text={"Enter some info"}
          ></ListItem>
          <ListItem
            content={<StoreSuccessSvg />}
            text={"You have a store!"}
          ></ListItem>
        </ul>
      </div>
    </Layout>
  );
}

const ListItem = ({ content, text }) => (
  <li>
    <ConnectedLine className="mt-16">
      <GradientBox
        content={<div className="flex justify-center">{content}</div>}
        text={<span>{text}</span>}
      ></GradientBox>
    </ConnectedLine>
  </li>
);

export default IndexPage;
