import { Dialog } from "evergreen-ui";
import { PStyled } from "../../Constants/Typography.styles";

const ReleaseConfirmationDialog = ({
  isShown,
  onConfirm,
  onCloseComplete,
  pokemonNickname,
}) => {
  return (
    <Dialog
      isShown={isShown}
      title={`${pokemonNickname} is sad`}
      onCloseComplete={onCloseComplete}
      onConfirm={onConfirm}
      confirmLabel="Release"
      intent="danger"
    >
      <PStyled>Are you sure you want to release {pokemonNickname}?</PStyled>
    </Dialog>
  );
};

export default ReleaseConfirmationDialog;
