import React from "react";
import { motion } from "framer-motion";

const AnalyticsCard = ({ title, value, icon: Icon, color }) => (
  <motion.div
    className={`bg-gray-800 rounded-lg p-6 shadow-lg overflow-hidden relative ${color}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center justify-between">
      <div className="z-10">
        <p className="mb-1 text-sm font-semibold text-emerald-300">{title}</p>
        <h3 className="text-3xl font-bold text-white">{value}</h3>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-900 opacity-30" />
    <div className="absolute opacity-50 -bottom-4 -right-4 text-emerald-800">
      <Icon className="w-32 h-32" />
    </div>
  </motion.div>
);

export default AnalyticsCard;
