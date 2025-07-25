"use client";

import React from "react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

const cards = [
  {
    img: "/wait.svg",
    title: "Avancez à votre rythme.",
    description:
      "Ici, pas de rappels intrusifs, pas de séries à compléter, pas de notation. Vous ouvrez l’app quand vous en ressentez le besoin — c’est tout.",
  },
  {
    img: "/pen.svg",
    title: "Écrivez en toute confiance.",
    description:
      "Vos mots ne sont ni partagés, ni analysés. pas de tracking. Votre espace est protégé, intime, fermé aux regards.",
  },
  {
    img: "/flower.svg",
    title: "Un espace toujours là.",
    description:
      "Peu importe où vous êtes ou ce que vous vivez, Calmly est là. Ouvert à toute heure. Sans jugement. Juste pour vous.",
  },
];

export default function WhyCalmly() {
  return (
    <section className="relative">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeInOut }}
        className="text-center text-[#404040] text-[28px] md:text-[56px] font-manrope-bold leading-tight"
      >
        Un espace calme, pensé avec intention.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeInOut, delay: 0.3 }}
        className="text-center font-manrope-regular text-[14px] md:text-[18px] mt-4 text-[#404040]"
      >
        Chaque détail est conçu pour apaiser, respecter votre rythme et
        préserver ce que vous ressentez.
      </motion.p>

      {/* Vector qui déborde de toute la largeur de l'écran */}
      <svg
        className="hidden xl:block xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:top-34 xl:-z-10 xl:w-screen xl:max-w-none"
        width="1728"
        height="410"
        viewBox="0 0 1728 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.35, ease: easeInOut, delay: 1.5 }}
          d="M-10 264.023C163.546 124.918 510.638 -97.2617 510.638 126.855C510.638 350.971 771.973 407 902.641 407C971.244 209.698 1137.45 -135.514 1253.46 62.0549C1369.47 259.623 1624.82 346.01 1738 364.507"
          stroke="#86C0FA"
          strokeOpacity="0.4"
          strokeWidth="6"
        />
      </svg>

      {/* Cards container */}
      <div className="flex flex-col xl:flex-row xl:justify-center xl:items-stretch gap-6 mt-10 xl:mt-12 relative xl:z-10">
        {cards.map((card, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: easeInOut, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            key={index}
            className="shadow-sm p-4 xl:p-6 rounded-3xl xl:w-[520px] bg-white"
          >
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: easeInOut, delay: 0.8 }}
              className="flex justify-center bg-[#86C0FA]/10 h-40 md:h-60 rounded-2xl ring-3 ring-white shadow-md relative"
            >
              <motion.img
                initial={{ opacity: 0, x: -50, y: 50, scale: 0.9, rotate: 8 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: easeInOut, delay: 1 }}
                className="md:w-[120px]"
                src={card.img}
                alt="card"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeInOut, delay: 0.9 }}
              className="font-manrope-bold mt-6 xl:mt-8 text-[20px] md:text-[26px] text-[#404040]"
            >
              {card.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeInOut, delay: 1.1 }}
              className="font-manrope-regular mt-2 font-man text-[#404040] text-[14px] md:text-[18px] xl:text-[]"
            >
              {card.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
