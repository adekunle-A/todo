import React from "react";
import Checkbox from "@mui/material/Checkbox";

//props type
interface Props {
  completed: boolean;
  checkControl: Function;
}

const CheckBox: React.FC<Props> = ({ completed, checkControl }) => {
  return (
    <>
      <Checkbox
        checked={completed}
        onChange={(id) => checkControl(id)}
        inputProps={{ "aria-label": "controlled" }}
      />
    </>
  );
};

export default CheckBox;
