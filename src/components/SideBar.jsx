// import React, { useState } from 'react';

// export function SideBar() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
//       <button className="toggle-btn" onClick={() => setIsOpen(prev => !prev)}>
//         {isOpen ? '⬅️' : '➡️'}
//       </button>

//       {isOpen ? (
//         <ul>
//           <li>✅ Create Circle</li>
//           <li>📃 Edit Circle</li>
//           <li>📊 Analyze</li>
//           <li>⚙️ Settings</li>
//         </ul>
//       ) : (
//         <ul>
//           <li title="CCircle">✅</li>
//           <li title="ECircle">📃</li>
//           <li title="Analyze">📊</li>
//           <li title="Settings">⚙️</li>
//         </ul>
//       )}
//     </div>
//   );
// }

// SideBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '⬅️' : '➡️'}
      </button>
      <ul>
        <li>
          <Link to="/create-circle">✅ {isOpen && 'Create Circle'}</Link>
        </li>
        <li>
          <Link to="/create-user">👤 {isOpen && 'Create User'}</Link>
        </li>
        <li>
          <Link to="/analyze">📊 {isOpen && 'Analyze'}</Link>
        </li>
        <li>
          <Link to="/settings">⚙️ {isOpen && 'Settings'}</Link>
        </li>
      </ul>
    </div>
  );
}
