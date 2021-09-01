import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './index.tsx';

test('renders learn react link', () => {
  render(<><BrowserRouter></BrowserRouter><Footer /><BrowserRouter /></>);
  const linkElement = screen.getByText(/© 2021/i);
  expect(linkElement).toBeInTheDocument();
});
