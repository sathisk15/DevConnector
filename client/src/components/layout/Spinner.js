import React, { Fragment } from "react";
import SpinnerGif from "./Spinner.gif";
const Spinner = () => (
  <Fragment>
    <img
      src={SpinnerGif}
      style={{ width: "100px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;
