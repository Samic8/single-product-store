import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface Props {
  name: string;
  value: any;
  checked?: boolean;
  className?: string;
  label?: string;
  disabled?: boolean;
  onClick?: (a: string) => void;
}

const PurpleRadio = withStyles({
  root: {
    color: "#9B8FBC",
    "&$checked": {
      color: "#C0BCCE"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

// TODO: Animation seems to be stop abruptly and goes to the finished state on click.
export default function RadioButton({
  name,
  value,
  label,
  checked,
  disabled,
  onClick
}: Props) {
  const id = `${value}-${name}-id`;

  return (
    <>
      {!label && <StyledRadio />}
      {label && (
        <FormControlLabel
          value={value}
          className="text-white"
          control={<StyledRadio />}
          label={label}
        />
      )}
    </>
  );

  function StyledRadio() {
    return (
      <PurpleRadio
        id={id}
        checked={checked}
        onClick={e => {
          onClick(e.target.value);
        }}
        value={`${value}`}
        name={name}
        color="primary"
        disabled={disabled}
        inputProps={{ "aria-label": `Variation ${value}` }}
      />
    );
  }
}
