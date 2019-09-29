import React from "react";
import SaveModal from "../components/layout/SaveModal";
import SaveSvg from "../images/save.svg";
import { Store } from "../components/containers/store";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const EXCHANGE_RATES = gql`
  query {
    ok
  }
`;

// TODO add cmd+s and ctrl+s keyboard shortcuts for saving

interface Props {}

export default function SaveButton({  }: Props) {
  const dispatch = React.useContext(Store.Dispatch);
  const { isSaveModalOpen } = React.useContext(Store.State);

  // TODO do graphql things
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);

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
          onEmailConfirm={() => {
            dispatch({ type: "TOGGLE_SAVE_MODAL", payload: false });
            // TODO save graphql mutation
          }}
        />
      )}
    </>
  );
}