import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import Home from './Home';

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
      <Outlet />

    
    </div>
  );
};

export default Navbar;
