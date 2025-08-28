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
    <div className="min-h-screen bg-dyad-bg text-dyad-text">
      <header className="sticky top-0 z-40 w-full bg-dyad-bg/80 backdrop-blur-sm border-b border-dyad-border">
        <div className="container mx-auto h-16 flex items-center justify-between px-4">
          <Link to="/" className="flex items-center">
            <img src="/psn-2024-trasparente.png" alt="PSN Logo" className="h-10" /> {/* Percorso aggiornato */}
          </Link>
          {/* Qui potresti aggiungere la navigazione principale */}
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">{children}</main>
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