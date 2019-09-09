import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InsetBox from "../components/atoms/InsetBox";
import ConnectedLine from "../components/atoms/ConnectedLine";
import TickSvg from "../images/tick.svg";
import GradientBox from "../components/atoms/GradientBox";
import Config from "../components/Config.tsx";
import Info from "../components/Info.tsx";
import SignUpForm from "../components/SignUpForm";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      storeInfo: file(relativePath: { eq: "store-info.png" }) {
        childImageSharp {
          fixed(width: 247) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      storeSuccess: file(relativePath: { eq: "store-success.png" }) {
        childImageSharp {
          fixed(width: 232) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

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

      <div className="flex flex-col items-start items-center px-6">
        <ConnectedLine>
          <InsetBox className="px-4 py-8 mt-10 alias-max-w-index-wide">
            <h2 className="text-white text-2xl text-center font-bold">
              {data.site.siteMetadata.description}
            </h2>
          </InsetBox>
        </ConnectedLine>
        <ul className={"w-full flex flex-col items-center"}>
          <li className="max-w-sm w-full">
            <ConnectedLine className="mt-16">
              <Config />
            </ConnectedLine>
          </li>
          <li className="max-w-sm w-full">
            <ConnectedLine className="mt-16">
              <Info />
            </ConnectedLine>
          </li>
          <ListItem
            content={<Img fixed={data.storeSuccess.childImageSharp.fixed} />}
            text={"You have a store!"}
          ></ListItem>
        </ul>
        <ConnectedLine className="mt-24 alias-max-w-index-wide w-full">
          <div className="alias-rounded-index overflow-hidden">
            <InsetBox className="px-4 sm:px-8 py-3 sm:py-5 text-purple-100">
              <div className="font-bold mb-4">
                <span className="text-2xl">Pay as you go pricing</span>
                <div className="text-sm">
                  Pay nothing until you make a sale.
                </div>
              </div>
              <ul>
                <FeatureItem
                  header="Online store"
                  text="A well presented website to sell your product."
                />
                <FeatureItem
                  header="Payment processing"
                  text="We handle the payments for you, just tell us where to pay you."
                />
                <FeatureItem
                  header="Change templates in one click"
                  text="Change themes if your product changes or it's time for a refresh."
                />
                <FeatureItem
                  header="No branding"
                  text="No one will know that you built a store with us unless you tell them."
                />
              </ul>
            </InsetBox>
            <div className="text-center py-6 text-2xl cta-button">
              Coming soon...
            </div>
          </div>
        </ConnectedLine>
        <div className="mt-24 mb-32 alias-max-w-index-wide w-full">
          <div className="alias-rounded-index overflow-hidden bg-purple-900 text-white font-bold text-xl border-purple-200 p-5 border-2">
            <SignUpForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const ListItem = ({ content, text }) => (
  <li className="max-w-sm w-full">
    <ConnectedLine className="mt-16">
      <GradientBox>
        <div className="flex justify-center w-full">{content}</div>
      </GradientBox>
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
