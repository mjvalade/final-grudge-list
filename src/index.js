import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import Header from './components/Header';
// import NewGrudgeForm from './components/NewGrudgeForm';
import GrudgeDetail from './components/GrudgeDetail';
import NoMatch from './components/NoMatch';
import './styles/css/index.css';

import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <div className="dashboard"> */}
          <Match exactly pattern="/" component={App} />
          {/* <Match exactly pattern="/NewGrudge" component={NewGrudgeForm} /> */}
          <Match pattern="/Grudge/:name" component={GrudgeDetail} />
          <Miss component={NoMatch} />
        {/* </div> */}
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))
