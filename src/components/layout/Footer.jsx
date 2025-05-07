import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Digital Tasbih. All rights reserved.</p>
        <p className="text-sm mt-2 text-blue-200">
          "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ" - Quran 13:28
        </p>
      </div>
    </footer>
  );
}

export default Footer;
