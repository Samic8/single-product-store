import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InsetBox from "../components/atoms/InsetBox";
import ConnectedLine from "../components/atoms/ConnectedLine";
import StoreMockupSvg from "../images/store-mockup.svg";
import StoreInfoSvg from "../images/store-info.svg";
import StoreSuccessSvg from "../images/store-success.svg";
import TickSvg from "../images/tick.svg";
import GradientBox from "../components/atoms/GradientBox";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="flex flex-col items-center">
        <ConnectedLine>
          <InsetBox className="px-4 py-8 mt-10 alias-max-w-index-wide">
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
        <ConnectedLine className="mt-16 alias-max-w-index-wide w-full">
          <InsetBox className="px-8 py-5 max-w-sm text-purple-100">
            <div className="font-bold mb-4">
              <span className="text-2xl">$28</span>
              <span className="text-sm ml-2">/month</span>
              <div className="leading-tight">+3.2% payment processing fee</div>
            </div>
            <ul>
              <FeatureItem
                header="Online Store"
                text="A well presented website to sell your product"
              />
              <FeatureItem
                header="Payment Processing"
                text="We handle to payments for you, just tell us where to pay you"
              />
              <FeatureItem
                header="Change templates in one click"
                text="If your product changes or its time for a refresh you can change styles"
              />
              <FeatureItem
                header="No branding"
                text="No one will know that you built a store with us unless you tell them"
              />
            </ul>
          </InsetBox>
        </ConnectedLine>
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

const FeatureItem = ({ header, text }) => (
  <li className="mt-2">
    <div className="flex">
      <TickSvg className="mt-2 flex-shrink-0" />
      <div className="ml-2">
        <span className="text-white">
          <h2 className="text-lg font-medium">{header}</h2>
          <p className="text-purple-100 text-base leading-tight">{text}</p>
        </span>
      </div>
    </div>
  </li>
);

export default IndexPage;
