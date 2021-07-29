import React from "react";
import { ElementContainerCss } from "./DetailsElement.styles";

const DetailsElement = ({ title, value }) => {
  if (value === "N/A") {
    return null;
  }
  return (
    <ElementContainerCss>
      <h3>{title}</h3>
      <p>{value}</p>
    </ElementContainerCss>
  );
};

export default DetailsElement;
