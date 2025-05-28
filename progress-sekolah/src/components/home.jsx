import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MotionLink = motion(Link);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: -40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% center", "100% center"],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "linear",
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="min-h-screen bg-[#F5F1E9] flex flex-col items-center justify-center px-6 font-[Poppins,sans-serif] text-[#4B4B4B] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Dots */}
      <motion.div
        className="absolute w-96 h-96 bg-[#ddd8c9] rounded-full opacity-20 top-[-100px] left-[-100px]"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-[#e5e0c9] rounded-full opacity-15 bottom-[-80px] right-[-80px]"
        animate={{ y: [10, -15, 10] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Greetings */}
      <motion.h2
        className="text-5xl font-extrabold bg-gradient-to-r from-[#A77D39] via-[#C9B179] to-[#F0DFA6] bg-clip-text text-transparent text-center mb-8"
        style={{
          backgroundSize: "250% auto",
          lineHeight: "1.2",
        }}
        animate={controls}
      >
        Greetings, welcome to my space!
      </motion.h2>

      {/* Konten Utama */}
      <motion.div className="flex flex-col items-center gap-6">
        {/* Hero Section */}
        <motion.img
          src="../public/me.jpg"
          alt="Foto Pemilik"
          className="w-36 h-36 rounded-full shadow-lg border-4 border-[#C6B899] object-cover mt-2 mb-4"
          variants={imageVariants}
        />

        {/* Nama & Quote */}
        <motion.div
          className="flex flex-col items-center text-center max-w-xs"
          variants={textVariants}
        >
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#A77D39] via-[#C9B179] to-[#F0DFA6] bg-clip-text text-transparent">
            Rafi'uddin Hannan
          </h1>
          <p className="mt-1 text-sm text-[#7A7463]">
            Don't change a thing, you are amazing
          </p>
        </motion.div>

        {/* Intro */}
        <motion.p
          className="max-w-md leading-relaxed text-[#5A574B] text-center shadow-sm px-4 py-2 rounded-lg bg-[#E6E1C9]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          Website ini berisi rangkuman pencapaian saya selama satu tahun
          terakhir.
        </motion.p>

        {/* Link Section */}
        <div className="flex gap-6">
          {[
            { to: "/achievement", label: "🎯 Lihat Pencapaian" },
            { to: "/skills", label: "📚 Cek Keterampilan Saya" },
          ].map((btn, i) => (
            <MotionLink
              key={btn.to}
              to={btn.to}
              className="px-5 py-2 border border-transparent rounded-md text-sm font-semibold cursor-pointer text-[#5A574B] hover:bg-[#4B4534] hover:text-white transition-all duration-300 bg-transparent min-w-[140px] text-center shadow-sm"
              custom={i}
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {btn.label}
            </MotionLink>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
