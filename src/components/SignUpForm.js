import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import TickSvg from "../images/tick.svg";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!email) return;
    const result = await addToMailchimp(email);
    setSuccess(result.result === "success");
  };

  return (
    <>
      <span>Get notified when single product store is available.</span>
      <form
        className="w-full mt-4 rounded-sm flex overflow-hidden"
        onSubmit={handleSubmit}
      >
        {(!success && (
          <>
            <input
              type="email"
              placeholder="your email..."
              onChange={e => setEmail(e.target.value)}
              value={email}
              className="text-purple-900 font-bold pl-4 py-2 flex-grow min-w-0"
            />
            <button className="cta-button px-4 flex-shrink-0" type="submit">
              Submit
            </button>
          </>
        )) || (
          <div className="flex items-center">
            <TickSvg className={"h-6 w-6 mr-2 flex-shrink-0"} />
            Thanks! We will be in touch.
          </div>
        )}
      </form>
    </>
  );
}
