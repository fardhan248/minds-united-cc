import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase when backend is ready
    toast({
      title: "Terima kasih!",
      description: "Anda telah terdaftar di mailing list kami.",
    });
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MU</span>
              </div>
              <span className="text-lg font-bold">Minds United</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Komunitas dukungan, pelatihan, dan sumber daya untuk kesehatan mental dan pertumbuhan pribadi.
            </p>
            <a 
              href="https://www.instagram.com/kami.mindsunited/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-smooth"
              aria-label="Follow kami di Instagram"
            >
              <Instagram className="w-5 h-5" />
              Follow kami di Instagram
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-smooth">Beranda</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-smooth">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/ebook" className="hover:text-white transition-smooth">E-Book</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-smooth">Program</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-smooth">Kegiatan</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-smooth">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>VOffice BYE, Jl. Terusan Jakarta No.404, Sukamiskin, Kec. Arcamanik, Kota Bandung</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hello@mindsunited.id" className="hover:text-white transition-smooth">
                  hello@mindsunited.id
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Mailing List</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Dapatkan update terbaru tentang program dan kegiatan kami.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button type="submit" variant="outline-light" className="w-full">
                Daftar
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>© {currentYear} Minds United — Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
