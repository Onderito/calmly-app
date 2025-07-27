"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative shadow-custom rounded-3xl p-6 xl:p-20 bg-[#86C0FA] text-[#404040]">
        <div className="flex flex-col justify-center items-center gap-2  pb-4">
          <h4 className="font-manrope-bold text-[#404040] text-[18px] md:text[20px]">
            Commence ton voyage intérieur
          </h4>
          <p className="text-center font-manrope-regular text-[14px] md:text-[16px] text-[#404040]">
            Un pas après l’autre, vers plus de calme et de clarté.
          </p>
          <Button
            className=" rounded-lg py-2 px-4 border-white mt-4 hover:text-[#404040] hover:bg-white text-white"
            variant="secondary"
          >
            Je commence maintenant
          </Button>
          <div className="border-b border-white/50 w-full py-2"></div>
          <p lang=" font-manrope-regular text-[14px] md:text-[16px] ">
            © 2025 Calmly — Built by UnderDev
          </p>
        </div>
        <svg
          className="absolute top-0 right-0 hidden xl:block"
          width="369"
          height="395"
          viewBox="0 0 369 395"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.35, ease: "easeInOut", delay: 1.6 }}
            d="M49.9036 414C137.396 388.67 269.601 305.541 98.4829 175.668C-72.6347 45.7944 27.1839 -33.3952 98.4829 -56.7559C218.981 -96.2309 434.1 -116.263 330.594 119.409C227.089 355.082 344.404 390.364 416 378.546"
            stroke="white"
            strokeWidth="6"
          />
        </svg>

        <svg
          className="absolute top-0 left-0 hidden xl:block"
          width="254"
          height="395"
          viewBox="0 0 254 395"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.35, ease: "easeInOut", delay: 0.7 }}
            d="M3 412C17.9698 325.673 61.9811 179.638 118.268 286.112C174.554 392.586 50.9034 13.0815 118.268 75.7528C185.632 138.424 251 -186.07 251 -7.94118"
            stroke="white"
            strokeWidth="6"
          />
        </svg>
      </div>
    </motion.footer>
  );
}
