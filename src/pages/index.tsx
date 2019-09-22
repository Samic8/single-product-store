import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HomepageLeftHandSide from "../components/layout/HomepageLeftHandSide";
import HomepageRightHandSide from "../components/layout/HomepageRightHandSide";
import { Store } from "../components/containers/store";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://d0ttz70vr6.execute-api.us-east-1.amazonaws.com/dev/graphql"
});

function IndexPage() {
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
          <div className="flex w-full">
            <HomepageLeftHandSide />
            <HomepageRightHandSide />
          </div>
        </Layout>
      </Store.Provider>
    </ApolloProvider>
  );
}

export default IndexPage;
