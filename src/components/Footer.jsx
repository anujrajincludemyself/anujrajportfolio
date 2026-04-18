import React from 'react';
import { Github, Linkedin, Mail, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-4 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-heading font-bold text-gradient mb-2">Anuj Raj</h2>
          <p className="text-text/60 text-sm">Crafting best-in-class experiences.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://www.buymeacoffee.com/anujraj"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#FFDD00]/10 text-[#FFDD00] border border-[#FFDD00]/20 rounded-full hover:bg-[#FFDD00]/20 transition-colors font-medium text-sm mr-0 sm:mr-4"
          >
            <Coffee className="w-4 h-4" />
            Buy me a coffee
          </a>
          
          <div className="flex gap-4">
            <a href="mailto:anujraj24go@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/anujrajincludemyself" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anujrajmish" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-text/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Anuj Raj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
