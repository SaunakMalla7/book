import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="navbar-brand ml-5">
              React Redux Contact Book
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
