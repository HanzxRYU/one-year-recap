// src/components/ProjectCard.jsx
import React from "react";
import { Calendar, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import CategoryIcon from "./categoryIcon";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 flex flex-col"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(59,130,246,0.3)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Gambar */}
      {project.gambarUrl && (
        <img
          src={project.gambarUrl}
          alt={project.nama}
          className="w-full h-36 object-cover rounded-md mb-4"
        />
      )}

      {/* Nama & Kategori */}
      <h3 className="text-lg font-semibold mb-1 flex items-center">
        {project.nama}
      </h3>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <CategoryIcon kategori={project.kategori} />
        <span>{project.kategori}</span>
      </div>

      {/* Jenis Kegiatan */}
      <p className="text-gray-700 mb-4 flex items-center">
        <ClipboardList className="w-4 h-4 mr-1" />
        {project.jenis}
      </p>

      {/* Progress Bar */}
      <ProgressBar progress={project.progress} />

      {/* Progress Text & Estimasi */}
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>Progress: {project.progress}%</span>
        <span className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {project.estimasiSelesai}
        </span>
      </div>
    </motion.div>
  );
}
