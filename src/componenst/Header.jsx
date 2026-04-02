import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">

     
      <div className="flex items-center gap-10">
        

        <h1 className="text-xl font-bold">GoDaddy</h1>

        <ul className="flex items-center gap-6 text-sm">
          
          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
            <Link to="#">Domains</Link>
            <RiArrowDropDownLine size={20} />
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
            <Link to="#">Websites</Link>
            <RiArrowDropDownLine size={20} />
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
            <Link to="#">Email</Link>
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
            <Link to="#">Hosting</Link>
            <RiArrowDropDownLine size={20} />
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
            <Link to="#">Marketing</Link>
            <RiArrowDropDownLine size={20} />
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
            <Link to="#">Security</Link>
            <RiArrowDropDownLine size={20} />
          </li>

          <li className="cursor-pointer hover:text-gray-400">
            <Link to="#">GoDaddy Airo</Link>
          </li>

          <li className="cursor-pointer hover:text-gray-400">
            <Link to="#">Pricing</Link>
          </li>

        </ul>
      </div>


      <div className="flex items-center gap-6 text-sm">
        
        <p className="cursor-pointer hover:text-gray-400">Contact us</p>
        <p className="cursor-pointer hover:text-gray-400">Help</p>

        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
          <button>Sign In</button>
          <RiArrowDropDownLine size={20} />
        </div>

        <PiShoppingCartSimpleBold size={22} className="cursor-pointer hover:text-gray-400" />

      </div>

    </header>
  );
};