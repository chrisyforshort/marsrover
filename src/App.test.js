import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders without crashing', () => {
  const { getByText } = render(<App />);
  ReactDOM.unmountComponentAtNode(div);
});
