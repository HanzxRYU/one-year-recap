import { Award, BookOpen } from "lucide-react";

const CategoryIcon = ({ kategori }) => {
  switch (kategori.toLowerCase()) {
    case "ekstrakurikuler":
      return <Award className="w-4 h-4 mr-1" />;
    case "mapel":
      return <BookOpen className="w-4 h-4 mr-1" />;
    default:
      return null;
  }
};
