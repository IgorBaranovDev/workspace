import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// style
import { makeStyles } from "@material-ui/core/styles";
import WrapperCanvas from "./components/WrapperCanvas";

// selectors
import { getFloorsData } from "../../../../redux/selectors";
import { getSelectedFloor } from "../../../../redux/selectors/index";

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
  },
});

const Canvas: React.FC = () => {
  const classes = useStyles();
  const [places, setPlaces] = useState<any>(null);

  const floors = useSelector(getFloorsData);
  const selesctedFloor = useSelector(getSelectedFloor);
  
  console.log("selesctedFloor -", selesctedFloor);
  useEffect(() => {
    if (selesctedFloor) {
      setPlaces(Object.values(floors[selesctedFloor - 1])[2]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selesctedFloor]);

  const handleClic = (event: any) => {
    event.preventDefault();
    if (event.target.tagName === "rect") {
      console.log(JSON.stringify(places[event.target.id], null, 4));
    }
  };

  return (
    <>
      {places ? (
        <WrapperCanvas>
          <svg id="canvas" className={classes.canvas} onClick={handleClic}>
            {places?.map((item: any, index: string) => (
              <React.Fragment key={`rect-${index}`}>
                <rect
                  id={index}
                  className={classes.placeField}
                  x={item.placeStatus.coordinates.x}
                  y={item.placeStatus.coordinates.y}
                  width={item.placeStatus.coordinates.width}
                  height={item.placeStatus.coordinates.height}
                  rx="5"
                />
                <text
                  className={classes.placeLabel}
                  x={item.placeStatus.coordinates.x + 6}
                  y={
                    item.placeStatus.coordinates.y +
                    item.placeStatus.coordinates.height / 2
                  }
                >
                  {item.label}
                </text>
              </React.Fragment>
            ))}
          </svg>
        </WrapperCanvas>
      ) : null}
    </>
  );
};

export default Canvas;
