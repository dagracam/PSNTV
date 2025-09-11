import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ProgramDetail from './pages/ProgramDetail';
import TuttoRugby from './pages/TuttoRugby';
import UrbanTalk from './pages/UrbanTalk';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/programmi/:id" element={<ProgramDetail />} />
        <Route path="/programmi/tutto-rugby" element={<TuttoRugby />} />
        <Route path="/programmi/urban-talk" element={<UrbanTalk />} />
      </Routes>
    </Router>
  );
}

export default App;