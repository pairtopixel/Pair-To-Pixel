import React, { useState } from "react";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1E1E1E] via-[#2B1C1C] to-[#000000] text-white">
      {/* Sidebar - overlays content */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Dark overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-500"
        ></div>
      )}

      {/* Main content stays fixed */}
      <main className="relative z-10 min-h-screen  transition-all duration-500 ease-in-out">
        <Hero />
      </main>
    </div>
  );
};

export default App;
