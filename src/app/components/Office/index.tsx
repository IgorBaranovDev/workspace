import React from "react";
// import { useParams } from "react-router-dom";

interface IOffice {
  data: string;
}

const Office: React.FC<IOffice> = ( {data} ) => {
  return (<h1>Page of selected offices {data}</h1>)
};

export default Office;
