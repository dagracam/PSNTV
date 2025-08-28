import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In un'applicazione reale, qui faresti un fetch dei dati dell'articolo usando l'ID
  const dummyArticle = {
    id: id,
    title: `Titolo Articolo ${id}`,
    description: `Questa è la descrizione dettagliata dell'articolo ${id}. Qui troverai tutte le informazioni e gli approfondimenti su questo argomento.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    imageUrl: "/placeholder-article-1.jpg", // Immagine di esempio
    date: "15 Maggio 2024",
    author: "Redazione PSN",
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 py-8">
        <h1 className="text-4xl font-bold text-dyad-text">{dummyArticle.title}</h1>
        <p className="text-lg text-dyad-text/80">
          {dummyArticle.date} • {dummyArticle.author}
        </p>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <img
            src={dummyArticle.imageUrl}
            alt={dummyArticle.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-dyad-text/90 leading-relaxed space-y-4">
          <p>{dummyArticle.description}</p>
          <p>{dummyArticle.content}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;