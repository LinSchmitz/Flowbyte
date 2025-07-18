// src/App.jsx
import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <div className="app">
      <Header />
      <SideBar />
      <Dashboard />
      <Footer />
    </div>
  );
}

function SideBar() {
  return <div>SideBar</div>;
}

function Footer() {
  return <footer>footer</footer>;
}
