import React, { useState } from "react";
import { FaHome, FaGithub, FaLinkedin, FaYoutube, FaFileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isDark, toggleTheme } = useTheme();

  const dockItems = [
    { icon: FaHome, label: "Home", href: "#" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/ANUBHAVSINGH30" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/singh--anubhav-/" },
    { icon: FaXTwitter, label: "X", href: "https://x.com/anubhavSingh_30" },
    { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
    { icon: FaFileAlt, label: "Resume", href: "/resume.pdf", download: true },
  ];

  // Calculate scale based on distance from hovered icon
  const getScale = (index) => {
    if (hoveredIndex === null) return 1;
    if (index === hoveredIndex) return 1.2; // Only hovered icon
    return 1; // All others stay normal
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-full px-4 py-1 shadow-lg">
        {/* Social Links */}
        {dockItems.map((item, index) => (
          <>
            <div 
              key={index} 
              className="relative flex items-end"
              style={{
                transform: `scale(${getScale(index)})`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                download={item.download}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                <item.icon className="text-2xl" />
              </a>
              
              {/* Tooltip */}
              {hoveredIndex === index && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45" />
                </div>
              )}
            </div>
            
            {/* Divider after YouTube (index 4) */}
            {index === 4 && <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 mx-1" />}
          </>
        ))}

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          onMouseEnter={() => setHoveredIndex(dockItems.length)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          style={{
            transform: `scale(${hoveredIndex === dockItems.length ? 1.2 : 1})`,
            transition: 'transform 0.2s ease-out',
          }}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          
          {/* Tooltip */}
          {hoveredIndex === dockItems.length && (
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
              {isDark ? 'Light Mode' : 'Dark Mode'}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Dock;
