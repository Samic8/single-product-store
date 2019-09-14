import React from "react";
import GradientBox from "./atoms/GradientBox";
import TwoColOverlay, { TwoColRow } from "./atoms/TwoColOverlay";
import TextField from "@material-ui/core/TextField";
import Popover from "@material-ui/core/Popover";
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
                  onClick={handleClick}
                  disabled={true}
                />
                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                >
                  <div className="p-2">
                    Digital product stores are coming soon
                  </div>
                </Popover>
              </>
            }
          />
          <TwoColRow
            title={"Price"}
            content={
              <>
                <TextField className="flex-1" placeholder="$49" />
              </>
            }
          />
          <TwoColRow
            title={"Description"}
            content={
              <>
                <TextField
                  multiline
                  className="flex-1"
                  placeholder="A tea set both designed and ..."
                />
              </>
            }
          />
          <TwoColRow title={""} content={<></>} />
        </TwoColOverlay>
      </GradientBox>
    </ThemeProvider>
  );
}
