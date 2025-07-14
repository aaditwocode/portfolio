
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${
                    menuOpen
                      ? "h-screen opacity-100 pointer-events-auto"
                      : "h-0 opacity-0 pointer-events-none"
                  }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      {["Home", "About", "Projects", "Contact"].map((label) => (
        <a
          key={label}
          href={`#${label.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
        >
          {label}
        </a>
      ))}

      {/* ✨ Silver Glow Line at Bottom */}
      <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-[0_0_10px_#ccc]" />
    </div>
  );
};
