import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HomepageLeftHandSide from "../components/layout/HomepageLeftHandSide";
import HomepageRightHandSide from "../components/layout/HomepageRightHandSide";

function IndexPage() {
  return (
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
      <div className="flex w-full">
        <HomepageLeftHandSide />
        <HomepageRightHandSide />
      </div>
    </Layout>
  );
}

export default IndexPage;
