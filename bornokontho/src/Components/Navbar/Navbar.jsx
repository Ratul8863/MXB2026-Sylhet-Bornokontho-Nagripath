import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Logo from "./Logo/Logo";

export default function Navbar({ cuser }) {
  const { user, logOut } = useAuth();

  const navItems = (
    <>
      <li><NavLink to="/" className="ancient-link">Home</NavLink></li>
      <li><NavLink to="/show" className="ancient-link">Letters</NavLink></li>
      <li><NavLink to="/converter" className="ancient-link">Converter</NavLink></li>
      <li><NavLink to="/history" className="ancient-link">History</NavLink></li>
      <li><NavLink to="/about" className="ancient-link">About</NavLink></li>
      <li><NavLink to="/play-game" className="ancient-link">Play Game</NavLink></li>
      {cuser?.role === "admin" && (
        <li><NavLink to="/add" className="ancient-link">Add</NavLink></li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-[#1c1a14] border-b border-[#3a3324]">
      <div className="navbar md:max-w-7xl mx-auto text-[#f5f0e6]">

        {/* ================= LEFT: LOGO ================= */}
        <div className="navbar-start">
          <Link
            to="/"
            className="text-2xl font-serif tracking-wider text-[#c2a24a] hover:text-[#e0c46c] transition"
          >
            <Logo />
          </Link>
        </div>

        {/* ================= CENTER: DESKTOP MENU ================= */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">
            {navItems}
          </ul>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="navbar-end gap-2">

          {/* ===== Desktop Auth ===== */}
          <div className="hidden lg:flex gap-2">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-sm bg-transparent border border-[#c2a24a] text-[#c2a24a] hover:bg-[#c2a24a] hover:text-black"
                >
                  Login
                </Link>
                <Link
                  to="/signin"
                  className="btn btn-sm bg-[#c2a24a] text-black hover:bg-[#b0903f]"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full border border-[#c2a24a]">
                    <img
                      src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                      alt="user"
                    />
                  </div>
                </label>
                <ul className="menu menu-sm dropdown-content mt-3 p-3 w-56 bg-[#2a261d] border border-[#3a3324] rounded-md shadow-xl">
                  <li className="pointer-events-none">
                    <span className="font-semibold">{user.displayName || "User"}</span>
                    <span className="text-xs text-gray-400">{user.email}</span>
                  </li>
                  <div className="divider my-1"></div>
                  <li>
                    <button onClick={logOut} className="text-red-400 hover:bg-red-500/10">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* ===== Mobile Hamburger ===== */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost text-[#c2a24a]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </label>

            <ul className="menu menu-sm dropdown-content right-0 mt-3 z-[5] p-4 w-56 bg-[#2a261d] border border-[#3a3324] rounded-md shadow-xl gap-3">
              {navItems}

              {!user ? (
                <>
                  <Link to="/login" className="btn btn-sm w-full border border-[#c2a24a] text-[#c2a24a]">
                    Login
                  </Link>
                  <Link to="/signin" className="btn btn-sm w-full bg-[#c2a24a] text-black">
                    Sign Up
                  </Link>
                </>
              ) : (
                <button onClick={logOut} className="btn btn-sm w-full bg-red-500 text-white">
                  Logout
                </button>
              )}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
