import { motion } from "framer-motion";
import { CheckCircle2, Clock, XCircle, Circle } from "lucide-react";

const statusMap = {
  selesai: {
    color: "text-green-600",
    bg: "bg-green-100",
    icon: CheckCircle2,
    label: "Selesai",
  },
  berjalan: {
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    icon: Clock,
    label: "Berjalan",
  },
  tertunda: {
    color: "text-red-600",
    bg: "bg-red-100",
    icon: XCircle,
    label: "Tertunda",
  },
  "belum mulai": {
    color: "text-gray-400",
    bg: "bg-gray-200",
    icon: Circle,
    label: "Belum Mulai",
  },
};

const Timeline = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-auto md:overflow-visible"
    >
      <div className="flex md:grid md:grid-cols-12 md:gap-6 md:items-center">
        {data.map(({ bulan, status, catatan }, idx) => {
          const {
            color,
            bg,
            icon: Icon,
            label,
          } = statusMap[status] || statusMap["belum mulai"];
          const isLast = idx === data.length - 1;

          return (
            <div
              key={bulan}
              className={`flex md:flex-col items-center gap-2 md:gap-3 col-span-1 min-w-[80px] md:min-w-auto`}
            >
              {/* Bulan dan Bulatan status */}
              <div className="flex items-center md:flex-col md:items-center gap-3">
                {/* Bulat status */}
                <div className={`relative`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${bg}`}
                  >
                    <Icon className={`${color} w-5 h-5`} />
                  </div>
                  {/* Garis penghubung horizontal (kecuali bulan terakhir) */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-1/2 left-full w-10 h-1 bg-gray-300 translate-x-1/2"></div>
                  )}
                </div>
                {/* Nama Bulan */}
                <span className="text-xs font-semibold md:mt-1">{bulan}</span>
              </div>

              {/* Status Label dan Catatan (vertikal) */}
              <div className="hidden md:block text-center mt-2">
                <p className={`${color} text-xs font-semibold`}>{label}</p>
                {catatan && (
                  <p className="text-gray-500 text-xs mt-1 max-w-[120px] truncate">
                    {catatan}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE: Vertikal timeline */}
      <div className="md:hidden mt-6 border-l-2 border-gray-200 pl-6">
        {data.map(({ bulan, status, catatan }, idx) => {
          const {
            color,
            icon: Icon,
            label,
          } = statusMap[status] || statusMap["belum mulai"];
          return (
            <motion.div
              key={bulan}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="mb-6 relative"
            >
              <div
                className={`absolute -left-5 top-1 bg-white rounded-full border-2 border-gray-300 w-8 h-8 flex items-center justify-center`}
              >
                <Icon className={`${color} w-5 h-5`} />
              </div>
              <p className="font-semibold">{bulan}</p>
              <p className={`${color} text-sm font-semibold`}>{label}</p>
              {catatan && (
                <p className="text-gray-600 text-sm mt-1">{catatan}</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Timeline;
