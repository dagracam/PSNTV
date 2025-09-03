// src/types/program.ts
export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
  year: number;
  duration: string;
  director: string;
  cast: string[];
  trailerUrl: string;
  fullVideoUrl: string;
  videoUrl: string; // Aggiunto il campo videoUrl
  tags: string[];    // Aggiunto il campo tags
}