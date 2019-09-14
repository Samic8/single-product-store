import React, { FunctionComponent } from "react";

interface Props {
  name: string;
  value: any;
  className?: string;
  selectedValue: string;
  onSelect: (a: string) => void;
}

const ImageRadioButton: FunctionComponent<Props> = ({
  name,
  value,
  className,
  children,
  selectedValue,
  onSelect
}) => {
  return (
    <div className={`inline-flex ${className}`}>
      <input
        type="radio"
        name={name}
        id={`${value}-id`}
        value={value}
        onChange={e => onSelect(e.target.value)}
        checked={selectedValue === value}
        hidden
      />
      <label className="image-radio-button" htmlFor={`${value}-id`}>
        <div className="image-radio-button-inner">{children}</div>
      </label>
    </div>
  );
};

export default ImageRadioButton;
