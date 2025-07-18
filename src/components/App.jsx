import React from 'react';
import Header from './Header';
import Analyze from './Analyze';
import Footer from './Footer';
import SideBar from './SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="main-layout">
          <SideBar />
          <main className="main-content">
            <Routes>
              <Route path="/create-circle" element={<CreateCircle />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/analyze" element={<Analyze />} />
              <Route path="/settings" element={<Settings />} />
              {/* You can add a default route */}
              <Route
                path="*"
                element={<h2>Welcome! Please select a page.</h2>}
              />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function CreateCircle() {
  return <h2>Create Circle Page</h2>;
}

function CreateUser() {
  return <h2>Create User Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}
