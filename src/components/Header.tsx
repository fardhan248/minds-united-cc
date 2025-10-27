import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/about", label: "Tentang Kami" },
    { path: "/ebook", label: "E-Book" },
    { path: "/programs", label: "Program" },
    { path: "/events", label: "Kegiatan" },
    { path: "/contact", label: "Kontak" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/kami.mindsunited/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-smooth"
              aria-label="Instagram Minds United"
            >
              <Instagram className="w-4 h-4" />
              <span className="hidden sm:inline">@kami.mindsunited</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@mindsunited.id" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">hello@mindsunited.id</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center transition-smooth group-hover:scale-110">
                <span className="text-white font-bold text-xl">MU</span>
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:inline">Minds United</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="default" size="sm" asChild>
                <Link to="/ebook">Unduh E-Book Gratis</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 rounded-lg transition-smooth ${
                    isActive(item.path) 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="default" className="w-full" asChild>
                <Link to="/ebook" onClick={() => setIsMenuOpen(false)}>
                  Unduh E-Book Gratis
                </Link>
              </Button>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
