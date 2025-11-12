import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-24 text-gray-300 px-8 md:px-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">About Me</h3>
          <p className="text-sm leading-relaxed">
            Do you want to be even more successful? Learn to love learning and growth.
            The more effort you put into improving your skills, the greater your success will be.
          </p>
          <p className="text-xs text-gray-500 mt-6">
            Copyright ©2025 All rights reserved | This template is made with <span className="text-pink-500">❤</span> by{' '}
            <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Colorlib</a>
          </p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-4">Stay updated with our latest trends</p>
          <div className="flex items-center bg-gray-900 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 bg-gray-900 border-none outline-none px-3 py-2 text-gray-300 placeholder-gray-500"
            />
            <button className="bg-linear-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-white">→</button>
          </div>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Follow Me</h3>
          <p className="text-sm mb-4">Let us be social</p>
          <div className="flex space-x-5 text-gray-400">
            <a href="#" className="hover:text-white transition">FB</a>
            <a href="#" className="hover:text-white transition">TW</a>
            <a href="#" className="hover:text-white transition">DB</a>
            <a href="#" className="hover:text-white transition">BE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}