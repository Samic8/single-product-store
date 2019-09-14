import React from "react";

interface Props {
  value: string;
  buttonText: string;
  // Callbacks
  onChange: (text: string) => void;
  onConfirm: () => void;
}

export default function SubmitButton({
  onChange,
  value,
  buttonText,
  onConfirm
}: Props) {
  const handleSubmit = e => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <form className="rounded-sm flex overflow-hidden" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="your email..."
        onChange={e => onChange(e.target.value)}
        value={value}
        className="text-purple-900 font-bold pl-4 py-2 flex-grow min-w-0"
      />
      {/* TODO: Add loading and success state for button */}
      <button className="cta-button px-4 flex-shrink-0" type="submit">
        {buttonText}
      </button>
    </form>
  );
}
