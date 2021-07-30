import styled from "styled-components";
import { colors } from "../../Constants/Colors";

export const CatchButtonElementStyled = styled.div`
  background-color: ${(props) =>
    props.isDisabled ? colors.white : colors.red};
  color: ${(props) => (props.isDisabled ? colors.red : colors.white)};
  border: 2px solid ${(props) => (props.isDisabled ? colors.red : colors.white)};
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isDisabled ? 0.2 : 1)};

  padding: 8px 16px;
  border-radius: 8px;
  user-select: none;

  font-weight: 600;
  outline: none;

  transition-duration: 500ms;
  width: 80%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CatchButtonContainerStyled = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
`;
