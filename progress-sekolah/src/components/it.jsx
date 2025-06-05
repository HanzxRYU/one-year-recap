import { motion } from "framer-motion";
import skills from "../data/it";
import { Link } from "react-router-dom";

const projectCards = [
  {
    title: "Kalkulator BMI",
    img: "./bmi.jpg",
    link: "https://bmi-ku.netlify.app/",
  },
  {
    title: "E-commerce shop",
    img: "./e-commerce.jpg",
    link: "https://udonshop.netlify.app/",
  },
  {
    title: "Finance App",
    img: "./finance.jpg",
    link: "https://finansia.netlify.app/",
  },
];

const barColor = "#C6B899";

export default function It() {
  return (
    <motion.div
      className="min-h-screen bg-[#F5F1E9] px-6 py-12 font-[Poppins,sans-serif] text-[#4B4B4B] flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#A77D39] via-[#C9B179] to-[#F0DFA6] bg-clip-text text-transparent text-center">
        Keterampilan & Proyek IT
      </h1>

      {/* Skills Section */}
      <div className="w-full max-w-3xl space-y-6 mb-12">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="bg-[#E6E1C9] rounded-lg p-4 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="flex justify-between mb-1">
              <h3 className="font-semibold text-[#5A574B]">{skill.title}</h3>
              <span className="text-sm text-[#7A7463]">{skill.level}</span>
            </div>
            <p className="text-sm text-[#4B4B4B] mb-2">{skill.description}</p>
            <div className="w-full bg-[#d6d1b8] rounded-full h-3">
              <div
                className="h-3 rounded-full"
                style={{
                  width: `${skill.progress || 80}%`,
                  backgroundColor: barColor,
                }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Projects Section */}
      <h2 className="text-2xl font-bold text-center mb-6">Proyek Terkait</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
        {projectCards.map((proj, i) => (
          <motion.div
            key={proj.title}
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-32">
              <h3 className="text-lg font-bold text-[#A77D39]">{proj.title}</h3>
              <Link
                to={proj.link}
                target="_blank"
                className="text-sm text-[#4B4B4B] underline hover:text-[#C6B899] mt-2"
              >
                Lihat Proyek →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Back to Home Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/"
          className="mt-8 inline-block px-6 py-2 border border-[#C6B899] rounded-md text-[#5A574B] hover:bg-[#4B4534] hover:text-white transition-all duration-300"
        >
          ← Kembali ke Beranda
        </Link>
      </motion.div>
    </motion.div>
  );
}
