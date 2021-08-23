import React, { useState } from "react";
import { useDispatch } from "react-redux";

// action
import { setSelectedFloor } from "../../../../redux/actions/selectOffice";

// style
import { InputItem, Select } from "../../GroupSelects/components";
import TextFloors from "./TextFloors";
import TotalNumber from "./TotalNumber";

// types
import { Floors } from "../../../../services/BD/type";

interface IFloors {
  dataFloors: Floors;
}

const NavOnFloors: React.FC<IFloors> = ({ dataFloors }) => {
  const [floor, setFloor] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    setFloor(element.value as string);
    const selctedFloor = +element.value;
    dispatch(setSelectedFloor(selctedFloor as number));
  };

  return (
    <>
      <TextFloors>
        total floors: <TotalNumber>{dataFloors.length}</TotalNumber>
      </TextFloors>
      <InputItem>
        <Select
          id="selectFloor"
          name="selectFloor"
          value={floor}
          onChange={handleChange}
        >
          {dataFloors?.map((item, index) => (
            <option value={`${item.number}`} key={`Floor-${index}`}>
              floor - {item.number}
            </option>
          ))}
        </Select>
      </InputItem>
    </>
  );
};

export default NavOnFloors;
