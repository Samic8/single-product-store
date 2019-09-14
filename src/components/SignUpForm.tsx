import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import TickSvg from "../images/tick.svg";
import SubmitButton from "./atoms/EmailForm";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);

  const handleSubmit = async e => {
    if (!email) return;
    const result = await addToMailchimp(email);
    setSuccess(result.result === "success");
  };

  return (
    <>
      <span>Get notified when single product store is available.</span>
      <div className="w-full mt-4">
        {(!success && (
          <SubmitButton
            onChange={setEmail}
            value={email}
            buttonText={"Submit"}
            onConfirm={handleSubmit}
          />
        )) || (
          <div className="flex items-center">
            <TickSvg className={"h-6 w-6 mr-2 flex-shrink-0"} />
            Thanks! We will be in touch.
          </div>
        )}
      </div>
    </>
  );
}
