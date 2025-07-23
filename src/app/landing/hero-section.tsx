import React from "react";
import Image from "next/image";
import Button from "../components/Button";

export default function HeroSection() {
  return (
    <section>
      <h1 className="text-[#404040] font-manrope font-bold text-[38px] md:text-[64px] xl:text-[80px] text-center leading-tight  md:leading-18 xl:leading-20">
        Prenez soin de votre esprit, quelques minutes par jour.
      </h1>
      <p className="text-[16px] text-[#404040] font-manrope text-center mt-6 xl:mt-8 md:text-[18px]">
        Un outil simple pour réduire le stress, suivre vos émotions et retrouver
        le calme.
      </p>
      <div className="flex flex-col gap-4 mt-10 xl:flex-row xl:justify-center">
        <Button className="cursor-pointer rounded-lg xl:p-2" variant="primary">
          Commencer gratuitement
        </Button>
        <Button className="cursor-pointer" variant="secondary">
          Comment ça marche ?
        </Button>
      </div>
      <div className="flex justify-center items-end mt-10 relative">
        {/* Image gauche : avant */}
        <div className="z-0 relative">
          <p className="font-gloria text-[12px] text-[#B9B9B9] text-center mb-2">
            avant
          </p>
          <Image
            className="rounded-3xl shadow-lg ring-4 ring-[#F3F3F3] -rotate-2 w-[150px] md:w-[180px] xl:w-[200px] "
            src="/sad.webp"
            alt="sad"
            width={180}
            height={180}
          />
        </div>

        {/* Image droite : après, décalée vers le haut */}
        <div className="z-10 relative -mt-6">
          <p className="font-gloria text-[12px] text-[#B9B9B9] text-center mb-2">
            après
          </p>
          <Image
            className="rounded-3xl shadow-lg ring-4 ring-[#F3F3F3] rotate-2 w-[150px] md:w-[180px] xl:w-[200px]"
            src="/happy.webp"
            alt="happy"
            width={180}
            height={180}
          />
        </div>
      </div>
    </section>
  );
}
