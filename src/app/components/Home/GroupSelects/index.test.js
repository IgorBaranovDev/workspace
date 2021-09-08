import React from "react";
import {render} from '@testing-library/react';
import GroupSelects from "./index";

test("render GroupSelects component", () => {
    const screen = render(<GroupSelects officesProps="null"/>);
    expect(screen.getByText("choose a workplace")).toBeInTheDocument();
});
