import React from "react";

import Modal from "@material-ui/core/Modal";
import { Store } from "../../containers/store";

function IndexPage() {
  const { isSaveModalOpen } = React.useContext(Store.State);
  const dispatch = React.useContext(Store.Dispatch);

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isSaveModalOpen}
    >
      <>
        <div className="bg-red-300 h-screen">
          <button
            onClick={() =>
              dispatch({ type: "TOGGLE_SAVE_MODAL", payload: false })
            }
          >
            CLOSE
          </button>
        </div>
      </>
    </Modal>
  );
}

export default IndexPage;
