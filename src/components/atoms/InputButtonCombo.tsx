import React from "react";

interface Props {
  value: string;
  buttonText: string;
  // Callbacks
  onChange: (text: string) => void;
  onButtonClick: () => void;
}

export default function SubmitButton({
  onChange,
  value,
  buttonText,
  onButtonClick
}: Props) {
  return (
    <div className="rounded-sm flex overflow-hidden">
      <input
        type="email"
        placeholder="your email..."
        onChange={e => onChange(e.target.value)}
        value={value}
        className="text-purple-900 font-bold pl-4 py-2 flex-grow min-w-0"
      />
      <button
        className="cta-button px-4 flex-shrink-0"
        onClick={() => onButtonClick()}
      >
        {buttonText}
      </button>
    </div>
  );
}
