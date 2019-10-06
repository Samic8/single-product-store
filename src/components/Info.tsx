import React from "react";
import GradientBox from "./atoms/GradientBox";
import TwoColOverlay, {
  TwoColRow,
  TwoColTitleCell,
  TwoColContentCell
} from "./atoms/TwoColOverlay";
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

const InfoTitleCell = ({ children, ...props }) => (
  <TwoColTitleCell className="align-top pt-2" {...props}>
    {children}
  </TwoColTitleCell>
);

const InfoContentCell = ({ children, ...props }) => (
  <TwoColContentCell className="align-top py-2 px-4" {...props}>
    {children}
  </TwoColContentCell>
);

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
          <TwoColRow>
            <TwoColTitleCell>
              <h2 className="text-white font-bold text-sm leading-loose">
                Info
              </h2>
            </TwoColTitleCell>
          </TwoColRow>
          <TwoColRow>
            <InfoTitleCell>Store Name</InfoTitleCell>
            <InfoContentCell>
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
            </InfoContentCell>
          </TwoColRow>
          <TwoColRow>
            <InfoTitleCell>Product</InfoTitleCell>
            <InfoContentCell>
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
            </InfoContentCell>
          </TwoColRow>
          <TwoColRow>
            <InfoTitleCell>Type</InfoTitleCell>
            <InfoContentCell>
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
            </InfoContentCell>
          </TwoColRow>
          <TwoColRow>
            <InfoTitleCell>Price</InfoTitleCell>
            <InfoContentCell>
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
            </InfoContentCell>
          </TwoColRow>
          <TwoColRow>
            <InfoTitleCell>Description</InfoTitleCell>
            <InfoContentCell>
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
            </InfoContentCell>
          </TwoColRow>
          <TwoColRow>
            <InfoTitleCell>Image</InfoTitleCell>
            <InfoContentCell>
              <ImageUploader
                onImageUpload={({ previewUrl, binaryString }) => {
                  dispatch({
                    type: "UPDATE_STORE_INFO",
                    payload: { image: { previewUrl, binaryString } }
                  });
                }}
              />
            </InfoContentCell>
          </TwoColRow>
        </TwoColOverlay>
      </GradientBox>
    </ThemeProvider>
  );
}
