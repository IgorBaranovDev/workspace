import styled from "styled-components";

import ArrowDown from "../../../../assets/img/Home/select-arrow-down 4.png";

const Select = styled.select`
  width: 100%;
  max-width: 250px;
  padding: 15px;
  margin: 0 auto;
  outline: none;
  box-sizing: border-box;
  background-color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  color: #600dfb;
  text-transform: uppercase;
  border: 2px solid #2b9cfc;
  border-radius: 5px;
  transition: ease-in-out 0.2s;
  padding-right: 25px;
  appearance: none;
  background-image: url(${ArrowDown});
  background-position: 95%;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    border: 2px solid #4e4e4e;
    transition: 0.2s ease-in-out;
  }

  &:focus {
    border: 2px solid #4e4e4e;
  }

  & * {
    color: #2b9cfc;   
    font-size: 16px;
  }
`;

export default Select;
