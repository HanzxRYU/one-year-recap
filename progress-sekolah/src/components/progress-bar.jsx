import { motion } from "framer-motion";

const ProgressBar = ({ progress }) => {
  // Tentukan warna berdasarkan progress
  let barColor = "bg-red-500";
  if (progress >= 80) barColor = "bg-green-500";
  else if (progress >= 40) barColor = "bg-yellow-400";

  return (
    <div className="w-full mt-3">
      {/* Background Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        {/* Bar Isi (Animasi Framer Motion) */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`h-3 ${barColor} rounded-full`}
        />
      </div>

      {/* Label Persen */}
      <div className="text-xs text-gray-500 mt-1">{progress}% selesai</div>
    </div>
  );
};

export default ProgressBar;
