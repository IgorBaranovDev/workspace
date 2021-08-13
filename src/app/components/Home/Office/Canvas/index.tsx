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
    fill: "#299cff",
    cursor: "pointer",
    "&:hover": {
      fillOpacity: "0.5",
    },
  },
  placeLabel: {
    fontSize: "16px",
    lineHeight: "16px",
    fill: "#fff",
  },
});

// type Places = {
//     label: string;
//     type: string;
//     placeStatus: {
//       blocked: boolean;
//       occupant: string;
//       start: number;
//       end: number;
//       coordinates: {
//         x?: number,
//         y?: number,
//         width?: number,
//         height?: number,
//       }
//     };
// };

const Canvas: React.FC = () => {
  const classes = useStyles();

  const floors = useSelector(getFloorsData);
  const slesctedFloor = useSelector(getSelectedFloor);
  const [places, setPlaces] = useState<any>(null);

  useEffect(() => {
    if (slesctedFloor) {
      setPlaces(Object.values(floors[slesctedFloor - 1])[2]);
    }
  }, [floors, places, slesctedFloor]);

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
            {places?.map((item: any, index: any) => (
              <svg key={index} id={`place-${index}`}>
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
                  x={item.placeStatus.coordinates.x + 15}
                  y={item.placeStatus.coordinates.y + 20}
                >
                  {item.label}
                </text>
              </svg>
            ))}
          </svg>
        </WrapperCanvas>
      ) : null}
    </>
  );
};

export default Canvas;
