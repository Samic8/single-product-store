import React from "react";
import GradientBox from "./atoms/GradientBox";
import TwoColOverlay, { TwoColRow } from "./atoms/TwoColOverlay";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/styles";
import RadioButton from "./atoms/RadioButton";
import "./Info.css";

interface Props {}

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff"
    }
  }
});

export default function Info(): Props {
  return (
    <ThemeProvider theme={theme}>
      <GradientBox>
        <TwoColOverlay>
          <TwoColRow
            title={
              <h2 className="text-white font-bold text-sm leading-loose">
                Info
              </h2>
            }
            content={<></>}
          />
          <TwoColRow
            title={"Product"}
            content={
              <TextField className="flex-1" placeholder="Handmade tea set" />
            }
          />
          <TwoColRow
            title={"Type"}
            content={
              <>
                <RadioButton name="type" value="physical" label="Physical" />
                {/* TODO: Add coming soon tooltip? What about mobile? */}
                <RadioButton
                  className="ml-3"
                  name="type"
                  value="digital"
                  label="Digital"
                  disabled={true}
                />
              </>
            }
          />
          <TwoColRow title={"Price"} content={<></>} />
          <TwoColRow title={"Description"} content={<></>} />
        </TwoColOverlay>
      </GradientBox>
    </ThemeProvider>
  );
}
