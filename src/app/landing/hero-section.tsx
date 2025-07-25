"use client";

import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import { easeInOut, motion } from "motion/react";

export default function HeroSection() {
  return (
    <section>
      <div className="absolute inset-0 -z-10 hidden xl:block">
        <Image
          className="rounded-b-[80px]"
          src="/hero-bg.webp" // remplace par le bon chemin
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: easeInOut }}
        className="text-[#404040] font-manrope font-bold text-[38px] md:text-[64px] xl:text-[80px] text-center leading-tight  md:leading-18 xl:leading-20"
      >
        Prenez soin de votre esprit, quelques minutes par jour.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: easeInOut, delay: 0.3 }}
        className="text-[16px] text-[#404040] font-manrope text-center mt-6 xl:mt-8 md:text-[18px]"
      >
        Un outil simple pour réduire le stress, suivre vos émotions et retrouver
        le calme.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 14,
          delay: 0.4,
        }}
        className="flex flex-col gap-4 mt-10 xl:flex-row xl:justify-center"
      >
        <Button className=" rounded-lg xl:p-2" variant="primary">
          Commencer gratuitement
        </Button>
        <Button className="" variant="secondary">
          Comment ça marche ?
        </Button>
      </motion.div>
      <div className="flex justify-center items-end mt-10 relative">
        {/* Image gauche : avant */}
        <motion.div
          whileHover={{ x: -5 }}
          transition={{ duration: 0.5 }}
          className="z-0 relative"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: easeInOut, delay: 1.2 }}
            className="font-gloria text-[12px] xl:text-[18px] text-[#404040] text-center mb-2"
          >
            avant
          </motion.p>
          <motion.img
            initial={{ opacity: 0, x: -100 }} // Départ : invisible et à gauche
            animate={{
              opacity: [0, 1, 1], // Keyframes pour l'opacité
              x: [-100, 0, 0], // Keyframes pour la position X
              y: [0, 50, 0], // Keyframes pour la position Y
            }}
            transition={{
              duration: 2, // Durée totale de l'animation en secondes
              times: [0, 0.5, 1], // Timing des keyframes :
              // - 0 à 0.5 (50% du temps) : arrivée de la gauche
              // - 0.5 à 1 (50% du temps) : montée
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="rounded-3xl shadow-lg ring-4 ring-[#F3F3F3] -rotate-2 w-[150px] md:w-[180px] xl:w-[200px] "
            src="/sad.webp"
            alt="sad"
            width={180}
            height={180}
          />
        </motion.div>

        {/* Image droite : après, décalée vers le haut */}
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.5 }}
          className="z-10 relative -mt-6"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: easeInOut, delay: 1.2 }}
            className="font-gloria text-[12px] xl:text-[18px] text-[#404040] text-center mb-2"
          >
            après
          </motion.p>
          <motion.img
            initial={{ opacity: 0, x: -100 }} // Départ : invisible et à gauche
            animate={{
              opacity: [0, 1, 1], // Keyframes pour l'opacité
              x: [100, 0, 0], // Keyframes pour la position X
              y: [0, 50, 0], // Keyframes pour la position Y
            }}
            transition={{
              duration: 2, // Durée totale de l'animation en secondes
              times: [0, 0.5, 1], // Timing des keyframes :
              // - 0 à 0.5 (50% du temps) : arrivée de la gauche
              // - 0.5 à 1 (50% du temps) : montée
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="rounded-3xl shadow-lg ring-4 ring-[#F3F3F3] rotate-2 w-[150px] md:w-[180px] xl:w-[200px]"
            src="/happy.webp"
            alt="happy"
            width={180}
            height={180}
          />
        </motion.div>
      </div>
    </section>
  );
}
