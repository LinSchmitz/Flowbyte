import React from 'react';
import Header from './Header';
import Analyze from './Analyze';
import Footer from './Footer';
import SideBar from './SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCircle from './CreateCircle';
import ContributionGrid from './ContributionGrid';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="main-layout">
          <SideBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Analyze />} />
              <Route path="/analyze" element={<Analyze />} />
              <Route path="/create-circle" element={<CreateCircle />} />
              {/* <Route path="/edit-circle" element={<EditCircle />} /> */}
              <Route path="/contribution" element={<ContributionGrid />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/settings" element={<Settings />} />

              <Route path="*" element={<h2>404 Page not found.</h2>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function EditCircle() {
  return <h2>Edit Circle Page</h2>;
}
function CreateUser() {
  return <h2>Create User Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}
