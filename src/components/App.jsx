// src/App.jsx
import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';
import { SideBar } from './SideBar';

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
