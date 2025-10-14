import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ProgramDetail from './pages/ProgramDetail';
import AmiciPelosi from './pages/AmiciPelosi';
import ParlamiDAmore from './pages/ParlamiDAmore';
import LaSaluteInUnClick from './pages/LaSaluteInUnClick';
import LaVitaQuestoPalcoscenico from './pages/LaVitaQuestoPalcoscenico';
import InSicurezza from './pages/InSicurezza';
import PerSempreConDiego from './pages/PerSempreConDiego'; // Import aggiunto
import PerSempreScugnizzo from './pages/PerSempreScugnizzo'; // Import aggiunto
import DaysOfWar from './pages/DaysOfWar'; // Import aggiunto
import PsnSportClub from './pages/PsnSportClub'; // Import aggiunto
import TuttoRugby from './pages/TuttoRugby'; // Import aggiunto
import UrbanTalk from './pages/UrbanTalk'; // Import aggiunto
import Schole from './pages/Schole'; // Import aggiunto
import AboutUsPage from './pages/AboutUsPage'; // Import aggiunto per la pagina "Chi siamo"
import PlaceholderPage from './pages/PlaceholderPage'; // Import aggiunto per le pagine placeholder
import FlashNews from './pages/FlashNews'; // Import aggiunto per Flash News
import IntervistaloTu from './pages/IntervistaloTu'; // Import aggiunto per Intervistalo Tu

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} /> {/* Questa è la vecchia pagina About */}
        <Route path="/about-us" element={<AboutUsPage />} /> {/* Nuova pagina Chi siamo */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/amicipelosi" element={<AmiciPelosi />} />
        <Route path="/parlamidamore" element={<ParlamiDAmore />} />
        <Route path="/lasaluteinunclick" element={<LaSaluteInUnClick />} />
        <Route path="/lavitaquestopalcoscenico" element={<LaVitaQuestoPalcoscenico />} />
        <Route path="/insicurezza" element={<InSicurezza />} />
        <Route path="/persemprecondiego" element={<PerSempreConDiego />} /> {/* Rotta aggiunta */}
        <Route path="/persempre-scugnizzo" element={<PerSempreScugnizzo />} /> {/* Rotta aggiunta */}
        <Route path="/daysofwar" element={<DaysOfWar />} /> {/* Rotta aggiunta */}
        <Route path="/psnsportclub" element={<PsnSportClub />} /> {/* Rotta aggiunta */}
        <Route path="/tuttorugby" element={<TuttoRugby />} /> {/* Rotta aggiunta */}
        <Route path="/urbantalk" element={<UrbanTalk />} /> {/* Rotta aggiunta */}
        <Route path="/schole" element={<Schole />} /> {/* Rotta aggiunta */}
        <Route path="/flashnews" element={<FlashNews />} /> {/* Rotta aggiunta per Flash News */}
        <Route path="/intervistalotu" element={<IntervistaloTu />} /> {/* Rotta aggiunta per Intervistalo Tu */}
        {/* Rotte per le pagine placeholder dal MoreMenuDialog */}
        <Route path="/cookie-preferences" element={<PlaceholderPage title="Preferenze dei cookie" />} />
      </Routes>
    </Router>
  );
}

export default App;