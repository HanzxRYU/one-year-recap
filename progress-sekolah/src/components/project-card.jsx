import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import TagKategori from "./TagKategori";

const ProjectCard = ({
  id,
  nama,
  kategori,
  jenis,
  progress,
  estimasiSelesai,
  gambarUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow p-4 hover:shadow-lg cursor-pointer flex flex-col md:flex-row items-center md:items-start gap-4"
    >
      {/* Gambar Thumbnail */}
      <img
        src={gambarUrl}
        alt={`Thumbnail ${nama}`}
        className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0"
      />

      {/* Info Konten */}
      <div className="flex flex-col flex-1 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{nama}</h3>
          <TagKategori kategori={kategori} />
        </div>

        <p className="text-sm text-gray-500 mt-1">{jenis}</p>

        <ProgressBar progress={progress} />

        <p className="text-xs text-gray-400 mt-2">
          Estimasi selesai: {estimasiSelesai}
        </p>

        <Link
          to={`/detail/${id}`}
          className="mt-3 inline-block text-indigo-600 text-sm font-medium hover:underline"
        >
          Lihat Detail →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
