"use client";

import Link from "next/link";
import React from "react";
import { motion, easeInOut } from "framer-motion";

export default function Header() {
  return (
    <div className="w-full relative flex items-center px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: easeInOut }}
        className="w-20 h-20 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-15 rounded-full bg-gradient-to-b from-white to-[#86C0FA] blur-xs "
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: easeInOut }}
      >
        <Link
          href="/"
          className="text-2xl font-bold font-manrope text-[#404040]"
        >
          calmly
        </Link>
      </motion.div>
    </div>
  );
}
