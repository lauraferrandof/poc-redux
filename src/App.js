import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Summary from './pages/Summary';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My to-do app</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="summary" element={<Summary />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
