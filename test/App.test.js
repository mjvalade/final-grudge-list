import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';

describe('Application', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  // it('renders MainContainer component', () => {
  //
  // });
});
