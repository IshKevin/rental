import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <nav className="bg-purple-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">LaLa Rentals</Link>
        
        <ul className="flex space-x-4">
          <li>
            <Link 
              to="/" 
              className={`hover:underline ${location.pathname === "/" ? "font-bold" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/properties" 
              className={`hover:underline ${location.pathname === "/properties" ? "font-bold" : ""}`}
            >
              Properties
            </Link>
          </li>
          
          {isAuthenticated ? (
            <>
              <li>
                <Link 
                  to="/dashboard" 
                  className={`hover:underline ${location.pathname === "/dashboard" ? "font-bold" : ""}`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setIsAuthenticated(false)} 
                  className="bg-red-500 px-4 py-1 rounded"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link 
                  to="/login" 
                  className={`hover:underline ${location.pathname === "/login" ? "font-bold" : ""}`}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className={`hover:underline ${location.pathname === "/register" ? "font-bold" : ""}`}
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
