"use client";

import React, { useState } from "react";
import { motion, easeInOut, AnimatePresence } from "framer-motion";

const faq = [
  {
    question: "Est-ce que Calmly est vraiment gratuit ?",
    img: "+",
    answer: "Oui, Calmly est gratuit pour tous.",
  },
  {
    question: "Puis-je revenir sur ce que j’ai écrit ?",
    img: "+",
    answer: "Oui, vous pouvez consulter vos écrits à tout moment.",
  },
  {
    question: "Puis-je utiliser Calmly sur mon téléphone ?",
    img: "+",
    answer: "Prochainement, mais nous travaillons sur cette fonctionnalité.",
  },
  {
    question: "Est-ce que mes écrits sont vraiment privés ?",
    img: "+",
    answer: "Oui, votre écrit est privé et ne sera pas partagé avec d’autres.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(index === open ? null : index);
  };
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeInOut }}
        className="text-center text-[#404040] text-[28px] md:text-[56px] font-manrope-bold leading-tight"
      >
        Questions{" "}
        <span className="bg-gradient-to-r from-[#86C0FA] to-white text-transparent bg-clip-text">
          fréquentes
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeInOut, delay: 0.3 }}
        className="text-center font-regular text-[14px] md:text-[18px] mt-4 text-[#404040]"
      >
        On répond en toute transparence à ce que vous vous demandez sûrement.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeInOut, delay: 0.3 }}
        className="flex flex-col gap-6 mt-10 xl:mt-12"
      >
        <AnimatePresence>
          {faq.map((f, index) => (
            <motion.div
              layout
              onClick={() => toggle(index)}
              className="shadow-custom rounded-3xl flex flex-col gap-4 p-4 xl:p-8 cursor-pointer"
              key={index}
            >
              <div className="flex gap-4 items-baseline ">
                <p className="xl:text-[20px]">{f.img}</p>
                <div className="flex flex-col gap-2">
                  <h4 className="font-manrope-bold text-[16px] md:text-[18px] xl:text-[20px] text-[#404040]">
                    {f.question}
                  </h4>
                  <AnimatePresence>
                    {open === index && (
                      <motion.h4
                        initial={{ opacity: 0, height: -10 }}
                        animate={{ opacity: 1, height: 30 }}
                        exit={{ opacity: 0, height: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="font-manrope-regular text-[14px] md:text-[16px] xl:text-[18px] text-[#404040]"
                      >
                        {f.answer}
                      </motion.h4>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
