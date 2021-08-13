import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSelectedFloor } from "../../../../redux/actions/selectOffice";

// style
import { InputItem, Select } from "../../GroupSelects/components";
import TextFloors from "./TextFloors";
import TotalNumber from "./TotalNumber";

interface IFloors {
  dataFloors: Array<{ [key: string]: number }>;
}

const Floors: React.FC<IFloors> = ({ dataFloors }) => {
  const [floor, setFloor] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    setFloor(element.value as string);
    const selctedFloor = +element.value;
    dispatch(getSelectedFloor(selctedFloor as number));
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
          <option hidden value="">
            Select Floor
          </option>
          {dataFloors?.map((item, index) => (
            <option value={`${item}`} key={index}>
              floor - {item}
            </option>
          ))}
        </Select>
      </InputItem>
    </>
  );
};

export default Floors;
