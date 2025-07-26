import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger and close icons
// 👉 install if not installed: npm install lucide-react

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#3B82F6] text-white font-poppins">
      {/* Desktop / Main Navbar */}
      <div className="flex justify-between items-center px-6 py-4 md:justify-around relative">
        {/* Logo */}
        <div className="text-2xl font-semibold text-center">TRACKMYPREP</div>

        {/* Links (hidden on mobile) */}
        <div className="hidden md:flex justify-around items-center gap-6">
          <div className="cursor-pointer hover:text-yellow-300 transition-colors duration-200">
            Topic - Wise Paper
          </div>
          <div className="cursor-pointer hover:text-yellow-300 transition-colors duration-200">
            Mock Exam
          </div>
          <div className="cursor-pointer hover:text-yellow-300 transition-colors duration-200">
            Past Papers
          </div>
        </div>

        {/* Login / Register (hidden on mobile) */}
        <div className="hidden md:flex gap-4 items-center">
          <div className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#3B82F6] cursor-pointer transition-colors">
            Login
          </div>
          <div className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#3B82F6] cursor-pointer transition-colors">
            Register
          </div>
        </div>

        {/* Hamburger Button (visible on mobile) */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              size={32}
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              size={32}
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-[#3B82F6] py-6 border-t border-white">
          <div className="cursor-pointer hover:text-yellow-300 transition-colors duration-200">
            Topic - Wise Paper
          </div>
          <div className="cursor-pointer hover:text-yellow-300 transition-colors duration-200">
            Mock Exam
          </div>
          <div className="cursor-pointer hover:text-yellow-300 transition-colors duration-200">
            Past Papers
          </div>
          <div className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#3B82F6] cursor-pointer transition-colors">
            Login
          </div>
          <div className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#3B82F6] cursor-pointer transition-colors">
            Register
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
