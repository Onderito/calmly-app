"use client";

import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import { easeInOut, motion, Variants } from "framer-motion";

const pricing = [
  {
    price: "Gratuit",
    title: "Essentiel",
    description: "Pour commencer sans pression, en toute simplicité.",
    features: [
      "Suivi d’humeur quotidien ",
      "Accès journal illimité",
      "100% confidentialité ",
      "Rappels doux optionnels",
    ],
    img: "/checked-circle.svg",
    button: "Commencer gratuitement",
  },
  {
    price: "4.90",
    title: "Serein",
    description:
      "Pour avancer sereinement et prendre soin de soi, jour après jour.",
    features: [
      "Tout dans Essentiel",
      "Statistiques d’évolution",
      "Accès aux thèmes visuels",
      "Exercices audio guidés",
    ],
    img: "/checked-circle.svg",
    button: "Choisir Serein",
  },
  {
    price: "9.90",
    title: "Profond",
    description: "Pour aller plus loin dans la connaissance de soi.",
    features: [
      "Tout dans Serein",
      "Journal vocal (audio)",
      "Export PDF de vos écrits",
      "Visualisation avancée de l’état émotionnel",
    ],
    img: "/checked-circle.svg",
    button: "Choisir Profond",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Pricing() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeInOut }}
        className="text-center text-[#404040] text-[28px] md:text-[56px] font-bold leading-tight"
      >
        Un accompagnement à votre rythme.{" "}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeInOut, delay: 0.3 }}
        className="text-center font-regular text-[14px] md:text-[18px] mt-4 text-[#404040]"
      >
        Commencez gratuitement. Passez à Serein ou Profond si vous souhaitez{" "}
        <br className="hidden md:block" />
        aller plus loin.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col xl:flex-row gap-6 mt-10 xl:mt-12"
      >
        {pricing.map((price, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`shadow-custom rounded-3xl p-6 relative overflow-hidden xl:w-[520px] ${
              index === 1 ? "border-gradient-blue-white" : ""
            }`}
          >
            {index === 1 && (
              <>
                <button className="absolute bg-[#86C0FA] text-white font-manrope-bold p-2 md:p-4 rounded-bl-2xl top-0 right-0 md:text-[16px]">
                  le plus populaire
                </button>

                <div className="w-20 h-20 absolute bg-gradient-to-b from-[#86C0FA] to-white rounded-full bottom-[-40px] right-[-30px] blur-[7px] -z-10"></div>
                <div className="w-20 h-20 absolute bg-gradient-to-b from-white to-[#86C0FA] rounded-full bottom-10 left-[-50px] blur-[15px] -z-10"></div>
              </>
            )}
            <h3 className="text-[28px] md:text-[32px] text-[#86C0FA] font-manrope-bold  ">
              {price.price}
              {index !== 0 && (
                <span className="text-[14px] md:text-[16px]">/mois</span>
              )}
            </h3>
            <h4 className="font-manrope-bold text-[20px] md:text-[24px] text-[#404040] mt-4 xl:mt-6">
              {price.title}
            </h4>
            <p className="text-[#404040] text-[16px] md:text-[18px] font-manrope-regular mt-2 ">
              {price.description}
            </p>
            <ul className="mt-8">
              <li>
                {price.features.map((feature, index) => (
                  <p
                    key={index}
                    className="flex gap-2 text-[#404040] text-[16px] md:text-[18px] font-manrope-regular mt-2 xl:mt-4 xl:w-screen"
                  >
                    <Image
                      className="md:w-[30px]"
                      src={price.img}
                      alt="checked-circle"
                      width={20}
                      height={20}
                    />
                    {feature}
                  </p>
                ))}
              </li>
            </ul>
            <Button
              className={`w-full mt-8 xl:mt-10 rounded-2xl ${
                index === 1 ? "shadow-inner-white" : ""
              } `}
              variant="primary"
            >
              {price.button}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
