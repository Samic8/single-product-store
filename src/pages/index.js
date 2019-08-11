import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InsetBox from "../components/atoms/InsetBox";
import ConnectedLine from "../components/atoms/ConnectedLine";
import StoreMockupSvg from "../images/store-mockup.svg";
import StoreInfoSvg from "../images/store-info.svg";

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
          <ConnectedLine className="mt-16">
            <div className="rounded w-80 shadow overflow-hidden">
              <div className="gradient py-8">
                <StoreMockupSvg className="mx-auto" />
              </div>
              <h2 className="text-center text-purple-900 block py-4 leading-none bg-gray-100 font-bold text-xl">
                Choose a Theme
              </h2>
            </div>
          </ConnectedLine>
        </ul>
      </div>
    </Layout>
  );
}

export default IndexPage;
