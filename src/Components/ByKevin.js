import React from "react";
import { HeartIcon, Link, Text } from "evergreen-ui";
import { ByKevinContainer } from "./ByKevin.styles";
const ByKevin = () => {
  return (
    <ByKevinContainer>
      <Text>made with </Text>
      <HeartIcon size={16} marginX={4} />
      <Text> by </Text>
      <Link marginLeft={4} href="https://kevingo.me" target="_blank">
        kevingo
      </Link>
    </ByKevinContainer>
  );
};

export default ByKevin;
