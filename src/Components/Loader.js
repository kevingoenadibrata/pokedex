import React from "react";
import { BarLoader } from "react-spinners";
import { LoaderContainerCss } from "./Loader.styles";

const Loader = () => {
  return (
    <LoaderContainerCss>
      <BarLoader color="white" />
    </LoaderContainerCss>
  );
};

export default Loader;
