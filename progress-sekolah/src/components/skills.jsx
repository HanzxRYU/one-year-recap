import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { skills } from "../data/skills";
import { BarChart2 } from "lucide-react";

const MotionLink = motion(Link);

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#F5F1E9] p-6 font-[Poppins,sans-serif] text-[#4B4B4B]"
    >
      <h2
        className="text-2xl font-extrabold mb-8 flex items-center gap-3 
                   bg-gradient-to-r from-[#A77D39] via-[#C9B179] to-[#F0DFA6] 
                   bg-clip-text text-transparent"
      >
        <BarChart2 className="w-6 h-6" /> Keterampilan Saya 📚
      </h2>

      <div
        className="grid gap-6 max-w-4xl mx-auto
                   grid-cols-1 sm:grid-cols-2"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-[#E6E1C9] rounded-2xl p-6 shadow-md flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, ease: "easeOut" }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg">{skill.nama}</span>
              <span className="text-sm text-[#7A7463] font-medium">
                {skill.nilai}%
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-[#A77D39] via-[#C9B179] to-[#F0DFA6] h-4 rounded-full"
                style={{ width: `${skill.nilai}%` }}
              ></div>
            </div>
            <p className="text-[#5A574B] mt-3 text-sm leading-relaxed flex-grow">
              {skill.deskripsi}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-12"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionLink
          to="/"
          className="px-5 py-2 border border-transparent rounded-md text-sm font-semibold cursor-pointer text-[#5A574B] hover:bg-[#4B4534] hover:text-white transition-all duration-300 bg-transparent min-w-[140px] text-center shadow-sm"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
        Home
        </MotionLink>
      </motion.div>
    </motion.div>
  );
}
