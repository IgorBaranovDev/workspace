import React, { useState } from "react";

// style
import { InputItem, Select } from "../../GroupSelects/components";

interface IFloors {
  dataFloors: Array<{ [key: string]: number }>;
}

const Floors: React.FC<IFloors> = ({ dataFloors }) => {
  console.log(dataFloors);
  const [floor, setFloor] = useState("");

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    setFloor(element.value as string);
  };

  return (
    <>
      <p>Floors: {dataFloors.length}</p>
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
