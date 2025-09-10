import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ProgramDetail from './pages/ProgramDetail';
import PerSempreConDiego from './pages/PerSempreConDiego';
import PerSempreScugnizzo from './pages/PerSempreScugnizzo';
import DaysOfWar from './pages/DaysOfWar';
import PsnSportClub from './pages/PsnSportClub';
import TuttoRugby from './pages/TuttoRugby'; // Import the new TuttoRugby page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/persemprecondiego" element={<PerSempreConDiego />} />
        <Route path="/persempre-scugnizzo" element={<PerSempreScugnizzo />} />
        <Route path="/daysofwar" element={<DaysOfWar />} />
        <Route path="/psnsportclub" element={<PsnSportClub />} />
        <Route path="/tuttorugby" element={<TuttoRugby />} /> {/* New route for Tutto Rugby */}
      </Routes>
    </Router>
  );
}

export default App;