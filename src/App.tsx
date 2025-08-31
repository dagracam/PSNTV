import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgramDetail from "./pages/ProgramDetail";
import PerSempreConDiego from "./pages/PerSempreConDiego";
import PerSempreScugnizzo from "./pages/PerSempreScugnizzo";
import DaysOfWar from "./pages/DaysOfWar"; // Importa la nuova pagina

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
          <Route path="/daysofwar" element={<DaysOfWar />} /> {/* Nuova rotta */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;