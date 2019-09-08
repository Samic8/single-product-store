import React from "react";
import GradientBox from "./atoms/GradientBox";
import TwoColOverlay, { TwoColRow } from "./atoms/TwoColOverlay";
import RadioButton from "./atoms/RadioButton";
import ImageRadioButton from "./atoms/ImageRadioButton";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import SettingsSvg from "../images/settings.svg";

export default function Config() {
  return (
    <StaticQuery
      query={query}
      render={({ storeMockup }) => (
        <GradientBox
          content={
            <>
              <div className="px-4 pb-3">
                <h2 className="text-white font-bold text-sm leading-loose">
                  Theme
                </h2>
                <div className="flex justify-between -ml-1">
                  <ImageRadioButton name="theme" value="one">
                    <Img
                      className="rounded-sm"
                      draggable={false}
                      fixed={storeMockup.childImageSharp.fixed}
                    />
                  </ImageRadioButton>
                  <ImageRadioButton name="theme" value="two">
                    <Img
                      className="rounded-sm"
                      draggable={false}
                      fixed={storeMockup.childImageSharp.fixed}
                    />
                  </ImageRadioButton>
                  <ImageRadioButton name="theme" value="three">
                    <Img
                      className="rounded-sm"
                      draggable={false}
                      fixed={storeMockup.childImageSharp.fixed}
                    />
                  </ImageRadioButton>
                  <ImageRadioButton name="theme" value="four">
                    <div className="absolute inset-0 bg-black opacity-25 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <SettingsSvg></SettingsSvg>
                    </div>
                    <Img
                      className="rounded-sm"
                      draggable={false}
                      fixed={storeMockup.childImageSharp.fixed}
                    />
                  </ImageRadioButton>
                </div>
              </div>
              <TwoColOverlay>
                <TwoColRow title="" content={<></>} />
                <TwoColRow
                  title="Background"
                  content={
                    <>
                      <RadioButton
                        className="mr-1"
                        name={"background"}
                        value={"background-1"}
                      />
                      <RadioButton
                        className="mr-1"
                        name={"background"}
                        value={"background-2"}
                      />
                      <RadioButton
                        className="mr-1"
                        name={"background"}
                        value={"background-3"}
                      />
                    </>
                  }
                />
                <TwoColRow
                  title="Header"
                  content={
                    <>
                      <RadioButton
                        className="mr-1"
                        name={"header"}
                        value={"header-1"}
                      />
                      <RadioButton
                        className="mr-1"
                        name={"header"}
                        value={"header-2"}
                      />
                      <RadioButton
                        className="mr-1"
                        name={"header"}
                        value={"header-3"}
                      />
                    </>
                  }
                />
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
