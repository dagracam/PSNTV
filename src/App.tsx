import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ProgramDetail from './pages/ProgramDetail';
import TuttoRugby from './pages/TuttoRugby';
import UrbanTalk from './pages/UrbanTalk';
import PerSempreConDiego from './pages/PerSempreConDiego';
import PerSempreScugnizzo from './pages/PerSempreScugnizzo';
import DaysOfWar from './pages/DaysOfWar';
import PsnSportClub from './pages/PsnSportClub';
import Schole from './pages/Schole';
import AmiciPelosi from './pages/AmiciPelosi'; // Import the new AmiciPelosi page
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Rotte per pagine di programmi specifiche */}
        <Route path="/persemprecondiego" element={<PerSempreConDiego />} />
        <Route path="/persempre-scugnizzo" element={<PerSempreScugnizzo />} />
        <Route path="/daysofwar" element={<DaysOfWar />} />
        <Route path="/psnsportclub" element={<PsnSportClub />} />
        <Route path="/tuttorugby" element={<TuttoRugby />} />
        <Route path="/urbantalk" element={<UrbanTalk />} />
        <Route path="/schole" element={<Schole />} />
        <Route path="/amicipelosi" element={<AmiciPelosi />} /> {/* New route for Amici Pelosi */}
        {/* Rotta generica per i dettagli dei programmi */}
        <Route path="/program/:id" element={<ProgramDetail />} />
        {/* Rotta per la pagina 404 - Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;