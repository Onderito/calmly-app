import React from "react";
import Image from "next/image";
import Button from "../components/Button";

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

export default function Pricing() {
  return (
    <section>
      <h2 className="text-center text-[#404040] text-[28px] font-bold leading-tight">
        Un accompagnement à votre rythme.{" "}
      </h2>
      <p className="text-center font-regular text-[14px] mt-6 text-[#404040]">
        Commencez gratuitement. Passez à Serein ou Profond si vous souhaitez
        aller plus loin.
      </p>

      <div className="flex flex-col gap-6 mt-10">
        {pricing.map((price, index) => (
          <div
            key={index}
            className={`shadow-custom rounded-3xl p-6 relative overflow-hidden ${
              index === 1 ? "border-gradient-blue-white" : ""
            }`}
          >
            {index === 1 && (
              <>
                <button className="absolute bg-[#86C0FA] text-white font-manrope-bold p-2 rounded-bl-2xl top-0 right-0">
                  le plus populaire
                </button>

                <div className="w-20 h-20 absolute bg-gradient-to-b from-[#86C0FA] to-white rounded-full bottom-[-40px] right-[-30px] blur-[7px] -z-10"></div>
                <div className="w-20 h-20 absolute bg-gradient-to-b from-white to-[#86C0FA] rounded-full bottom-10 left-[-50px] blur-[15px] -z-10"></div>
              </>
            )}
            <h3 className="text-[28px] text-[#86C0FA] font-manrope-bold  ">
              {price.price}
              {index !== 0 && <span className="text-[14px]">/mois</span>}
            </h3>
            <h4 className="font-manrope-bold text-[20px] text-[#404040] mt-4">
              {price.title}
            </h4>
            <p className="text-[#404040] text-[16px] font-manrope-regular mt-2">
              {price.description}
            </p>
            <ul className="mt-8">
              <li>
                {price.features.map((feature, index) => (
                  <p
                    key={index}
                    className="flex gap-2 text-[#404040] text-[16px] font-manrope-regular mt-2"
                  >
                    <Image
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
              className={`w-full mt-8 rounded-2xl ${
                index === 1 ? "shadow-inner-white" : ""
              } `}
              variant="primary"
            >
              {price.button}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
