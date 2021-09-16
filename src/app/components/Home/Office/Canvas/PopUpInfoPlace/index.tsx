import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// date-fn
import DateFnsUtils from "@date-io/date-fns";
import format from "date-fns/format";

// material-ui
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";

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
} from "./components";

// types
import { InfoAboutWorkplace } from "../type/InfoAboutWorkplace";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

// utils fn
import { clearBooking } from "../../../../../services/utils/clearBooking";

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
      {onClose && (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
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
    justifyContent: "space-around",
  },
}))(MuiDialogActions);

interface IPopUpInfoPlace {
  handleEventPopUp: () => void;
  dataAboutWorkplace: null | InfoAboutWorkplace;
}

type DataSelectedWorkplace = InfoAboutWorkplace & {
  idOffice: string;
  selectFloor: string;
};

const PopUpInfoPlace: React.FC<IPopUpInfoPlace> = ({
  handleEventPopUp,
  dataAboutWorkplace,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);
  const selesctedFloor = useSelector(getSelectedFloor);
  const selectedOffice = useSelector(getSelectedOffice);
  const [endDatePicker, setEndDatePicker] = useState<MaterialUiPickersDate>();
  const [startDatePicker, setStartDatePicker] =
    useState<MaterialUiPickersDate>();
  const [dataSelectedWorkplace, setDataSelectedWorkplace] =
    useState<DataSelectedWorkplace>({
      idOffice: "",
      selectFloor: "",
      blocked: false,
      endReservation: "",
      label: "",
      occupant: "",
      palceIndex: "",
      startReservation: "",
      type: "",
    });

  const { occupant } = dataAboutWorkplace ?? {};
  const isDisabled = useMemo(
    () => Boolean(occupant && user !== occupant),
    [user, occupant]
  );

  useEffect(() => {
    if (dataAboutWorkplace) {
      setStartDatePicker(
        dataAboutWorkplace.startReservation === ""
          ? new Date()
          : new Date(dataAboutWorkplace.startReservation!)
      );
      setEndDatePicker(
        dataAboutWorkplace.endReservation === ""
          ? new Date()
          : new Date(dataAboutWorkplace.endReservation!)
      );
      setDataSelectedWorkplace({
        idOffice: selectedOffice.id,
        selectFloor: `${selesctedFloor - 1}`,
        blocked: dataAboutWorkplace.blocked,
        endReservation: dataAboutWorkplace.endReservation,
        label: dataAboutWorkplace.label,
        occupant: dataAboutWorkplace.occupant,
        palceIndex: dataAboutWorkplace.palceIndex,
        startReservation: dataAboutWorkplace.startReservation,
        type: dataAboutWorkplace.type,
      });
    }
  }, [dataAboutWorkplace, selectedOffice.id, selesctedFloor]);

  const handlerChangeStartReservationPicker = (date: MaterialUiPickersDate) => {
    setStartDatePicker(date);
    setEndDatePicker(date);
    setDataSelectedWorkplace((prevState) => ({
      ...prevState,
      occupant: user,
      startReservation: format(date as Date, "yyyy/MM/dd"),
      endReservation: format(date as Date, "yyyy/MM/dd"),
    }));
  };

  const handlerChangeEndReservationPicker = (date: MaterialUiPickersDate) => {
    setEndDatePicker(date);
    setDataSelectedWorkplace((prevState) => ({
      ...prevState,
      occupant: user,
      endReservation: format(date as Date, "yyyy/MM/dd"),
    }));
  };

  const handleEventButtonSave = () => {
    dispatch(setReservation(dataSelectedWorkplace));
  };

  const handleEventButtonCancel = () => {
    setStartDatePicker(new Date());
    setEndDatePicker(new Date());
    const dataSelectedWorkplaceAfterClearing = clearBooking(
      dataSelectedWorkplace
    );
    setDataSelectedWorkplace(dataSelectedWorkplaceAfterClearing);
    dispatch(setReservation(dataSelectedWorkplaceAfterClearing));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Dialog
        onClose={handleEventPopUp}
        aria-labelledby="customized-dialog-title"
        open={dataAboutWorkplace !== null}
      >
        {dataAboutWorkplace && (
          <>
            <DialogTitle
              id="customized-dialog-title"
              onClose={handleEventPopUp}
            >
              {dataAboutWorkplace.type} - {dataAboutWorkplace.label}
            </DialogTitle>
            <DialogContent dividers>
              <Typography className={classes.occupantUser}>
                {dataSelectedWorkplace.occupant
                  ? dataSelectedWorkplace.occupant
                  : null}
              </Typography>
              <form className={classes.container} noValidate>
                <KeyboardDatePicker
                  disabled={isDisabled}
                  id="datetime-booking-place-start"
                  label="Start booking"
                  className={classes.textField}
                  inputVariant="outlined"
                  value={startDatePicker}
                  onChange={handlerChangeStartReservationPicker}
                  minDate={startDatePicker}
                  format="yyyy/MM/dd"
                />

                <KeyboardDatePicker
                  disabled={isDisabled}
                  id="datetime-booking-place-end"
                  label="End booking"
                  className={classes.textField}
                  inputVariant="outlined"
                  value={endDatePicker}
                  onChange={handlerChangeEndReservationPicker}
                  minDate={endDatePicker}
                  format="yyyy/MM/dd"
                />
              </form>
            </DialogContent>
            <DialogActions>
              {user === dataSelectedWorkplace.occupant ? (
                <Button
                  disabled={isDisabled}
                  onClick={handleEventButtonCancel}
                  variant="contained"
                  color="secondary"
                >
                  cancel booking
                </Button>
              ) : null}

              <Button
                disabled={isDisabled}
                onClick={handleEventButtonSave}
                variant="contained"
                color="primary"
              >
                Save booking
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

export default PopUpInfoPlace;
