import React from "react";

// type 
interface IOffice {
  data: string;
}

const Office: React.FC<IOffice> = ( {data} ) => {
  return (<h1>Page of selected offices {data}</h1>)
};

export default Office;
