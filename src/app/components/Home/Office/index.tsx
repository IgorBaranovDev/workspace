import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// components
import Floors from "./Floors";
import Canvas from "./Canvas";

// styles
import { HeaderOffice, TitleOffice } from "./components";

// scelectors
import { getFloorsData } from "../../../redux/selectors";

// actions
import { fetchFloorsData } from "../../../redux/actions/selectOffice";

const Office: React.FC = () => {
  const { officeId } = useParams<{ officeId: string }>();
  const dispatch = useDispatch();
  const floors = useSelector(getFloorsData);
  const numberOfFloor = Object.values(floors).map((i: any) => i.number);

  useEffect(() => {
    dispatch(fetchFloorsData(officeId));
  }, [dispatch, officeId]);

  return (
    <>
      <HeaderOffice>
        <TitleOffice>
          adress of office - <em style={{ color: "#299cff" }}>{officeId}</em>
        </TitleOffice>
        <Floors dataFloors={numberOfFloor} />
      </HeaderOffice>
      <Canvas />
    </>
  );
};

export default Office;
