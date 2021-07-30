import { useState } from "react";
import { Dialog, TextInput, toaster } from "evergreen-ui";
import { DialogContainerStyled } from "./NicknameDialog.styles";
import { PStyled } from "../../Constants/Typography.styles";

const NicknameDialog = ({
  isShown,
  onConfirm,
  onCloseComplete,
  pokemonName,
}) => {
  const [nicknameBuf, setNicknameBuf] = useState("");

  const handleConfirm = () => {
    if (nicknameBuf.length === 0) {
      toaster.danger("Name cannot be empty");
      return;
    }
    onConfirm(nicknameBuf);
  };

  return (
    <Dialog
      isShown={isShown}
      title={`${pokemonName} was caught!`}
      onCloseComplete={onCloseComplete}
      onConfirm={handleConfirm}
      confirmLabel="Add to Bag"
    >
      <DialogContainerStyled>
        <PStyled>{pokemonName}'s nickname?</PStyled>
        <TextInput
          onChange={(e) => setNicknameBuf(e.target.value)}
          value={nicknameBuf}
          maxlength={16}
        />
      </DialogContainerStyled>
    </Dialog>
  );
};

export default NicknameDialog;
