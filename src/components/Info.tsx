import React from "react";
import GradientBox from "./atoms/GradientBox";
import TwoColOverlay, { TwoColRow } from "./atoms/TwoColOverlay";
import TextField from "@material-ui/core/TextField";
import Popover from "@material-ui/core/Popover";
import { ThemeProvider } from "@material-ui/styles";
import RadioButton from "./atoms/RadioButton";
import "./Info.css";
import { Store } from "./containers/store";
import { storeInfoPlaceholder } from "../components/themes/info";
import ImageUploader from "./atoms/ImageUploader";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff"
    }
  }
});

export default function Info() {
  const dispatch = React.useContext(Store.Dispatch);
  const state = React.useContext(Store.State);
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

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
            title={"Store Name"}
            content={
              <TextField
                className="flex-1"
                placeholder={storeInfoPlaceholder.storeName}
                value={state.storeInfo.storeName}
                onChange={e =>
                  dispatch({
                    type: "UPDATE_STORE_INFO",
                    payload: { storeName: e.target.value }
                  })
                }
              />
            }
          />
          <TwoColRow
            title={"Product"}
            content={
              <TextField
                className="flex-1"
                placeholder={storeInfoPlaceholder.productName}
                value={state.storeInfo.productName}
                onChange={e =>
                  dispatch({
                    type: "UPDATE_STORE_INFO",
                    payload: { productName: e.target.value }
                  })
                }
              />
            }
          />
          <TwoColRow
            title={"Type"}
            content={
              <>
                <RadioButton
                  name="type"
                  value={"physical"}
                  checked={state.storeInfo.type === "physical"}
                  label="Physical"
                  onClick={value =>
                    dispatch({
                      type: "UPDATE_STORE_INFO",
                      payload: { type: value }
                    })
                  }
                />
                <RadioButton
                  className="ml-3"
                  name="type"
                  value={"digital"}
                  checked={state.storeInfo.type === "digital"}
                  onClick={value =>
                    dispatch({
                      type: "UPDATE_STORE_INFO",
                      payload: { type: value }
                    })
                  }
                  label="Digital"
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
                <TextField
                  className="flex-1"
                  placeholder={storeInfoPlaceholder.price}
                  value={state.storeInfo.price}
                  onChange={e =>
                    dispatch({
                      type: "UPDATE_STORE_INFO",
                      payload: { price: e.target.value }
                    })
                  }
                />
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
                  placeholder={storeInfoPlaceholder.description}
                  value={state.storeInfo.description}
                  onChange={e =>
                    dispatch({
                      type: "UPDATE_STORE_INFO",
                      payload: { description: e.target.value }
                    })
                  }
                />
              </>
            }
          />
          <TwoColRow
            title={"Image"}
            content={
              <ImageUploader
                onImageUpload={({ previewUrl }) => {
                  dispatch({
                    type: "UPDATE_STORE_INFO",
                    payload: { image: { previewUrl } }
                  });
                }}
              />
            }
          />
          <TwoColRow title={""} content={<></>} />
        </TwoColOverlay>
      </GradientBox>
    </ThemeProvider>
  );
}
