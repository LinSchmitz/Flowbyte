// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> 📊 Flowbyte</Link>
      </div>
      <h4>Success doesn't come from intensity, it comes from consistency.</h4>
      <div className="profile-icon">👤</div>
    </header>
  );
}
