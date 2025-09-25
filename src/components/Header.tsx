import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../dist/assets/logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); // desktop dropdown
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close dropdown on outside click (desktop)
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!projectsRef.current?.contains(e.target as Node)) setIsProjectsOpen(false);
    }
    if (isProjectsOpen) document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [isProjectsOpen]);

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#value', label: 'Value' },
    { href: '#impact', label: 'Impact' },
    { href: '#vision', label: 'Vision' },
    { href: '#contact', label: 'Contact' }
  ];

  const textColor = isScrolled ? 'text-slate-800' : 'text-white';
  const linkColor = isScrolled ? 'text-slate-700' : 'text-white/90';

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${textColor}`}>
              Verity
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium hover:text-teal-500 transition-colors duration-300 ${linkColor}`}
              >
                {item.label}
              </a>
            ))}

            {/* Projects dropdown (desktop) */}
            {/* Projects dropdown (desktop) */}
<div
  className="relative"
  ref={projectsRef}
  onMouseEnter={() => setIsProjectsOpen(true)}
  onMouseLeave={() => setIsProjectsOpen(false)}
>
  <button
    type="button"
    className={`inline-flex items-center gap-1 font-medium transition-colors duration-300 ${linkColor} hover:text-teal-500`}
    aria-haspopup="menu"
    aria-expanded={isProjectsOpen}
  >
    Projects <ChevronDown className="w-4 h-4" />
  </button>

  {isProjectsOpen && (
    <div
      className="absolute right-0 top-full w-56 rounded-lg border bg-white shadow-lg ring-1 ring-black/5"
      // keep it open if cursor is on the menu
      onMouseEnter={() => setIsProjectsOpen(true)}
      onMouseLeave={() => setIsProjectsOpen(false)}
    >
      <div className="py-2">
        <Link
          to="/projects/OneParanaque"
          className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600"
          onClick={() => setIsProjectsOpen(false)}
        >
          One Parañaque
        </Link>
        {/* add more project links here */}
      </div>
    </div>
  )}
</div>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${textColor}`} />
            ) : (
              <Menu className={`w-6 h-6 ${textColor}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Projects (mobile) */}
            <div className="mt-2 border-t pt-2">
              <div className="px-4 pb-1 text-xs font-semibold uppercase text-slate-400">Projects</div>
              <Link
                to="/projects/OneParanaque"
                className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                One Parañaque
              </Link>
            </div>

            {/* Optional CTA */}
            {/* <div className="px-4 py-2">
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                Request Demo
              </button>
            </div> */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
