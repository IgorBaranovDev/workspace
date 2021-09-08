import React from "react";
import { render } from '@testing-library/react';
import NavOnFloors from './index';

const selesctedFloor = [{ number: 0, places: {}}]
jest.mock("../../../../redux/selectors", () => ({getDataFloors: () => selesctedFloor}));
jest.mock("react-redux", () => ({
    useDispatch: () => () => { },
    useSelector: (funk) => funk(),
}));

test('renders NavOnFloorsr', () => {  
  const { getByText } = render(<NavOnFloors />);
  const linkElement = getByText("total floors:");
  expect(linkElement).toBeInTheDocument();
});
