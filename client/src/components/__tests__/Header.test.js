import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import { Header } from '../Header';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Header />);
});

describe('Header component', () => {
  it('can debug the output', () => {
    tools.debug();
  });
  it('shows womens world cup text', () => {
    const header = 'womens world cup';
    expect(tools.queryByText(new RegExp(header, 'ig'))).toBeInTheDocument();
  });
});