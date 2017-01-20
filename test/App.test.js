/* globals describe, it */
import React from 'react';
import { render } from 'react-dom';
import App from '../src/components/App';

describe('Application', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Root />, document.querySelector("#root"))
  });

  // it('renders MainContainer component', () => {
  //
  // });
});
