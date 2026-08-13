import React, { useEffect, useRef, useState } from "react";
import { FaHome, FaGithub, FaLinkedin, FaYoutube, FaFileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const dockRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  const dockItems = [
    { icon: FaHome, label: "Home", href: "#" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/ANUBHAVSINGH30" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/singh--anubhav-/" },
    { icon: FaXTwitter, label: "X", href: "https://x.com/anubhavSingh_30" },
    { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
    { icon: FaFileAlt, label: "Resume", href: "/AnubhavSingh_Resume.pdf", newTab: true },
  ];

  const getScale = (index) => {
    if (hoveredIndex === null) return 1;
    if (index === hoveredIndex) return 1.2;
    return 1;
  };

  useEffect(() => {
    if (hoveredIndex !== dockItems.length) return;

    const timer = setTimeout(() => setHoveredIndex(null), 2000);
    return () => clearTimeout(timer);
  }, [hoveredIndex, dockItems.length]);

  useEffect(() => {
    const handleScroll = () => setHoveredIndex(null);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dockRef.current?.contains(event.target)) return;
      setHoveredIndex(null);
    };

    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dockRef} className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full flex justify-center">
      <div className="w-fit max-w-full flex items-center gap-1 min-[390px]:gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-full px-2 min-[390px]:px-5 py-1 shadow-lg">
        {/* Social Links */}
        {dockItems.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className="relative flex items-end"
              style={{
                transform: `scale(${getScale(index)})`,
                transition: "transform 0.2s ease-out",
              }}
            >
              <a
                href={item.href}
                target={item.newTab || item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex items-center justify-center w-9 h-9 min-[390px]:w-10 min-[390px]:h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                <item.icon className="text-xl min-[390px]:text-[1.5rem]" />
              </a>

              {/* Tooltip */}
              {hoveredIndex === index && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45" />
                </div>
              )}
            </div>

            {/* Divider after YouTube */}
            {index === 4 && (
              <div className="w-px h-8 shrink-0 bg-gray-300 dark:bg-gray-600 mx-1" />
            )}
          </React.Fragment>
        ))}

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          onMouseEnter={() => setHoveredIndex(dockItems.length)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative flex items-center justify-center w-9 h-9 min-[390px]:w-10 min-[4390px]:h-10  rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          style={{
            transform: `scale(${hoveredIndex === dockItems.length ? 1.2 : 1})`,
            transition: "transform 0.2s ease-out",
          }}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-4 h-4 min-[430px]:w-5 min-[39m0px]:h-5" />
          ) : (
            <Moon className="w-4 h-4 min-[430px]:w-5 min-[390px]:h-5" />
          )}

          {/* Tooltip */}
          {hoveredIndex === dockItems.length && (
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
              {isDark ? "Light Mode" : "Dark Mode"}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Dock;
