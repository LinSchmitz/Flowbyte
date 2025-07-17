// src/App.jsx
import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard />
      {/* باقی صفحات اینجا */}
    </div>
  );
}

export default App;
