import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Categories';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Products />, div);
  ReactDOM.unmountComponentAtNode(div);
});
