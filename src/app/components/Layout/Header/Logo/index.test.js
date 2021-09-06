import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import Logo from "./index";

test("render Logo component", () => {
    const screen = render(
        <BrowserRouter>
            <Logo />
        </BrowserRouter>
    );
    expect(screen.getByText("Workspace")).toBeInTheDocument();
});
