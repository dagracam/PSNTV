import React from "react";
import { Link } from "react-router-dom";
import { MadeWithDyad } from "./made-with-dyad";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-radial-gradient-dark-edges text-dyad-text">
      <header className="sticky top-0 z-40 w-full border-b border-dyad-text/20 bg-dyad-bg/40 backdrop-blur-sm p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-dyad-text hover:text-dyad-text/80 transition-colors duration-200">
            RaiPlay Clone
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