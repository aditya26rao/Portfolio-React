import { useEffect, useState } from 'react';
import './App.css';
import profileImage from './assets/Athentic.png';
import { skills, projects, socialLinks } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Skills } from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('portfolio-theme');
    return stored ? stored === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="portfolio-app">
      <Navbar isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)} />

      <main>
        <Hero profileImage={profileImage} />
        <Skills skills={skills} />
        <Projects projects={projects} githubProfile={socialLinks.github} />
        <About />
        <Contact links={socialLinks} />
      </main>

      <Footer />
    </div>
  );
}
