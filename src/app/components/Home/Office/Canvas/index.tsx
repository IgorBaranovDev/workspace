import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Floors }  from "../../../../services/BD/type/Floors";


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

interface ICanvas {
  places: Floors;
}

const Canvas: React.FC<ICanvas> = ({ places }) => {
  console.log(places[0]);
  const classes = useStyles();

  const handleClic = (event: any) => {
    event.preventDefault();

    if (event.target.tagName === "rect") {
      console.log(JSON.stringify(places[event.target.id], null, 4));
    }
  };

  return (
    <svg id="canvas" className={classes.canvas} onClick={handleClic}>
      {places[0]?.map((item: any, index: any) => (
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
  );
};

export default Canvas;
