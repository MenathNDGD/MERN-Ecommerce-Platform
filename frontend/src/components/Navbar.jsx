import React from "react";

import {
  ShoppingCart,
  UserPlus,
  LogIn,
  LogOut,
  Lock,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();

  return (
    <header className="fixed top-0 left-0 z-40 w-full transition-all duration-300 bg-gray-900 border-b shadow-lg bg-opacity-90 backdrop-blur-md border-emerald-800">
      <div className="container px-4 py-3 mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <Link
            to={"/"}
            className="flex items-center space-x-2 text-2xl font-bold text-emerald-400"
          >
            E-Market Hub
          </Link>

          <nav className="flex flex-wrap items-center gap-8 text-lg font-semibold">
            <Link
              to={"/"}
              className="flex items-center text-gray-300 transition duration-300 ease-in-out hover:text-emerald-400"
            >
              <Home className="mr-1 group-hover:text-emerald-400" size={20} />
              Home
            </Link>

            {user && (
              <Link
                to={"/cart"}
                className="relative flex items-center text-gray-300 transition duration-300 ease-in-out group hover:text-emerald-400"
              >
                <ShoppingCart
                  className="inline-block mr-1 group-hover:text-emerald-400"
                  size={20}
                />
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <>
                    <span className="absolute px-2 text-white rounded-full -top-2 -left-2 bg-emerald-500 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
                      {cart.length}
                    </span>
                  </>
                )}
              </Link>
            )}

            {isAdmin && (
              <Link
                to={"/secret-dashboard"}
                className="flex items-center px-4 py-2 font-medium text-white transition duration-300 ease-in-out rounded-md bg-emerald-700 hover:bg-emerald-600"
              >
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {user ? (
              <button
                className="flex items-center px-4 py-2 text-white transition duration-300 ease-in-out bg-gray-700 rounded-md hover:bg-gray-600"
                onClick={logout}
              >
                <LogOut size={18} />
                <span className="hidden ml-2 sm:inline">Log Out</span>
              </button>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="flex items-center px-4 py-2 text-white transition duration-300 ease-in-out rounded-md bg-emerald-700 hover:bg-emerald-600"
                >
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="flex items-center px-4 py-2 text-white transition duration-300 ease-in-out bg-gray-700 rounded-md hover:bg-gray-600"
                >
                  <LogIn className="mr-2" size={18} />
                  Log In
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
