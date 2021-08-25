import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

// components
import Loader from "../../Loader";
import NavOnFloors from "./NavOnFloors";
import Canvas from "./Canvas";

// styles
import { HeaderOffice, TitleOffice } from "./components";

// scelectors
import {
  getAuthUser,
  getLoadingState,
  getSelectedOffice,
} from "../../../redux/selectors";

// actions
import { fetchSelectedOffice } from "../../../redux/actions/selectOffice";

// types
import { Addres, SelectedOffice } from "../../../services/BD/type";

const Office: React.FC = () => {
  const user = useSelector(getAuthUser);
  const loading = useSelector(getLoadingState);
  const dispatch = useDispatch();
  const { officeId } = useParams<{ officeId: string }>();
  const selectedOffice: SelectedOffice = useSelector(getSelectedOffice);
  const [selectedOfficeAddres, setSelectedOfficeAddres] = useState<Addres>({
    country: "",
    city: "",
    location: "",
  });

  useEffect(() => {
    if (user) {
      dispatch(fetchSelectedOffice(officeId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (selectedOffice) {
      setSelectedOfficeAddres({
        country: selectedOffice.addres.country,
        city: selectedOffice.addres.city,
        location: selectedOffice.addres.location,
      });
    }
  }, [selectedOffice]);

  if (!user && !loading) {
    return <Redirect to="/auth" />;
  }

  return selectedOffice ? (
    <>
      <HeaderOffice>
        <TitleOffice>
          Location:{" "}
          <em style={{ color: "#299cff" }}>
            {selectedOfficeAddres.country}-{selectedOfficeAddres.city}-
            {selectedOfficeAddres.location}
          </em>
        </TitleOffice>
        <NavOnFloors />
      </HeaderOffice>
      <Canvas />
    </>
  ) : (
    <Loader />
  );
};

export default Office;
