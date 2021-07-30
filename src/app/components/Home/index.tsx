import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

// components
import GroupSelects from "./GroupSelects";
import Loader from "../Loader";

// selectors
import { getOfficesData, getAuthUser } from "../../redux/selectors";

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
  const dispatch = useDispatch();
  const officesData: OfficesData = useSelector(getAddressesData);

  useEffect(() => {
    dispatch(fetchOfficesData());
  }, [dispatch]);

  return (
    <React.Fragment>
      {!user ? (
        <Redirect to="/auth" />
      ) : (
        <>
          {officesData ? (
            <GroupSelects officesProps={officesData} />
          ) : (
            <Loader />
          )}
        </>
      )}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchProps)(Home);
