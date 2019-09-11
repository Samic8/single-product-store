import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HomepageLeftHandSide from "../components/layout/HomepageLeftHandSide";

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
      />
      <HomepageLeftHandSide />
    </Layout>
  );
}

export default IndexPage;
