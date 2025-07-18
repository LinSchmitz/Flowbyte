// src/App.jsx
import React, { useState } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <SideBar />
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? '⬅️' : '➡️'}
      </button>

      {isOpen ? (
        <ul>
          <li>✅ Create Circle</li>
          <li>📃 Edit Circle</li>
          <li>📊 Analyze</li>
          <li>⚙️ Settings</li>
        </ul>
      ) : (
        <ul>
          <li title="Overview">📊</li>
          <li title="Tasks">✅</li>
          <li title="Settings">⚙️</li>
        </ul>
      )}
    </div>
  );
}

function Footer() {
  return <footer>footer</footer>;
}
