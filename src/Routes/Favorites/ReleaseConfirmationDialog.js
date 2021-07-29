import React, { useState } from "react";
import { Dialog, TextInput } from "evergreen-ui";

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
      <div>
        <p>Are you sure you want to release {pokemonNickname} ?</p>
      </div>
    </Dialog>
  );
};

export default ReleaseConfirmationDialog;
