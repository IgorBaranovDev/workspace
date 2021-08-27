import React from "react";

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";

// style
import {
  Button,
  Dialog,
  MuiDialogTitle,
  MuiDialogContent,
  MuiDialogActions,
  IconButton,
  CloseIcon,
  Typography,
} from "./components";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}
const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={classes.root}
      {...other}
      style={{ width: "400px" }}
    >
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface IPopUpInfoPlace {
  handleEvent: () => void;
  dataAboutWorkplace: {
    label: string;
    type: string;
    occupant: string;
    startReservation: number;
    endReservation: number;
  };
  visibility: boolean;
}
const PopUpInfoPlace: React.FC<IPopUpInfoPlace> = ({
  handleEvent,
  dataAboutWorkplace,
  visibility,
}) => {
  return (
    <Dialog
      onClose={handleEvent}
      aria-labelledby="customized-dialog-title"
      open={visibility}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleEvent}>
        {dataAboutWorkplace.label}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>Type: {dataAboutWorkplace.type}</Typography>
        <Typography gutterBottom>
          Occupant: {dataAboutWorkplace.occupant}
        </Typography>
        <Typography gutterBottom>
          start: {dataAboutWorkplace.startReservation}
        </Typography>
        <Typography gutterBottom>
          end: {dataAboutWorkplace.endReservation}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleEvent}
          // color="secondary"
          variant="contained"
          color="primary"
        >
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUpInfoPlace;
