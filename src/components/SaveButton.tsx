import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import SaveModal from "../components/layout/SaveModal";
import SaveSvg from "../images/save.svg";
import { Store } from "../components/containers/store";
import { getActiveClasses } from "../utility/active-classes";


const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $email: String!
    $config: Config!
  ) {
    UpdateUserConfig(email: $email, config: $config)
  }
`;

// TODO add cmd+s and ctrl+s keyboard shortcuts for saving

interface Props {}

export default function SaveButton({  }: Props) {
  const dispatch = React.useContext(Store.Dispatch);
  const state = React.useContext(Store.State);
  const { isSaveModalOpen, email, hasUnsavedChanges } = React.useContext(Store.State);
  const [hitUserMutation, { loading, error, data }] = useMutation(UPDATE_USER_MUTATION)

  const updateUser = () => {
    hitUserMutation({variables: {
      email,
      config: {
        ...state.selectedVariations,
        ...state.storeInfo
      }
    }})
  }

  // TODO do graphql things

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <button
        className="py-2"
        aria-haspopup="true"
        onClick={() => {
          if(!email) {
            dispatch({ type: "TOGGLE_SAVE_MODAL", payload: true })
          } else {
            updateUser()
            dispatch({ type: "UPDATE_SAVED_CHANGES_FLAG", payload: null })
          }
        }}
      >
        {/* TODO add proper styling to this *, do we even want a *? */}
        <span className={getActiveClasses({
          'text-white float-right': true,
          'opacity-0': !hasUnsavedChanges,
        })}>*</span>
        {/* Add an actual spinner */}
        <span className={getActiveClasses({
          'text-white float-right': true,
          'opacity-0': !loading,
        })}>spinner</span>
        <SaveSvg />
        <div className="text-sm text-gray-200 font-bold text-center">Save</div>
      </button>
      {isSaveModalOpen && (
        <SaveModal
          onEmailConfirm={(email) => {
            updateUser()
            dispatch({ type: "TOGGLE_SAVE_MODAL", payload: false });
          }}
        />
      )}
    </>
  );
}
