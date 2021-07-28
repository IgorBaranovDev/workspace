import React, { useState } from "react";
import { connect } from 'react-redux';
import { useSelector } from "react-redux";
import { getCountryDate } from "../../../redux/selectors";
// import { officesDate } from "../../../services/BD/date";
import {getCountry} from '../../../redux/selectors';

// components
import { InputItem, LabelForInput, Select, WrapperForSelect } from "./components";
import { fechData, writeData } from "../../../redux/actions/selectOffice";

// types
// import { OfficesDate } from "../../../services/BD/type/OfficesDate";
const mapStateToProps = (officesDate: any) => {
  return {
    officesDate: getCountry(officesDate),
  }  
};

const mapDispatchProps = {
  fechData,
  writeData
}


const GroupSelects: React.FC = () => {
  const [country, setCounrty] = useState("");
  // const [city, setCity] = useState("");
  const countryDate = useSelector(getCountryDate);
  console.log(countryDate);

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    if (element.name === "selectCountry") {
      setCounrty(element.value as string);
    } else {
      // setCity(element.value as string);
    }
  };

  return (
    <WrapperForSelect>
      <InputItem>
        <LabelForInput htmlFor="selectCountry">Select Country</LabelForInput>
        <Select
          id="selectCountry"
          name="selectCountry"
          value={country}
          onChange={handleChange}
        >
          {/* {countryDate?.map((item) => (
            <option value={item.country} key={item.country}>
              {item.country}
            </option>
          ))} */}
        </Select>
      </InputItem>
      <InputItem>
        <LabelForInput htmlFor="selectCity">Select City</LabelForInput>
        {/* <Select id="selectCity" name="selectCity">
          value={city}
          onChange={handleChange}
          {offices?.map((item) => (
            <option value={item.city} key={item.city}>
              {item.city}
            </option>
          ))}
        </Select> */}
      </InputItem>
    </WrapperForSelect>
  );
};

export default connect(mapStateToProps, mapDispatchProps)(GroupSelects);
