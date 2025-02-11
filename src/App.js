import React, { useState, useEffect } from 'react';
import { Terminal, Code, Brain, Mail, Github, Linkedin, FileText, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      const isScrolledToTop = currentScrollPos < 10;

      setVisible(!isScrollingDown || isScrolledToTop);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const projects = [
    {
      title: "Farm Anna",
      description: "An AI-driven platform for crop disease detection and geospatial analysis to support farmers.",
      tags: ["Python", "TensorFlow", "React"],
      type: "ML"
    },
    {
      title: "TheFourthWall.club",
      description: "A platform with live brainstorming whiteboards, Slack-like clubs, and AI/finance blogs targeted at Gen Z.",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      type: "Web"
    },
    {
      title: "Pen Pad",
      description: "An OCR-powered app that converts handwritten documents into question papers in desired formats, streamlining the process for educators.",
      tags: ["Python", "PostgreSQL", "Tesseract OCR"],
      type: "ML"
    }
  ];

  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Code is like humor. When you have to explain it, it's bad. - Cory House",
    "First, solve the problem. Then, write the code. - John Johnson",
  ];

  const dailyQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      <header 
        className={`border-b border-green-400 p-6 fixed w-full top-0 bg-gray-900 z-50 transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">&gt; VARUNNN.exe</h1>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-white transition-colors"
            >
              ./about
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-white transition-colors"
            >
              ./projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-white transition-colors"
            >
              ./contact
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 border-t border-green-400 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-white transition-colors text-left px-2 py-1 hover:bg-gray-800 rounded"
              >
                ./about
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-white transition-colors text-left px-2 py-1 hover:bg-gray-800 rounded"
              >
                ./projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-white transition-colors text-left px-2 py-1 hover:bg-gray-800 rounded"
              >
                ./contact
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Add padding to prevent content from hiding under fixed header */}
      <div className="h-24" />

      <main className="max-w-4xl mx-auto p-6 space-y-24">
        <section id="about" className="space-y-6 pt-6">
          <div className="border border-green-400 p-6">
            <h2 className="text-xl mb-4 flex items-center">
              <Terminal className="mr-2" /> About System
            </h2>
            <p className="mb-4">
              &gt; Full-stack developer and machine learning enthusiast with a passion for combining web technologies and AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-green-400 p-4">
                <h3 className="flex items-center mb-2">
                  <Code className="mr-2" /> Web Stack
                </h3>
                <p>React.js • Node.js • MongoDB • Next.js • TypeScript</p>
              </div>
              <div className="border border-green-400 p-4">
                <h3 className="flex items-center mb-2">
                  <Brain className="mr-2" /> ML Stack
                </h3>
                <p>Python • TensorFlow • PyTorch • scikit-learn • NLTK</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="text-xl flex items-center">
            <Code className="mr-2" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-green-400 p-4 hover:bg-gray-800 transition-colors duration-200">
                <h3 className="text-lg mb-2">{project.title}</h3>
                <p className="mb-2 text-green-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs border border-green-400 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-6">
          <div className="border border-green-400 p-6">
            <h2 className="text-xl mb-4 flex items-center">
              <Mail className="mr-2" /> Contact Interface
            </h2>
            <div className="space-y-4">
              <a href="#" className="flex items-center hover:text-white">
                <Github className="mr-2" /> github.com/varunnn
              </a>
              <a href="#" className="flex items-center hover:text-white">
                <Linkedin className="mr-2" /> linkedin.com/in/varunnn
              </a>
              <a href="#" className="flex items-center hover:text-white">
                <Mail className="mr-2" /> varun@example.com
              </a>
              <a href="#" className="flex items-center hover:text-white">
                <FileText className="mr-2" /> Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="border-t border-green-400 bg-gray-900">
        <div className="max-w-4xl mx-auto p-6">
          <div className="border border-green-400 p-4">
            <h2 className="text-lg mb-2 flex items-center">
              <Terminal className="mr-2" /> Quote of the Day
            </h2>
            <p className="text-green-300">&gt; {dailyQuote}</p>
          </div>
        </div>

        <footer className="border-t border-green-400 p-6">
          <div className="max-w-4xl mx-auto text-sm">
            <p>&gt; Last updated: {new Date().toLocaleDateString()}</p>
            <p className="animate-pulse">&gt; _</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;