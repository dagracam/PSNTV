import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; // Importa il componente Analytics
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgramDetail from "./pages/ProgramDetail";
import PerSempreConDiego from "./pages/PerSempreConDiego";
import PerSempreScugnizzo from "./pages/PerSempreScugnizzo";
import DaysOfWar from "./pages/DaysOfWar";
import PsnSportClub from "./pages/PsnSportClub"; // Importa la nuova pagina
import PlaceholderPage from "./pages/PlaceholderPage";
import AboutUsPage from "./pages/AboutUsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/program/:id" element={<ProgramDetail />} />
          <Route path="/persemprecondiego" element={<PerSempreConDiego />} />
          <Route path="/persempre-scugnizzo" element={<PerSempreScugnizzo />} />
          <Route path="/daysofwar" element={<DaysOfWar />} />
          <Route path="/psnsportclub" element={<PsnSportClub />} /> {/* Nuova rotta per PSN Sport Club */}
          {/* Nuove rotte per il menu "Altro" */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/privacy-policy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/cookie-preferences" element={<PlaceholderPage title="Preferenze dei cookie" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics /> {/* Aggiungi il componente Analytics qui */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;