import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Building, LayoutDashboard, LogIn, UserPlus, LogOut } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/properties", label: "Properties", icon: Building },
    ...(isAuthenticated 
      ? [{ to: "/dashboard", label: "Dashboard", icon: LayoutDashboard }]
      : [
          { to: "/login", label: "Login", icon: LogIn },
          { to: "/register", label: "Register", icon: UserPlus }
        ]
    )
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                LaLa Rentals
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 group
                  ${isActive(to) 
                    ? 'bg-white/10 text-white' 
                    : 'hover:bg-white/5 text-blue-100'}`}
              >
                <Icon className={`w-4 h-4 ${isActive(to) ? 'text-blue-200' : 'group-hover:text-blue-200'}`} />
                <span>{label}</span>
              </Link>
            ))}
            
            {isAuthenticated && (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors duration-200 flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`block px-3 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-3
                  ${isActive(to)
                    ? 'bg-white/10 text-white'
                    : 'text-blue-100 hover:bg-white/5'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
            
            {isAuthenticated && (
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors duration-200 flex items-center space-x-3"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}