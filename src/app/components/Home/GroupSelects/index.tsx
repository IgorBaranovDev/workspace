import React, { useState } from "react";
import { useSelector } from "react-redux";

// components
import ListOfAddresses from "../ListOfAddresses";

// selectors
import { getAuthUser } from "../../../redux/selectors";

// style
import {
  InputItem,
  LabelForInput,
  Select,
  WrapperForSelect,
  TitleHome,
} from "./components";

// types
import { OfficesData } from "../../../services/BD/type";

interface IGroupSelector {
  officesProps: OfficesData;
}

interface IarrCity {
  [key: number]: string;
}

const GroupSelects: React.FC<IGroupSelector> = ({ officesProps }) => {
  const [country, setCounrty] = useState("");
  const [arrCity, setArrCity] = useState<Array<IarrCity>>([]);
  const [city, setCity] = useState("");
  const [arrAddresses, setArrAddresses] = useState<Array<IarrCity>>([]);
  const user = useSelector(getAuthUser);

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    if (element.name === "selectCountry") {
      setCounrty(element.value as string);
      setArrCity(Object.keys(officesProps[element.value]));
      setCity("");
      setArrAddresses([]);
    } else {
      if (element.name === "selectCity") {
        setCity(element.value as string);
        setArrAddresses(officesProps[country][element.value]);
      }
    }
  };

  return (
    <>
      <TitleHome>choose a workplace</TitleHome>
      <WrapperForSelect>
        <InputItem>
          <LabelForInput htmlFor="selectCountry">Select Country</LabelForInput>
          <Select
            id="selectCountry"
            name="selectCountry"
            value={country}
            onChange={handleChange}
            disabled={!user}
          >
            <option hidden value="">
              Select country
            </option>
            {Object.keys(officesProps)?.map((keyName, item) => (
              <option value={keyName} key={`officeProps-${item}`}>
                {keyName}
              </option>
            ))}
          </Select>
        </InputItem>
        <InputItem>
          <LabelForInput htmlFor="selectCity">Select City</LabelForInput>
          <Select
            id="selectCity"
            name="selectCity"
            value={city}
            onChange={handleChange}
            disabled={!country}
          >
            <option hidden value="">
              Select sity
            </option>
            {arrCity?.map((item, key) => (
              <option key={`city-${key}`}>{item}</option>
            ))}
          </Select>
        </InputItem>
      </WrapperForSelect>
      <ListOfAddresses addresesData={arrAddresses} />
    </>
  );
};

export default GroupSelects;
