import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

import Layout from "../components/layout";
import MainContent from "../components/containers/MainContent";
import SEO from "../components/seo";
import { Store } from "../components/containers/store";

const uri = process.env.GATSBY_PROD_GRAPHQL || "https://d0ttz70vr6.execute-api.us-east-1.amazonaws.com/dev/graphql"
const client = new ApolloClient({
  fetch,
  uri,
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
          <MainContent />
        </Layout>
      </Store.Provider>
    </ApolloProvider>
  );
}

export default IndexPage;
