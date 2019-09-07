import React from "react";

interface Props {
  name: string;
  value: any;
  className?: string;
}
// TODO: Add some sort of selection animation
export default function RadioButton({ name, value, className }: Props) {
  return (
    <div className={`inline-flex ${className}`}>
      <input type="radio" name={name} id={`${value}-id`} value={value} hidden />
      <label className="radio-button" htmlFor={`${value}-id`}>
        <div className="radio-button-inner"></div>
      </label>
    </div>
  );
}
