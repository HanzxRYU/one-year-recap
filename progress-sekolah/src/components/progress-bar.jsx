// src/components/ProgressBar.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
      <motion.div
        className="h-4 bg-blue-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
}
