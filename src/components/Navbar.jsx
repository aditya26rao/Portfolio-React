import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar({ isDarkMode, onToggleTheme }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home">B. Aditya Rao</a>
      <nav>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact" className="nav-cta">Contact</a>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDarkMode ? 'Light mode' : 'Dark mode'}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}
