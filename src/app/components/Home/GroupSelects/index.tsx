import React, { useEffect, useState } from "react";

// components
import {
  InputItem,
  LabelForInput,
  Select,
  WrapperForSelect,
} from "./components";

// types
import { OfficesData } from "../../../services/BD/type/OfficesData";
import { TitleHome } from "../components";

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

  console.log("country state - ", country);
  console.log("arrCitys state -", arrCity);

  useEffect(() => {
    if (country) {
      setArrCity(Object.keys(officesProps[country]));
    }
  }, [officesProps, country]);

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    if (element.name === "selectCountry") {
      setCounrty(element.value as string);
    } else {
      if (element.name === "selectCity") {
        setCity(element.value as string);
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
          >
            <option hidden value="">
              Select country
            </option>
            {Object.keys(officesProps)?.map((keyName, item) => (
              <option value={keyName} key={item}>
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
            {arrCity?.map((item, key) => (              
              <option key={key}>{item}</option>
            ))}
          </Select>
        </InputItem>
      </WrapperForSelect>
    </>
  );
};

export default GroupSelects;
