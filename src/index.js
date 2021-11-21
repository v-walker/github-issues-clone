import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import App from './App';
import IssueDetail from './components/IssueDetail';
import UserSearch from './components/UserSearch';
import Users from './components/Users';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Base Layout wraps the next set of components/routes */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/issue/:issue_number" element={<IssueDetail />} />
          <Route path="/user" element={<UserSearch />} />
          <Route path="/users/:username" element={<Users />} />
          {/* All other routes here */}
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

