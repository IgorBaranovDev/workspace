import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// component
import PopUpInfoPlace from "./PopUpInfoPlace";

// style
import { makeStyles } from "@material-ui/core/styles";
import WrapperCanvas from "./components/WrapperCanvas";

// selectors
import { getDataFloors, getSelectedFloor } from "../../../../redux/selectors";

// types
import { Places } from "../../../../services/BD/type/Floors";

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
  },
});

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
                  x={
                    item.placeStatus.coordinates.x +
                    item.placeStatus.coordinates.width / 2 -
                    16
                  }
                  y={
                    item.placeStatus.coordinates.y +
                    item.placeStatus.coordinates.height / 2 +
                    4
                  }
                >
                  {item.label}
                </text>
              </g>
            ))}
          </svg>
        </WrapperCanvas>
      ) : null}
      <PopUpInfoPlace
        handleEvent={handleClose}
        dataAboutWorkplace={infoAboutWorkplace}
        visibility={open}
      />
    </>
  );
};

export default Canvas;
