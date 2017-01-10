import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import Header from './components/Header';
import NewGrudgeForm from './components/NewGrudgeForm';
import NoMatch from './components/NoMatch';
import './styles/css/index.css';

import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/NewGrudge" component={NewGrudgeForm} />
        {/* ^^ may need to switch out for container */}
        <Miss component={NoMatch} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))
