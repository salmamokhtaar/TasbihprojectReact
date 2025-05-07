import React from 'react';

function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Digital Tasbih</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="" className="hover:text-blue-200 transition-colors">Home</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-200 transition-colors">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
