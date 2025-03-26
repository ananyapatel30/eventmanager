import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-bold text-yellow-400 font-satisfy">
            Event Manager
          </span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-yellow-300 text-lg font-medium hover:text-yellow-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="text-yellow-300 text-lg font-medium hover:text-yellow-500 transition duration-300"
          >
            Create Event
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
