export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  tags?: string[]; // Aggiunto il campo tags opzionale
}