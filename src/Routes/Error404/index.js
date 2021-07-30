import { Error404ContainerStyled, Error404ImageStyled } from "./index.styles";
import Error404Img from "../../Assets/404.png";

const Error404 = () => {
  return (
    <Error404ContainerStyled>
      <Error404ImageStyled src={Error404Img} alt="404" />
    </Error404ContainerStyled>
  );
};

export default Error404;
