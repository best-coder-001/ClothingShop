import {
  Dialog as MDDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from "@mui/material";

const Dialog = ({
  open,
  title,
  msg,
  handleClose,
}: {
  open: boolean;
  title: string;
  msg: string;
  handleClose: any;
}) => {
  return (
    <MDDialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {msg}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          autoFocus
        >
          OK
        </Button>
      </DialogActions>
    </MDDialog>
  );
};

export default Dialog;
