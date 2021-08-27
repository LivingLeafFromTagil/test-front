import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './Content/Content'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    
    <Content/>
  </Router>,
  document.getElementById('root')
);

