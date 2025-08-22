import React from "react";
import { Link } from "react-router-dom";
import { MadeWithDyad } from "./made-with-dyad";
import logo from "../../public/LOGO PSN 2025 copia.png"; // Importa l'immagine

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-radial-gradient-dark-edges text-dyad-text">
      <header className="sticky top-0 z-40 w-full border-b border-dyad-text/20 bg-dyad-bg/40 backdrop-blur-sm p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center"> {/* Usa flex per allineare l'immagine */}
            <img src={logo} alt="PSN Logo" className="h-10" /> {/* Imposta un'altezza fissa per il logo */}
          </Link>
          {/* Qui potresti aggiungere la navigazione principale */}
        </div>
      </header>
      <main className="flex-grow container mx-auto py-8 px-4">
        {children}
      </main>
      <footer className="p-4 text-center text-sm text-dyad-text/70 border-t border-dyad-text/20">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Layout;