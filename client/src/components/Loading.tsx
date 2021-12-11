import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <CircularProgress color="success" />
    </div>
  );
};

export default Loading;
