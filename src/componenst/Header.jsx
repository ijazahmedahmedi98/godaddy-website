import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center relative">

      {/* Logo */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold">GoDaddy</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-sm">
        {[
          { name: "Domains", dropdown: true },
          { name: "Websites", dropdown: true },
          { name: "Email", dropdown: false },
          { name: "Hosting", dropdown: true },
          { name: "Marketing", dropdown: true },
          { name: "Security", dropdown: true },
          { name: "GoDaddy Airo", dropdown: false },
          { name: "Pricing", dropdown: false },
        ].map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-1 cursor-pointer hover:text-gray-400"
          >
            <Link to="#">{item.name}</Link>
            {item.dropdown && <RiArrowDropDownLine size={18} />}
          </li>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        <p className="cursor-pointer hover:text-gray-400">Contact us</p>
        <p className="cursor-pointer hover:text-gray-400">Help</p>
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
          <button className="border px-3 py-1 rounded-md">Sign In</button>
          <RiArrowDropDownLine size={18} />
        </div>
        <PiShoppingCartSimpleBold
          size={22}
          className="cursor-pointer hover:text-gray-400"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-start p-4 gap-4 md:hidden z-50">
          {[
            { name: "Domains", dropdown: true },
            { name: "Websites", dropdown: true },
            { name: "Email", dropdown: false },
            { name: "Hosting", dropdown: true },
            { name: "Marketing", dropdown: true },
            { name: "Security", dropdown: true },
            { name: "GoDaddy Airo", dropdown: false },
            { name: "Pricing", dropdown: false },
          ].map((item) => (
            <Link
              key={item.name}
              to="#"
              className="flex items-center gap-1 w-full hover:text-gray-400"
            >
              {item.name}
              {item.dropdown && <RiArrowDropDownLine size={18} />}
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-4 border-t border-gray-700 pt-4 w-full">
            <p className="cursor-pointer hover:text-gray-400">Contact us</p>
            <p className="cursor-pointer hover:text-gray-400">Help</p>
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
              <button className="border px-3 py-1 rounded-md">Sign In</button>
              <RiArrowDropDownLine size={18} />
            </div>
            <PiShoppingCartSimpleBold
              size={22}
              className="cursor-pointer hover:text-gray-400"
            />
          </div>
        </div>
      )}
    </header>
  );
};