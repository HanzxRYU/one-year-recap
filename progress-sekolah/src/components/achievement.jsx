import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { achievements } from "../data/achievement";

export default function Achievement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#F5F1E9] px-6 py-20 text-[#4B4B4B] font-[Poppins,sans-serif]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-[#A77D39] via-[#C9B179] to-[#F0DFA6] bg-clip-text text-transparent">
          🎯 List Pencapaian
        </h2>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#E6E1C9] rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Gambar */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              )}

              {/* Judul */}
              <Link
                to={`/detail/${item.id}`}
                className="text-lg font-semibold text-[#5A574B] hover:text-[#4B4534] hover:underline"
              >
                {item.title}
              </Link>

              {/* Deskripsi */}
              <p className="text-sm text-[#7A7463] mt-2 line-clamp-3">
                {item.description || "Deskripsi belum tersedia."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-block text-sm font-medium text-[#5A574B] hover:text-white bg-transparent border border-[#C9B179] hover:bg-[#4B4534] px-5 py-2 rounded-lg transition-colors"
          >
          Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
