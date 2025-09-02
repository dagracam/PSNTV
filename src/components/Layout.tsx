import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Search, Menu, Facebook, Youtube, Instagram } from "lucide-react";
import XIcon from "./XIcon"; // Importa il nuovo componente XIcon
import TikTokIcon from "./TikTokIcon"; // Importa il nuovo componente TikTokIcon
import SearchDialog from "./SearchDialog";
import MoreMenuDialog from "./MoreMenuDialog";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [isMoreMenuDialogOpen, setIsMoreMenuDialogOpen] = useState(false);

  return (
    <div className="min-h-screen text-dyad-text flex flex-col">
      <header className="sticky top-0 z-40 w-full bg-[var(--dyad-footer-bg)] backdrop-blur-sm border-b border-dyad-border">
        <div className="container mx-auto h-16 flex items-center justify-between px-4">
          <Link to="/" className="flex items-center">
            <img src="/logo-psn-2025.png" alt="PSN Logo" className="h-10" />
          </Link>
          {/* Icone per desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Social Media Icons */}
            <a href="https://x.com/PerSempre_News" target="_blank" rel="noopener noreferrer" className="text-dyad-text/70 hover:text-dyad-link-blue group">
              <XIcon className="h-5 w-5" /> {/* Usa XIcon */}
            </a>
            <a href="https://www.facebook.com/persemprenews" target="_blank" rel="noopener noreferrer" className="text-dyad-text/70 hover:text-dyad-link-blue group">
              <Facebook className="h-5 w-5 align-middle" />
            </a>
            <a href="https://www.youtube.com/persemprenews" target="_blank" rel="noopener noreferrer" className="text-dyad-text/70 hover:text-dyad-link-blue group">
              <Youtube className="h-5 w-5 align-middle" />
            </a>
            <a href="https://www.instagram.com/persemprenews_/" target="_blank" rel="noopener noreferrer" className="text-dyad-text/70 hover:text-dyad-link-blue group">
              <Instagram className="h-5 w-5 align-middle" />
            </a>
            <a href="https://www.tiktok.com/@persemprenews" target="_blank" rel="noopener noreferrer" className="text-dyad-text/70 hover:text-dyad-link-blue group">
              <TikTokIcon className="h-5 w-5" /> {/* Usa TikTokIcon */}
            </a>

            <button
              onClick={() => setIsSearchDialogOpen(true)}
              className="flex items-center text-dyad-text/70 hover:text-dyad-link-blue group"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMoreMenuDialogOpen(true)}
              className="flex items-center text-dyad-text/70 hover:text-dyad-link-blue group"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 flex-grow">{children}</main>
      
      {/* Nuovo Footer per il contenuto principale */}
      <footer className="w-full bg-[var(--dyad-footer-bg)] backdrop-blur-sm border-t border-dyad-border p-8 mt-10 text-center hidden md:block">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          <img src="/logo-psn-2025.png" alt="PSN Logo" className="h-12" />
          <p className="text-sm">
            <a href="mailto:redazione@persemprenews.it" className="text-dyad-link-blue hover:underline">
              Contattaci
            </a>
          </p>
          <div className="text-sm text-dyad-text/70 space-y-1">
            <p>© 2025 - PSN - Tutti i diritti riservati. P.Iva 09786561218</p>
            <p>La Voce degli Ultimi Cooperativa Giornalistica - Sede legale: Via A. Camillo De Meis, 326 – 80147 – Napoli (NA)</p>
          </div>
        </div>
      </footer>

      {/* Footer di navigazione mobile esistente */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[var(--dyad-footer-bg)] backdrop-blur-sm border-t border-dyad-border p-4 md:hidden">
        <nav className="flex justify-around items-center">
          <Link to="/" className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-link-blue">
            <Home className="h-5 w-5" />
            Home
          </Link>
          <button
            onClick={() => setIsSearchDialogOpen(true)}
            className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-link-blue"
          >
            <Search className="h-5 w-5" />
            Cerca
          </button>
          <button
            onClick={() => setIsMoreMenuDialogOpen(true)}
            className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-link-blue"
          >
            <Menu className="h-5 w-5" />
            Altro
          </button>
        </nav>
      </footer>

      <SearchDialog
        isOpen={isSearchDialogOpen}
        onClose={() => setIsSearchDialogOpen(false)}
      />
      <MoreMenuDialog
        isOpen={isMoreMenuDialogOpen}
        onClose={() => setIsMoreMenuDialogOpen(false)}
      />
    </div>
  );
};

export default Layout;