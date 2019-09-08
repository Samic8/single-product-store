import React, { FunctionComponent } from "react";

interface Props {
  name: string;
  value: any;
  className?: string;
}

const ImageRadioButton: FunctionComponent<Props> = ({
  name,
  value,
  className,
  children
}) => {
  return (
    <div className={`inline-flex ${className}`}>
      <input type="radio" name={name} id={`${value}-id`} value={value} hidden />
      <label className="image-radio-button" htmlFor={`${value}-id`}>
        <div className="image-radio-button-inner">
          <div className="image-radio-button-overlay"></div>
          {children}
        </div>
      </label>
    </div>
  );
};

export default ImageRadioButton;
