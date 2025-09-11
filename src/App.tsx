import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ProgramDetail from './pages/ProgramDetail';
import TuttoRugby from './pages/TuttoRugby';
import UrbanTalk from './pages/UrbanTalk';
import PerSempreConDiego from './pages/PerSempreConDiego'; // Import the specific page
import PerSempreScugnizzo from './pages/PerSempreScugnizzo'; // Import the specific page
import DaysOfWar from './pages/DaysOfWar'; // Import the specific page
import PsnSportClub from './pages/PsnSportClub'; // Import the specific page with corrected casing
import NotFound from './pages/NotFound'; // Import the NotFound page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Rotte per pagine di programmi specifiche */}
        <Route path="/persemprecondiego" element={<PerSempreConDiego />} />
        <Route path="/persempre-scugnizzo" element={<PerSempreScugnizzo />} />
        <Route path="/daysofwar" element={<DaysOfWar />} />
        <Route path="/psnsportclub" element={<PsnSportClub />} /> {/* Updated route path */}
        <Route path="/tuttorugby" element={<TuttoRugby />} />
        <Route path="/urbantalk" element={<UrbanTalk />} />
        {/* Rotta generica per i dettagli dei programmi */}
        <Route path="/program/:id" element={<ProgramDetail />} />
        {/* Rotta per la pagina 404 - Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;