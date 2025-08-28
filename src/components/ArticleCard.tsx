import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    author: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`} className="group block">
      <Card className="h-full flex flex-col bg-dyad-card hover:bg-dyad-card/80 transition-colors duration-200 overflow-hidden">
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="flex-grow">
          <CardTitle className="text-lg font-semibold text-dyad-text group-hover:text-dyad-text/90 transition-colors duration-200 line-clamp-2">
            {article.title}
          </CardTitle>
          <p className="text-sm text-dyad-text/70 mt-2 line-clamp-3">
            {article.description}
          </p>
        </CardHeader>
        <CardContent className="pt-0 text-sm text-dyad-text/60">
          <p>{article.date} • {article.author}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;