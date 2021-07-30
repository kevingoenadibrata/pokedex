import { Spinner } from "evergreen-ui";
import { Type, TypeGroupContainer } from "./TypeGroup.styles";

const TypeGroup = ({ types, size }) => {
  if (!types)
    return (
      <TypeGroupContainer>
        <Type size={size} type="unknown">
          UNKNOWN
        </Type>
      </TypeGroupContainer>
    );

  return (
    <TypeGroupContainer>
      {types[0] && (
        <Type size={size} type={types[0].type.name}>
          {types[0].type.name.toUpperCase()}
        </Type>
      )}
      {types[1] && (
        <Type size={size} type={types[1].type.name}>
          {types[1].type.name.toUpperCase()}
        </Type>
      )}
    </TypeGroupContainer>
  );
};

export default TypeGroup;
