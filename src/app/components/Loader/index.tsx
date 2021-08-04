import React from "react";
import MaterialCircularProgress from "./MaterialCircularProgress";
import WrapperForLoading from "./WrapperForLoading";

const Loader: React.FC = () => (
  <WrapperForLoading>      
    <MaterialCircularProgress />
  </WrapperForLoading>
);

export default Loader;
