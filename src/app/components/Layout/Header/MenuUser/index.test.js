import React from "react";
import { render } from '@testing-library/react';
import MenuUser from "./index";

const user = { email: "test@Mail.com" };
jest.mock("../../../../redux/selectors", () => ({ getAuthUser: () => user }));
jest.mock("react-redux", () => ({
    useDispatch: () => () => { },
    useSelector: (funk) => funk(),
}));

test("render MenuUser component with user", () => {
    const screen = render(<MenuUser />);
    expect(screen.getByText("log out")).toBeInTheDocument();
    expect(screen.queryByText("log in")).not.toBeInTheDocument()
});
