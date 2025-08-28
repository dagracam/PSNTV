import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PlaylistPage from "./pages/PlaylistPage"; // Importa la nuova pagina
import Layout from "./components/Layout"; // Assicurati che Layout sia importato se usato altrove

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} /> {/* Nuova rotta per le playlist */}
        {/* Aggiungi qui altre rotte se necessario */}
      </Routes>
    </Router>
  );
}

export default App;