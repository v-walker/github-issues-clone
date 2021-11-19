import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App';
import IssueDetail from './components/IssueDetail'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Base Layout wraps the next set of components/routes */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/issue/:issue_number" element={<IssueDetail />} />
          {/* All other routes here */}
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

