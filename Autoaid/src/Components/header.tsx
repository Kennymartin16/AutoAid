import { useState } from "react";
import bar3 from "/home-images/icons/bar3.svg";
import xmark from "/home-images/icons/xmark.svg";
import NavLink from "./Navlink";
import MenuOverlay from "./MenuOverlay";
import Autoaid from "/Autoaid.png";

export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

interface HeaderProps {
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({isVisible}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav
    className={`max-w-full fixed top-0 left-0 right-0 z-10 px-4 bg-[#121212] bg-opacity-90 transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <img src={Autoaid} alt="logo" className="w-20 h-20" />
          <p className="text-2xl font-bold text-white">AutoAid</p>
        </div>
        <div className="mobile-view block md:hidden">
          {navbarOpen ? (
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <img src={xmark} className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <img src={bar3} className="h-5 w-5" />
            </button>
          )}
        </div>
        <div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Header;
