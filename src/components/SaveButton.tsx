import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import SaveModal from "../components/layout/SaveModal";
import SaveSvg from "../svgs/save.svg";
import { Store } from "../components/containers/store";


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
  const { isSaveModalOpen } = React.useContext(Store.State);
  const [updateUser, { loading, error, data }] = useMutation(UPDATE_USER_MUTATION)

  // TODO do graphql things

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <button
        className="py-2"
        aria-haspopup="true"
        onClick={() => dispatch({ type: "TOGGLE_SAVE_MODAL", payload: true })}
      >
        <SaveSvg />
        <div className="text-sm text-gray-200 font-bold text-center">Save</div>
      </button>
      {isSaveModalOpen && (
        <SaveModal
          onEmailConfirm={(email) => {
            const {decoration, ...config} = { // TODO add decoration to schema.
              ...state.selectedVariations,
              ...state.storeInfo
            }
            updateUser({variables: {
              email,
              config
            }})
            dispatch({ type: "TOGGLE_SAVE_MODAL", payload: false });
            // TODO save graphql mutation
          }}
        />
      )}
    </>
  );
}
