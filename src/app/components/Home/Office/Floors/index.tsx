import React from "react";

interface IFloors {
  dataFloors: Array<{ [key: string]: number }>;
}

const Floors: React.FC<IFloors> = ({ dataFloors }) => {
  console.log(dataFloors)
  return <>
  <p>Floors</p>
  </>;
};

export default Floors;
