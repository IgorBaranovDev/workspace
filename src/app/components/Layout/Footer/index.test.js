import React from "react";
import { render } from '@testing-library/react';
import Footer from './index';

test('renders Footer', () => {
  const screen = render(<Footer />);
  expect(screen.getByText("© 2021")).toBeInTheDocument();
  // screen.debug();  
});
