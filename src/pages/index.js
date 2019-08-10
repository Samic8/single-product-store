import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InsetBox from "../components/atoms/InsetBox";
import ConnectedLine from "../components/atoms/ConnectedLine";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className='flex flex-col items-center'>
        <ConnectedLine>
          <InsetBox className='px-4 py-8 mt-10 max-w-sm'>
            <h2 className='text-white text-2xl text-center font-bold'>The simplest way to sell something online.</h2>
          </InsetBox>
        </ConnectedLine>
      </div>
    </Layout>
  );
}

export default IndexPage;
