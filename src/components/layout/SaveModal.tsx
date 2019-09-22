import React from "react";

import Modal from "@material-ui/core/Modal";
import { Store } from "../../components/containers/store";
import CrossSvg from "../../images/cross.svg";
import EmailForm from "../atoms/EmailForm";

interface Props {
  onEmailConfirm: (email: string) => void;
}

function SaveModal({ onEmailConfirm }: Props) {
  const dispatch = React.useContext(Store.Dispatch);
  const [email, setEmail] = React.useState("");

  const hideModal = () =>
    dispatch({ type: "TOGGLE_SAVE_MODAL", payload: false });

  return (
    <Modal
      aria-describedby="save-modal-description"
      open={true}
      onClose={() => hideModal()}
    >
      <>
        <div className="h-screen bg-purple-900">
          <div className="flex justify-end py-3 px-5">
            <button aria-label="Close" onClick={() => hideModal()}>
              <CrossSvg className="text-gray-500" />
            </button>
          </div>
          <div>
            <p
              id="save-modal-description"
              className="text-white text-center font-bold text-2xl max-w-lg leading-tight mx-auto"
            >
              Save your configuration and get notified when single product store
              is available.
            </p>
            <div className="max-w-md mx-auto mt-8">
              <EmailForm
                value={email}
                onChange={newEmail => setEmail(newEmail)}
                onConfirm={() => {
                  dispatch({ type: "UPDATE_EMAIL", payload: email });
                  onEmailConfirm(email);
                }}
                buttonText={"Save"}
              />
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
}

export default SaveModal;
