import React, { useEffect, useMemo, useState } from "react";

import { useSelector } from "react-redux";

// component
import PopUpInfoPlace from "./PopUpInfoPlace";
import Loader from "../../../Loader";

// style
import { makeStyles } from "@material-ui/core/styles";
import WrapperCanvas from "./components/WrapperCanvas";

// selectors
import { getDataFloors, getSelectedFloor } from "../../../../redux/selectors";

// types
import { InfoAboutWorkplace } from "./type/InfoAboutWorkplace";

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

const Canvas: React.FC = () => {  
  const classes = useStyles();
  const dataFloors = useSelector(getDataFloors);
  const selesctedFloor = useSelector(getSelectedFloor);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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

  const handleOpen = (event: any) => {
    event.preventDefault();
    if (event.target.tagName === "rect" || event.target.tagName === "text") {
      const selectPlace = places[event.target.id];
      setInfoAboutWorkplace({
        palceIndex: event.target.id,
        label: selectPlace.label,
        type: selectPlace.type,
        occupant: selectPlace.placeStatus.occupant,
        startReservation: selectPlace.placeStatus.start,
        endReservation: selectPlace.placeStatus.end,
        blocked: selectPlace.placeStatus.blocked        
      });
    }
  };

  return (
    <>
      {places && isImageLoaded ? (
        <WrapperCanvas $image={floorImageSrc} >
          <svg id="canvas" className={classes.canvas} onClick={handleOpen}>
            {/* position absolute */}
            {places?.map((item: any, index: number) => (
              <g key={`rect-${index}`} id={`place-${index + 1}`}>
                <rect
                  id={`${index}`}
                  className={classes.placeField}
                  x={item.coordinates.x}
                  y={item.coordinates.y}
                  width={item.coordinates.width}
                  height={item.coordinates.height}
                  rx="5"
                />
                <text
                  id={`${index}`}
                  className={classes.placeLabel}
                  x={item.coordinates.x + item.coordinates.width / 2 - 16}
                  y={item.coordinates.y + item.coordinates.height / 2 + 4}
                >
                  {item.label}
                </text>
              </g>
            ))}
          </svg>
        </WrapperCanvas>
      ) : (<Loader />)}
      <PopUpInfoPlace
        handleEventPopUp={handleClose}
        dataAboutWorkplace={infoAboutWorkplace}
      />
    </>
  );
};

export default Canvas;
