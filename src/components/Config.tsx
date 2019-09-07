import React from "react";
import GradientBox from "./atoms/GradientBox";
import TwoColOverlay, { TwoColRow } from "./atoms/TwoColOverlay";
import RadioButton from './atoms/RadioButton'
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

export default function Config() {
  return (
    <StaticQuery
      query={query}
      render={({storeMockup}) => (
        <GradientBox
          content={
            <>
              <div className="px-4 pb-4">
                <h2 className="text-white font-bold text-sm leading-loose">
                  Theme
                </h2>
                <div className="flex justify-between">
                  <Img
                    className="rounded-sm"
                    fixed={storeMockup.childImageSharp.fixed}
                  />
                  <Img
                    className="rounded-sm"
                    fixed={storeMockup.childImageSharp.fixed}
                  />
                  <Img
                    className="rounded-sm"
                    fixed={storeMockup.childImageSharp.fixed}
                  />
                  <Img
                    className="rounded-sm"
                    fixed={storeMockup.childImageSharp.fixed}
                  />
                </div>
              </div>
              <TwoColOverlay>
                <TwoColRow title="background" content={<RadioButton />} />
              </TwoColOverlay>
            </>
          }
          text={<span></span>}
        ></GradientBox>
      )}
    />
  );
}

const query = graphql`
  query ConfigQuery {
    storeMockup: file(relativePath: { eq: "store-mockup.png" }) {
      childImageSharp {
        fixed(width: 67) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
