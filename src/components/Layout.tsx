import React from "react";
import { Link } from "react-router-dom";
import { Home, Search, Bell, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dyad-bg text-dyad-text flex flex-col"> {/* Aggiunto flex-col per il layout */}
      <header className="sticky top-0 z-40 w-full bg-dyad-bg/80 backdrop-blur-sm border-b border-dyad-border">
        <div className="container mx-auto h-16 flex items-center justify-between px-4">
          <Link to="/" className="flex items-center">
            <img src="/logo-psn-2025.png" alt="PSN Logo" className="h-10" />
          </Link>
          {/* Qui potresti aggiungere la navigazione principale */}
        </div>
      </header>
      <main className="container mx-auto px-4 flex-grow">{children}</main> {/* Aggiunto flex-grow */}
      
      {/* Nuovo Footer per il contenuto principale */}
      <footer className="w-full bg-dyad-bg/80 backdrop-blur-sm border-t border-dyad-border p-8 mt-10 text-center hidden md:block"> {/* Visibile solo su desktop */}
        <div className="container mx-auto flex flex-col items-center space-y-4">
          <img src="/logo-psn-2025.png" alt="PSN Logo" className="h-12" />
          <div className="text-sm text-dyad-text/70 space-y-1">
            <p>© 2025 - PSN - Tutti i diritti riservati. P.Iva 09786561218</p>
            <p>La Voce degli Ultimi Cooperativa Giornalistica - Sede legale: Via A. Camillo De Meis, 326 – 80147 – Napoli (NA)</p>
          </div>
        </div>
      </footer>

      {/* Footer di navigazione mobile esistente */}
      <footer className="fixed bottom-0 left-0 right-0 bg-dyad-bg/80 backdrop-blur-sm border-t border-dyad-border p-4 md:hidden">
        <nav className="flex justify-around items-center">
          <Link to="/" className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-text">
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link to="/search" className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-text">
            <Search className="h-5 w-5" />
            Cerca
          </Link>
          <Link to="/notifications" className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-text">
            <Bell className="h-5 w-5" />
            Notifiche
          </Link>
          <Link to="/profile" className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-text">
            <User className="h-5 w-5" />
            Profilo
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;