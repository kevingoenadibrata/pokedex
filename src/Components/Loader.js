import { BarLoader } from "react-spinners";
import { LoaderContainerStyled } from "./Loader.styles";

const Loader = () => {
  return (
    <LoaderContainerStyled>
      <BarLoader />
    </LoaderContainerStyled>
  );
};

export default Loader;
