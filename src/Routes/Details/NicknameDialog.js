import React, { useState } from "react";
import { Dialog, TextInput } from "evergreen-ui";

const NicknameDialog = ({
  isShown,
  onConfirm,
  onCloseComplete,
  pokemonName,
}) => {
  const [nicknameBuf, setNicknameBuf] = useState("");
  return (
    <Dialog
      isShown={isShown}
      title={`${pokemonName} was caught!`}
      onCloseComplete={onCloseComplete}
      onConfirm={() => onConfirm(nicknameBuf)}
      confirmLabel="Add to Bag"
    >
      {pokemonName}'s nickname?
      <TextInput
        onChange={(e) => setNicknameBuf(e.target.value)}
        value={nicknameBuf}
        maxlength={16}
      />
    </Dialog>
  );
};

export default NicknameDialog;
