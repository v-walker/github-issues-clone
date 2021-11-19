import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Base Layout wraps the next set of components/routes */}
        <Routes>
          <Route path="/" element={<App />} />
          {/* All other routes here */}
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

