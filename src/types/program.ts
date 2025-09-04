export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  videoUrl: string; // Aggiunto il campo videoUrl
  tags: string[];    // Aggiunto il campo tags
}