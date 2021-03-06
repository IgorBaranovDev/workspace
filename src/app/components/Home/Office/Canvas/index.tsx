import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

// component
import PopUpInfoPlace from "./PopUpInfoPlace";
import Loader from "../../../Loader";

// style
import { makeStyles } from "@material-ui/core/styles";
import WrapperCanvas from "./components/WrapperCanvas";

// selectors
import {
  getAuthUser,
  getDataFloors,
  getSelectedFloor,
} from "../../../../redux/selectors";

// types
import { InfoAboutWorkplace } from "./type/InfoAboutWorkplace";
import { Place } from "../../../../services/BD/type/Floors";

const useStyles = makeStyles({
  canvas: {
    border: "1px solid black",
    width: "100%",
    height: "100%",
    pointerEvents: "auto",
  },

  placeField: {
    cursor: "pointer",
    fill: "#c4c4c4",
    "&:hover": {
      fill: "#299eff",
    },
  },
  placeLabel: {
    fontSize: "14px",
    lineHeight: "14px",
    fontWeight: "bold",
    fill: "#000000",
    cursor: "pointer",
  },
});

const setStrokeColor = (item: string, user: string) => {
  switch (item) {
    case user:
      return "orange";
    case "":
      return "green";
    default:
      return "red";
  }
};

const Canvas: React.FC = () => {
  const classes = useStyles();
  const dataFloors = useSelector(getDataFloors);
  const selesctedFloor = useSelector(getSelectedFloor);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const user = useSelector(getAuthUser);

  const { places, floorImageSrc } = useMemo(
    () => dataFloors[selesctedFloor - 1],
    [dataFloors, selesctedFloor]
  );
  const [infoAboutWorkplace, setInfoAboutWorkplace] =
    useState<InfoAboutWorkplace | null>(null);

  useEffect(() => {
    setIsImageLoaded(false);
    const image = new Image();
    image.addEventListener("load", () => {
      setIsImageLoaded(true);
    });
    image.src = floorImageSrc;
  }, [floorImageSrc]);

  const handleClose = () => {
    setInfoAboutWorkplace(null);
  };

  const handleOpen = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.preventDefault();
    const currentElement = event.target as any;
    if (currentElement.tagName === "rect" || currentElement.tagName === "text") {
      const selectPlace = places[currentElement.id];
      setInfoAboutWorkplace({
        palceIndex: currentElement.id,
        label: selectPlace.label,
        type: selectPlace.type,
        occupant: selectPlace.placeStatus.occupant,
        startReservation: selectPlace.placeStatus.start,
        endReservation: selectPlace.placeStatus.end,
        blocked: selectPlace.placeStatus.blocked,
      });
    }
  };

  return (
    <>
      {places && isImageLoaded ? (
        <WrapperCanvas $image={floorImageSrc}>
          <svg id="canvas" className={classes.canvas} onClick={handleOpen}>
            {places?.map((item: Place, index: number) => (
              <g key={`rect-${index}`} id={`place-${index + 1}`}>
                <rect
                  id={`${index}`}
                  className={classes.placeField}
                  x={item.coordinates.x}
                  y={item.coordinates.y}
                  width={item.coordinates.width}
                  height={item.coordinates.height}
                  rx="5"
                  stroke={setStrokeColor(item.placeStatus.occupant, user)}
                  strokeWidth="4px"
                />
                <text
                  id={`${index}`}
                  className={classes.placeLabel}
                  x={item.coordinates.x! + item.coordinates.width! / 2 - 16}
                  y={item.coordinates.y! + item.coordinates.height! / 2 + 4}
                >
                  {item.label}
                </text>
              </g>
            ))}
          </svg>
        </WrapperCanvas>
      ) : (
        <Loader />
      )}
      <PopUpInfoPlace
        handleEventPopUp={handleClose}
        dataAboutWorkplace={infoAboutWorkplace}
      />
    </>
  );
};

export default Canvas;
