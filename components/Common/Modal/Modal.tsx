import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { ModalProps, IntentionsEnum } from './Modal.types';

export const Modal = (props: ModalProps) => {

  const handleAgree = () => {
      if (IntentionsEnum.Remove && props?.onRemoveExercise) {
        props.onModalClose();
        props.onRemoveExercise();
      }
  };

  const handleClose = () => {
    props.onModalClose();
  };

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleAgree}>
            Agree
          </Button>
          <Button onClick={handleClose}>Disagree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
