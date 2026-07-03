import { useState, useEffect } from 'react';
import { Menu, X, Shield, Cpu } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-dark/95 border-b border-cyber-border/80 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <a
            href="#about"
            className="flex items-center space-x-2 group focus:outline-none"
            id="nav-logo"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded bg-cyber-dark border border-cyber-teal/30 group-hover:border-cyber-teal transition-colors duration-300">
              <Shield className="w-5 h-5 text-cyber-teal group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-0.5 bg-cyber-teal/20 rounded blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold tracking-wider text-white text-base leading-none">
                YOSEF YGEZU
              </span>
              <span className="font-mono text-[9px] text-cyber-teal tracking-widest mt-1">
                SECURE SYS & NET
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-xs tracking-wider uppercase text-slate-400 hover:text-cyber-teal hover:text-glow transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-cyber-teal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded font-mono text-xs font-semibold text-cyber-dark bg-cyber-teal hover:bg-transparent hover:text-cyber-teal border border-cyber-teal transition-all duration-300"
            >
              SECURE CONNECT
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-cyber-teal hover:bg-cyber-card-light/40 focus:outline-none"
              aria-expanded="false"
              id="mobile-menu-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-350 ease-in-out ${
          isOpen ? 'max-h-screen border-b border-cyber-border bg-cyber-dark/98 backdrop-blur-lg' : 'max-h-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-sans font-medium text-sm tracking-wider uppercase text-slate-300 hover:text-cyber-teal py-2 border-b border-cyber-border/40"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center px-4 py-3 rounded font-mono text-xs font-bold text-cyber-dark bg-cyber-teal hover:bg-cyber-teal/80 transition-colors"
          >
            SECURE CONNECT
          </a>
        </div>
      </div>
    </header>
  );
}
