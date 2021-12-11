import React from "react";
import { Button } from "@mui/material";
//prop types
interface Props {
  btnText: String;
  btnControl: Function;
}
const CustomButton: React.FC<Props> = ({ btnText, btnControl }) => {
  return (
    <div>
      <Button variant="outlined" onClick={btnControl()}>
        {btnText}
      </Button>
    </div>
  );
};

export default CustomButton;
