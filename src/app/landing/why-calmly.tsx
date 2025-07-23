import React from "react";
import Image from "next/image";

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
    <section>
      <h2 className="text-center text-[#404040] text-[28px] font-bold leading-tight">
        Un espace calme, pensé avec intention.
      </h2>
      <p className="text-center font-regular text-[14px] mt-4 text-[#404040]">
        Chaque détail est conçu pour apaiser, respecter votre rythme et
        préserver ce que vous ressentez.
      </p>

      {/* Cards container */}

      <div className="flex flex-col gap-6 mt-10">
        {cards.map((card, index) => (
          <div key={index} className="shadow-sm p-4 rounded-3xl ">
            <div className="flex justify-center bg-[#86C0FA]/10 h-40 rounded-2xl ring-3 ring-white shadow-md">
              <Image src={card.img} alt="card" width={100} height={100} />
            </div>
            <h3 className="font-manrope-bold  mt-6 text-[20px] text-[#404040] ">
              {card.title}
            </h3>
            <p className="font-manrope-regular mt-2 font-man text-[#404040] text-[14px]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
