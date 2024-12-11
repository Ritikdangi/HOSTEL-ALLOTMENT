import React from 'react';

function Navbar() {
  return (
    <div className="bg-blue-600 text-white shadow-lg">
      <ul className="flex justify-around p-4">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Register</li>
        <li className="hover:underline cursor-pointer">Admin</li>
        <li className="hover:underline cursor-pointer">Notices</li>
      </ul>
    </div>
  );
}

export default Navbar;
