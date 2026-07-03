import { Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-transparent border-t border-cyber-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-cyber-teal" />
            <div className="flex flex-col">
              <span className="font-sans font-bold tracking-wider text-white text-sm leading-none">
                YOSEF YGEZU GIRMA
              </span>
              <span className="font-mono text-[8px] text-cyber-teal tracking-widest mt-1">
                IS PROFESSIONAL & NETWORK ENGINEER
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs text-slate-500 hover:text-cyber-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="mt-8 pt-8 border-t border-cyber-border/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-sans text-3xs text-slate-500 uppercase tracking-wider">
            &copy; {currentYear} Yosef Ygezu Girma. All rights reserved.
          </p>
          <p className="font-mono text-[9px] text-slate-600 tracking-wider">
            AUTHENTIC EXECUTIVE CODEBASE PORTFOLIO // NORTH SHEWA, ETHIOPIA
          </p>
        </div>

      </div>
    </footer>
  );
}
