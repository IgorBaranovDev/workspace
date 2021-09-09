import React from "react";
import { render } from '@testing-library/react';
import GroupSelects from "./index";

const user = { email: "test@Mail.com" };
jest.mock("../../../redux/selectors", () => ({ getAuthUser: () => user }));
jest.mock("react-redux", () => ({
    useSelector: (funk) => funk(),
}));

test("render GroupSelects component", () => {
    const screen = render(<GroupSelects officesProps="null" />);
    expect(screen.getByText("choose a workplace")).toBeInTheDocument();
});
