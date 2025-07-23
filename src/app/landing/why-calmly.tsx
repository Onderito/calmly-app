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
    <section className="relative">
      <h2 className="text-center text-[#404040] text-[28px] md:text-[56px] font-manrope-bold leading-tight">
        Un espace calme, pensé avec intention.
      </h2>
      <p className="text-center font-manrope-regular text-[14px] md:text-[18px] mt-4 text-[#404040]">
        Chaque détail est conçu pour apaiser, respecter votre rythme et
        préserver ce que vous ressentez.
      </p>

      {/* Vector qui déborde de toute la largeur de l'écran */}
      <Image
        className="hidden xl:block xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:top-34 xl:-z-10 xl:w-screen xl:max-w-none"
        src={"/second-vector.svg"}
        alt="line"
        width={400}
        height={100}
      />

      {/* Cards container */}
      <div className="flex flex-col xl:flex-row xl:justify-center xl:items-stretch gap-6 mt-10 xl:mt-12 relative xl:z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shadow-sm p-4 xl:p-6 rounded-3xl xl:w-[520px] bg-white"
          >
            <div className="flex justify-center bg-[#86C0FA]/10 h-40 md:h-60 rounded-2xl ring-3 ring-white shadow-md relative">
              <Image
                className="md:w-[120px]"
                src={card.img}
                alt="card"
                width={100}
                height={100}
              />
            </div>
            <h3 className="font-manrope-bold mt-6 xl:mt-8 text-[20px] md:text-[26px] text-[#404040]">
              {card.title}
            </h3>
            <p className="font-manrope-regular mt-2 font-man text-[#404040] text-[14px] md:text-[18px] xl:text-[]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
