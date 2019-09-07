import React from "react";

export default function RadioButton({name}) {
  return (
    <>
      <input type="radio" name={name} id={`${name}-id`} value="me" />
      <label htmlFor={`${name}-id`}></label>
    </>
  );
}
