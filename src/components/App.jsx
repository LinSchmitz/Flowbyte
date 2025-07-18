// src/App.jsx
import React from 'react';
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
  return <div className="sidebar">SideBar</div>;
}

function Footer() {
  return <footer>footer</footer>;
}
