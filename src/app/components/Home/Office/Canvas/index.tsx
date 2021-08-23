import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// selectors
import {
  getDataFloors,
  getSelectedFloor, 
} from "../../../../redux/selectors";
// types
import { Places } from "../../../../services/BD/type/Floors";

// style
import { makeStyles } from "@material-ui/core/styles";
import WrapperCanvas from "./components/WrapperCanvas";

// material-ui
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  canvas: {
    border: "1px solid black",
    width: "100%",
    height: "100%",
    pointerEvents: "auto",
  },

  placeField: {
    opacity: "0",
    cursor: "pointer",
    "&:hover": {
      fill: "#299cff",
      opacity: "1",
    },
  },
  placeLabel: {
    fontSize: "14px",
    lineHeight: "14px",
    fill: "#fff",
    cursor: "pointer",
    "&:hover": {},
  },
});

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

interface InfoAboutWorkplace {
  label: string;
  type: string;
  occupant: string;
  startReservation: number;
  endReservation: number;
}

const Canvas: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [places, setPlaces] = useState<Places>([]);
  const dataFloors = useSelector(getDataFloors);
  const selesctedFloor = useSelector(getSelectedFloor);

  const [infoAboutWorkplace, setInfoAboutWorkplace] =
    useState<InfoAboutWorkplace>({
      label: "",
      type: "",
      occupant: "",
      startReservation: 0,
      endReservation: 0,
    });

  useEffect(() => {
    if (dataFloors && selesctedFloor) {      
      setPlaces(dataFloors[selesctedFloor - 1].places);
    }
  }, [dataFloors, selesctedFloor]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (event: any) => {
    event.preventDefault();    
    if (event.target.tagName === "rect" || event.target.tagName === "text") {
      setOpen(true);
      const selectPlace = places[event.target.id];
      setInfoAboutWorkplace({
        label: selectPlace.label,
        type: selectPlace.type,
        occupant: selectPlace.placeStatus.occupant,
        startReservation: selectPlace.placeStatus.start,
        endReservation: selectPlace.placeStatus.end,
      });
      console.log(JSON.stringify(places[event.target.id], null, 4));
    }
  };

  return (
    <>
      {places ? (
        <WrapperCanvas>
          <svg id="canvas" className={classes.canvas} onClick={handleOpen}>
            {places?.map((item: any, index: number) => (
              <g key={`rect-${index}`} id={`place-${index + 1}`}>
                <rect
                  id={`${index}`}
                  className={classes.placeField}
                  x={item.placeStatus.coordinates.x}
                  y={item.placeStatus.coordinates.y}
                  width={item.placeStatus.coordinates.width}
                  height={item.placeStatus.coordinates.height}
                  rx="5"
                />
                <text
                  id={`${index}`}
                  className={classes.placeLabel}
                  x={item.placeStatus.coordinates.x + 6}
                  y={
                    item.placeStatus.coordinates.y +
                    item.placeStatus.coordinates.height / 2
                  }
                >
                  {item.label}
                </text>
              </g>
            ))}
          </svg>
        </WrapperCanvas>
      ) : null}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {infoAboutWorkplace.label}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Type: {infoAboutWorkplace.type}</Typography>
          <Typography gutterBottom>
            Occupant: {infoAboutWorkplace.occupant}
          </Typography>
          <Typography gutterBottom>
            start: {infoAboutWorkplace.startReservation}
          </Typography>
          <Typography gutterBottom>
            end: {infoAboutWorkplace.endReservation}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} 
          // color="secondary"
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

export default Canvas;
