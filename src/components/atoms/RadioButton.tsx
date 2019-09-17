import React from "react";
import { getActiveClasses } from "../../utility/active-classes";

interface Props {
  name: string;
  value: any;
  checked?: boolean;
  className?: string;
  label?: string;
  disabled?: boolean;
  onClick?: (a: Event) => void;
}
// TODO: Add some sort of selection animation
export default function RadioButton({
  name,
  value,
  className,
  label,
  checked,
  disabled,
  onClick
}: Props) {
  const id = `${value}-${name}-id`;

  return (
    <div className={`inline-flex items-center ${className}`}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={() => onClick()}
        checked={checked}
        hidden
        disabled={disabled}
      />
      <label
        className={getActiveClasses({
          "radio-button": true,
          "radio-button-disabled": disabled
        })}
        htmlFor={id}
      >
        <div className={"radio-button-inner"}></div>
      </label>
      {label && (
        <span
          className={getActiveClasses({
            "ml-1 text-white": true,
            "cursor-pointer": !disabled
          })}
        >
          {label}
        </span>
      )}
    </div>
  );
}
