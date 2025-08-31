import React from "react";
import { Link } from "react-router-dom";
import { Home, Search, Tv, User, Menu } from "lucide-react"; // Importa l'icona Menu

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dyad-background text-dyad-text">
      {/* Header */}
      <header className="w-full bg-dyad-background border-b border-dyad-border p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-xl font-bold text-dyad-text">PerSempreNews</span>
        </div>
        {/* Search Bar (Placeholder) */}
        <div className="relative w-1/3 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-dyad-text/60" />
          <input
            type="text"
            placeholder="Cerca..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-dyad-card border border-dyad-border focus:outline-none focus:ring-2 focus:ring-dyad-primary text-dyad-text placeholder-dyad-text/60"
          />
        </div>
        {/* User Profile (Placeholder) */}
        <div className="flex items-center space-x-2">
          <User className="h-6 w-6 text-dyad-text/80" />
          <span className="text-dyad-text/80">Nome Utente</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 pb-16"> {/* Aggiunto pb-16 per lasciare spazio al footer */}
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-dyad-card border-t border-dyad-border p-2 flex justify-around items-center md:hidden z-10">
        <Link to="/" className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-text flex-1"> {/* Aggiunto flex-1 */}
          <Home className="h-5 w-5" />
          Home
        </Link>
        <Link to="/search" className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-text flex-1"> {/* Aggiunto flex-1 */}
          <Search className="h-5 w-5" />
          Cerca
        </Link>
        <Link to="/live" className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-text flex-1"> {/* Aggiunto flex-1 */}
          <Tv className="h-5 w-5" />
          Live
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-xs text-dyad-text/70 hover:text-dyad-text flex-1"> {/* Aggiunto flex-1 */}
          <Menu className="h-5 w-5" /> {/* Icona Menu ad hamburger */}
          Altro {/* Testo cambiato in "Altro" */}
        </Link>
      </nav>
    </div>
  );
};

export default Layout;