import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/5 mt-24">
      
      {/* Top Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
        w-400 h-50 bg-background blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-12">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">
              Youcef Larbi
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Have an idea? Let’s make it real.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            
            <a
              href="https://github.com/Youcef14-l"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:larbi5youcef@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-background" />

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Youcef Larbi. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
