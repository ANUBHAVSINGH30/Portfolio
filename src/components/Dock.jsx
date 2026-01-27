import React, { useState } from "react";
import { FaHome, FaGithub, FaLinkedin, FaYoutube, FaFileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 py-1 shadow-lg">
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
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-black"
              >
                <item.icon className="text-2xl" />
              </a>
              
              {/* Tooltip */}
              {hoveredIndex === index && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                </div>
              )}
            </div>
            
            {/* Divider after YouTube (index 4) */}
            {index === 4 && <div className="w-px h-8 bg-gray-300 mx-1" />}
          </>
        ))}
      </div>
    </div>
  );
}

export default Dock;
