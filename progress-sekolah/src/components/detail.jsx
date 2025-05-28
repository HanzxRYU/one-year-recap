import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { achievements } from "../data/achievement";

export default function Detail() {
  const { id } = useParams();
  const item = achievements.find((d) => d.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#F5F1E9] flex items-center justify-center p-6 font-[Poppins,sans-serif]">
        <p className="text-[#4B4B4B] text-lg">Data tidak ditemukan 😿</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-[#F5F1E9] flex justify-center items-center p-6 font-[Poppins,sans-serif]"
    >
      <article
        className="
          bg-[#E6E1C9] rounded-2xl shadow-xl
          max-w-4xl w-full
          flex flex-col md:flex-row md:gap-12
          items-center
          p-10
          select-text
          "
      >
        {/* Image */}
        {item.photoUrl && (
          <img
            src={item.photoUrl}
            alt={item.title}
            className="rounded-xl max-w-xs w-full h-auto object-cover shadow-md mb-8 md:mb-0 md:flex-shrink-0"
            loading="lazy"
          />
        )}

        {/* Content */}
        <section className="flex-1 text-center md:text-left">
          <h1
            className="
              text-4xl font-extrabold 
              bg-gradient-to-r from-[#A77D39] via-[#C9B179] to-[#F0DFA6]
              bg-clip-text text-transparent
              leading-tight
              mb-4
              tracking-wide
              "
          >
            {item.title}
          </h1>
          <time
            dateTime={item.date}
            className="block mb-8 text-[#7A7463] font-semibold text-sm tracking-widest"
          >
            {item.date}
          </time>
          <p className="text-[#4B4B4B] leading-relaxed max-w-prose mx-auto md:mx-0 text-lg whitespace-pre-line">
            {item.description}
          </p>

          <Link
            to="/achievement"
            className="
              inline-block mt-12 px-7 py-3 rounded-lg
              bg-transparent text-[#5A574B]
              border border-transparent shadow-sm
              text-base font-semibold cursor-pointer
              hover:bg-[#4B4534] hover:text-white
              transition duration-300
              "
          >
          Achievement
          </Link>
        </section>
      </article>
    </motion.div>
  );
}
