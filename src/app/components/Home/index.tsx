import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, connect, useDispatch } from "react-redux";

// components
import GroupSelects from "./GroupSelects";
import Loader from "../Loader";

// selectors
import {
  getOfficesData,
  getAuthUser,
  getLoadingState,
} from "../../redux/selectors";

// servises
import { getAddressesData } from "../../services/BD";

// types
import { OfficesData } from "../../services/BD/type/OfficesData";

// action
import { fetchOfficesData } from "../../redux/actions/selectOffice";

const mapStateToProps = (state: any) => {
  return {
    officesDate: getOfficesData(state),
  };
};

const mapDispatchProps = {
  getAddressesData,
};

const Home: React.FC = () => {
  const user = useSelector(getAuthUser);
  const loading = useSelector(getLoadingState);
  const dispatch = useDispatch();
  const officesData: OfficesData = useSelector(getAddressesData);  

  useEffect(() => {
    if (user) {
      dispatch(fetchOfficesData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : !user && !officesData ? (
        <Redirect to="/auth" />
      ) : (
        <GroupSelects officesProps={officesData} />
      )}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchProps)(Home);
