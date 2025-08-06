import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
            Rakt<span className="text-red-500">Mittra</span>
          </h2>
          <nav className="flex gap-6 text-sm">
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
        </div>
        <div className="border-t border-gray-700 my-4"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} RaktMittra. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
