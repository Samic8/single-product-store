import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HomepageLeftHandSide from "../components/layout/HomepageLeftHandSide";
import HomepageRightHandSide from "../components/layout/HomepageRightHandSide";
import { Store } from "../components/containers/store";
import SaveModal from "../components/layout/SaveModal";

function IndexPage() {
  return (
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
        <div className="flex w-full">
          <HomepageLeftHandSide />
          <HomepageRightHandSide />
          <SaveModal />
        </div>
      </Layout>
    </Store.Provider>
  );
}

export default IndexPage;
