import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// selectors
import {
  getAuthUser,
  getSelectedFloor,
  getSelectedOffice,
} from "../../../../../redux/selectors";

// actions
import { setReservation } from "../../../../../redux/actions/selectOffice";

// styles
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";

import {
  Button,
  Dialog,
  MuiDialogTitle,
  MuiDialogContent,
  MuiDialogActions,
  IconButton,
  CloseIcon,
  Typography,
  TextField,
} from "./components";

// types
import { PlaceReservation } from "../../../../../services/BD/type";
// import { dateNowFormat } from "../../../../../services/helpers/dateNowFormat";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250,
      "& div.input:hover": {
        cursor: "pointer",
      },
    },
    occupantUser: {
      marginBottom: theme.spacing(2),
    },
  })
);
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
      style={{ textAlign: "center" }}
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
    padding: theme.spacing(3),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface IPopUpInfoPlace {
  handleEventPopUp: () => void;
  dataAboutWorkplace: {
    palceIndex: number;
    label: string;
    type: string;
    occupant: string;
    startReservation: string;
    endReservation: string;
    blocked: boolean;
  };
  visibility: boolean;
}

const PopUpInfoPlace: React.FC<IPopUpInfoPlace> = ({
  handleEventPopUp,
  dataAboutWorkplace,
  visibility,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);
  const selesctedFloor = useSelector(getSelectedFloor);
  const selectedOffice = useSelector(getSelectedOffice);

  const [startBooking, setStartBooking] = useState("");
  const [endBooking, setEndBooking] = useState("");
  const [blockedPlace, setBlockedPlace] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const { occupant, startReservation, endReservation, blocked } =
      dataAboutWorkplace;
    if (occupant && user !== occupant) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    setStartBooking(startReservation);
    setEndBooking(endReservation);
    setBlockedPlace(blocked);
  }, [dataAboutWorkplace, user]);

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "datetime-booking-place-end") {
      setEndBooking(event.target.value);
    } else if (event.target.id === "datetime-booking-place-start") {
      setStartBooking(event.target.value);
    }
    setBlockedPlace(true);
  };

  const handleEventButton = () => {
    const dataPlaceReservation: PlaceReservation = {
      idOffice: selectedOffice.id,
      selectFloor: `${selesctedFloor - 1}`,
      indexPlace: `${dataAboutWorkplace.palceIndex}`,
      start: startBooking,
      end: endBooking,
      blocked: blockedPlace,
      occupant: user,
    };
    dispatch(setReservation(dataPlaceReservation));
  };

  return (
    <>
      <Dialog
        onClose={handleEventPopUp}
        aria-labelledby="customized-dialog-title"
        open={visibility}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleEventPopUp}>
          {dataAboutWorkplace.type} - {dataAboutWorkplace.label}
        </DialogTitle>
        <DialogContent dividers>
          <Typography className={classes.occupantUser}>
            Occupant: {dataAboutWorkplace.occupant}{" "}
          </Typography>
          <form className={classes.container} noValidate>
            <TextField
              disabled={isDisabled}
              id="datetime-booking-place-start"
              label="Start booking"
              type="date"
              defaultValue={startBooking}
              onChange={handlerChange}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              disabled={isDisabled}
              id="datetime-booking-place-end"
              label="End booking"
              type="date"
              defaultValue={endBooking}
              onChange={handlerChange}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={isDisabled}
            onClick={handleEventButton}
            variant="contained"
            color="primary"
          >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopUpInfoPlace;
