import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import SaveModal from "../components/layout/SaveModal";
import SaveSvg from "../svgs/save.svg";
import SmallSaveSvg from "../svgs/save-small.svg";
import { Store } from "../components/containers/store";
import { getActiveClasses } from "../utility/active-classes";
import CircularProgress from "@material-ui/core/CircularProgress";

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($email: String!, $config: Config!) {
    UpdateUserConfig(email: $email, config: $config)
  }
`;

// TODO add cmd+s and ctrl+s keyboard shortcuts for saving

interface Props {
  saveIconSize: "small" | "large";
}

export default function SaveButton({ saveIconSize = "large" }: Props) {
  const dispatch = React.useContext(Store.Dispatch);
  const state = React.useContext(Store.State);
  const { isSaveModalOpen, email, hasUnsavedChanges } = React.useContext(
    Store.State
  );
  const [hitUserMutation, { loading, error, data }] = useMutation(
    UPDATE_USER_MUTATION
  );

  const updateUser = () => {
    hitUserMutation({
      variables: {
        email,
        config: {
          ...state.selectedVariations,
          ...state.storeInfo
        }
      }
    });
  };

  // TODO do graphql things

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <button
        className="py-2 flex flex-col items-center relative"
        aria-haspopup="true"
        onClick={() => {
          if (!email) {
            dispatch({ type: "TOGGLE_SAVE_MODAL", payload: true });
          } else {
            updateUser();
            dispatch({ type: "UPDATE_SAVED_CHANGES_FLAG", payload: null});
          }
        }}
      >
        {/* TODO add proper styling to this *, do we even want a *? */}
        <span
          className={getActiveClasses({
            "text-white absolute bg-orange-400 rounded-full w-3 h-3": true,
            hidden: !hasUnsavedChanges && !loading
          })}
          style={{ top: "8px", right: "1px" }}
        ></span>
        {loading && (
          <CircularProgress
            size={16}
            color="inherit"
            thickness={10}
            className="absolute w-3 h-3 text-orange-400"
            style={{ top: "5px", right: "-1px" }}
          />
        )}
        {saveIconSize === "large" && <SaveSvg />}
        {saveIconSize === "small" && <SmallSaveSvg />}
        <div className="text-sm text-gray-200 font-bold text-center">Save</div>
      </button>
      {isSaveModalOpen && (
        <SaveModal
          onEmailConfirm={email => {
            updateUser();
            dispatch({ type: "TOGGLE_SAVE_MODAL", payload: false });
          }}
        />
      )}
    </>
  );
}
