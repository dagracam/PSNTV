import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; // Importa il componente Analytics

createRoot(document.getElementById("root")!).render(<App />);
