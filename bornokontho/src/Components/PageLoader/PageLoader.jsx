// components/PageLoader.jsx
import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-9999 bg-[#0f0e0c] flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-16 h-16 border-4 border-[#c2a24a]/20 border-t-[#c2a24a] rounded-full"
      />
    </div>
  );
}
