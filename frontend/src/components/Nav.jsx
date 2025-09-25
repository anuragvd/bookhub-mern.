import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Nav(){
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="bg-white shadow">
      <div className="container flex items-center justify-between py-3">
        <div>
          <Link to="/" className="text-xl font-bold text-blue-600">BookHub</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="hidden sm:inline">Home</Link>
          {user ? (
            <>
              <span className="text-sm">Hi, {user.name}</span>
              <button onClick={logout} className="text-sm text-red-500">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-sm text-blue-600">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
