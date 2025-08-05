import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCode, FiCoffee } from "react-icons/fi";

interface GreetingModalProps {
  onClose: () => void;
  show: boolean;
}

const GreetingModal = ({ onClose, show }: GreetingModalProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            key="modal-content"
            className="relative max-w-md w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 p-8 shadow-2xl"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white rounded-full hover:bg-slate-700 transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <FiCode className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold text-white">
                Welcome to My Journey
              </h1>
            </div>

            <div className="space-y-4 text-slate-300">
              <p>
                Thanks for stopping by! I&rsquo;m a{" "}
                <span className="text-blue-400">self-taught developer</span>{" "}
                who&rsquo;s been navigating the coding world alone - figuring
                out best practices, technologies, and patterns through trial and
                error.
              </p>

              <p>
                <span className="text-white font-medium">
                  What you see here
                </span>{" "}
                represents countless hours of independent learning. While
                I&rsquo;m proud of how far I&rsquo;ve come, I know
                <span className="text-yellow-400">
                  {" "}
                  guidance from experienced developers
                </span>{" "}
                could help me grow exponentially.
              </p>

              <div className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <FiCoffee className="flex-shrink-0 mt-1 text-amber-400" />
                <p className="text-sm">
                  If you see potential in my work and would consider mentoring
                  me, I&rsquo;d be incredibly grateful for the opportunity to
                  learn from your experience.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                Explore My Portfolio
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GreetingModal;
