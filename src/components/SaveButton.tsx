import React from "react";
import { useMutation } from "@apollo/react-hooks";

import SaveModal from "../components/layout/SaveModal";
import {NotificationDot} from '../components/atoms/NotificationDot'
import SaveSvg from "../svgs/save.svg";
import SmallSaveSvg from "../svgs/save-small.svg";
import { Store } from "../components/containers/store";
import { getActiveClasses } from "../utility/active-classes";
import CircularProgress from "@material-ui/core/CircularProgress";
import { UPDATE_USER_MUTATION } from "../queries/mutations";

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

  const updateUser = ProvidedEmail => {
    const { imageId, ...storeInfo } = state.storeInfo;
    const cloudinaryPublicId = imageId;
    hitUserMutation({
      variables: {
        email: ProvidedEmail || email,
        config: {
          ...state.selectedVariations,
          ...storeInfo,
          cloudinaryPublicId
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
            dispatch({ type: "UPDATE_SAVED_CHANGES_FLAG", payload: null });
            updateUser(null);
          }
        }}
      >
        <NotificationDot 
          style={{ top: "0px", right: "-2px" }}
          shouldHide={!hasUnsavedChanges && !loading}
          isLoading={loading}
        />
        {saveIconSize === "large" && <SaveSvg />}
        {saveIconSize === "small" && (
          <SmallSaveSvg style={{ marginBottom: "2px" }} />
        )}
        <div className="text-sm text-gray-200 font-bold text-center">Save</div>
      </button>
      {isSaveModalOpen && (
        <SaveModal
          onEmailConfirm={email => {
            updateUser(email);
            dispatch({ type: "TOGGLE_SAVE_MODAL", payload: false });
          }}
        />
      )}
    </>
  );
}
