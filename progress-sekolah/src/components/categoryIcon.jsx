// src/components/CategoryIcon.jsx
import React from "react";
import { Award, BookOpen } from "lucide-react";

export default function CategoryIcon({ kategori }) {
  if (!kategori) return null;

  switch (kategori.toLowerCase()) {
    case "ekstrakurikuler":
      return <Award className="w-4 h-4 mr-1" />;
    case "mapel":
      return <BookOpen className="w-4 h-4 mr-1" />;
    default:
      return null;
  }
}
