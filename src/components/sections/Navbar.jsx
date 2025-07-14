import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <a href="#home" className="font-mono text-xl font-bold text-white">
            😊
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            "Turning Ideas Into Code.."
            </span>
          </a>

          {/* Mobile Menu Icon */}
          <div
            className="w-8 h-6 relative flex flex-col justify-between cursor-pointer z-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block h-[2px] bg-white" />
            <span className="block h-[2px] bg-white" />
            <span className="block h-[2px] bg-white" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Socials & Contact</a>
          </div>
        </div>
      </div>

    
      <div className="h-[2px] w-full bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-[0_0_10px_#ccc]" />
    </nav>
  );
};
