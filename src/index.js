import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
    <Route path='/' element={<App />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  </Router>,
); 