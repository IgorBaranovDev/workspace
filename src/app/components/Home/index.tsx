import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// components
import GroupSelects from "./GroupSelects";
import Loader from "../Loader";

// selectors
import {
  getOfficesData,
  getAuthUser,
  getLoadingState,
} from "../../redux/selectors";

// types
import { OfficesData } from "../../services/BD/type/OfficesData";

// action
import { fetchOfficesData } from "../../redux/actions/selectOffice";

const Home: React.FC = () => {
  const user = useSelector(getAuthUser);
  const loading = useSelector(getLoadingState);
  const dispatch = useDispatch();
  const officesData: OfficesData = useSelector(getOfficesData);

  useEffect(() => {
    if (user) {
      dispatch(fetchOfficesData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (!user && !loading) {
    return <Redirect to="/auth" />;
  }

  return officesData ? <GroupSelects officesProps={officesData} /> : <Loader />;
};

export default Home;
