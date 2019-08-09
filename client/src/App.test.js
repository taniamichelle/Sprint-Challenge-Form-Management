import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, cleanup, fireEvent } from '@testing-library/react';
// import '@testing-library/react/cleanup-after-each';

afterEach(cleanup);

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders without crashing using ReactDom', () => {
    render(<App />);
  });
  it('renders Testing', () => {
    const app = render(<App />);
    app.getByText(/testing/i);
  });
});

// describe('<Dashboard />', () => {
//   it('increments current counts', () => {
//     const { getByTestId } = render(<Dashboard />);
//     fireEvent.click(getByTestId('strike'));
//     fireEvent.click(getByTestId('ball'));
//     fireEvent.click(getByTestId('foul'));
//     fireEvent.click(getByTestId('hit'));
//   })
// })