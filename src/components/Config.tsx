import React, { useState, FunctionComponent } from "react";
import GradientBox from "./atoms/GradientBox";
import TwoColOverlay, {
  TwoColRow,
  TwoColTitleCell,
  TwoColContentCell
} from "./atoms/TwoColOverlay";
import RadioButton from "./atoms/RadioButton";
import ImageRadioButton from "./atoms/ImageRadioButton";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import SettingsSvg from "../svgs/settings.svg";
import { allVariations } from "./themes/variations";
import { Store } from "./containers/store";
import { PreConfiguredThemes } from "./themes/variations";
import Collapse from "@material-ui/core/Collapse";

const themes = [PreConfiguredThemes.one, PreConfiguredThemes.two];

export default function Config() {
  const [selectedTheme, selectTheme] = useState(null);
  const dispatch = React.useContext(Store.Dispatch);

  const onSelectTheme = newTheme => {
    selectTheme(newTheme);

    if (themes.includes(parseInt(newTheme))) {
      // TODO maybe make theme variations always strings, seems a pain to have to parseInts
      dispatch({ type: "SET_PRESET_THEME", payload: parseInt(newTheme) });
    }
  };

  return (
    <StaticQuery
      query={query}
      render={({ storeMockup }) => {
        const themeRepresentationComponent = {
          [PreConfiguredThemes.one]: () => (
            <Img
              className="rounded-sm"
              draggable={false}
              fixed={storeMockup.childImageSharp.fixed}
            />
          ),
          [PreConfiguredThemes.two]: () => (
            <Img
              className="rounded-sm"
              draggable={false}
              fixed={storeMockup.childImageSharp.fixed}
            />
          )
        };

        return (
          <GradientBox>
            <>
              <div className="px-4 pb-3">
                <h2 className="text-white font-bold text-sm leading-loose">
                  Theme
                </h2>
                <div className="flex -ml-1">
                  {themes.map(theme => (
                    <ImageRadioButton
                      key={theme}
                      name="theme"
                      value={theme}
                      selectedValue={selectedTheme}
                      onSelect={onSelectTheme}
                    >
                      {themeRepresentationComponent[theme]()}
                    </ImageRadioButton>
                  ))}
                  {/* TODO: Add tooltip or title to explain what this section is */}
                  <ImageRadioButton
                    key={"mixAndMatch"}
                    name="theme"
                    value={"mixAndMatch"}
                    selectedValue={selectedTheme}
                    onSelect={selectTheme}
                  >
                    <div className="absolute inset-0 bg-black opacity-25 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <SettingsSvg className="text-white"></SettingsSvg>
                    </div>
                    <Img
                      className="rounded-sm"
                      draggable={false}
                      fixed={storeMockup.childImageSharp.fixed}
                    />
                  </ImageRadioButton>
                </div>
              </div>
              <Collapse in={selectedTheme === "mixAndMatch"}>
                <MixAndMatchOptions></MixAndMatchOptions>
              </Collapse>
            </>
          </GradientBox>
        );
      }}
    />
  );
}

const MixAndMatchOptions: FunctionComponent = () => {
  const dispatch = React.useContext(Store.Dispatch);
  const state = React.useContext(Store.State);

  return (
    <TwoColOverlay>
      {allVariations.map(({ name, key, variations }) => (
        <TwoColRow key={key}>
          <TwoColTitleCell className="align-center">{name}</TwoColTitleCell>
          <TwoColContentCell>
            <>
              {variations.map(variation => (
                <RadioButton
                  key={variation}
                  className="mr-1"
                  name={key}
                  value={variation}
                  checked={state.selectedVariations[key] === variation}
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_VARIATION",
                      payload: { key, variation }
                    })
                  }
                />
              ))}
            </>
          </TwoColContentCell>
        </TwoColRow>
      ))}
    </TwoColOverlay>
  );
};

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
